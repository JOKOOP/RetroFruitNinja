from flask import Flask, request, abort, jsonify
from flask_cors import CORS
from sqlalchemy import desc
from models import Rank
from database import db_session

PORT = 5000
ADDR = "0.0.0.0"

app = Flask(__name__)
CORS(app)

def get_best_rank():
    ranking = Rank.query.order_by(desc(Rank.points)).all()
    rt = []

    for r in ranking:
        if len(rt) < 5:
            rt.append(r)
        else:
            break

    return rt

def get_worst_rank():
    ranking = Rank.query.order_by(Rank.points).all()
    rt = []

    for r in ranking:
        if len(rt) < 5:
            rt.append(r)
        else:
            break

    return rt

def check_rank(id):
    ranking = get_best_rank()
    for r in ranking:
        if r.id == id:
            return "best"

    ranking = get_worst_rank()
    for r in ranking:
        if r.id == id:
            return "worst"

    return "none"

@app.route("/add_rank", methods=["POST"])
def add_rank():
    try:
        data = request.get_json(silent = True)
        r = Rank(data["name"], data["points"])
        try:
            db_session.add(r)
            db_session.commit()

            rank = check_rank(r.id)

            return jsonify({"success" : "true", "rank" : rank}), 200
        except:
            db_session.flush()
            return jsonify({"msg" : "Database Error"}), 500
    except:
        return jsonify({"msg" : "Invalid Request"}), 400

@app.route("/get_best", methods=["GET"])
def get_best():
    try:
        rt = get_best_rank()

        return jsonify(success="true", ranking=[e.serialize() for e in rt]), 200
    except:
        return jsonify({"msg" : "Invalid Request"}), 400

@app.route("/get_worst", methods=["GET"])
def get_worst():
    try:
        rt = get_worst_rank()

        return jsonify(success="true", ranking=[e.serialize() for e in rt]), 200
    except:
        return jsonify({"msg" : "Invalid Request"}), 400


app.run()
