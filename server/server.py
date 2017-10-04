from flask import Flask, request, abort, jsonify
from sqlalchemy import desc
from models import Rank
from database import db_session

PORT = 5000
ADDR = "0.0.0.0"

app = Flask(__name__)

@app.route("/add_rank", methods=["POST"])
def add_rank():
    try:
        data = request.get_json(silent = True)
        r = Rank(data["name"], data["points"])
        try:
            db_session.add(r)
            db_session.commit()
            return jsonify({"success" : "true"}), 200
        except:
            db_session.flush()
            return jsonify({"msg" : "Database Error"}), 500
    except:
        return jsonify({"msg" : "Invalid Request"}), 400

@app.route("/get_best", methods=["GET"])
def get_best():
    try:
        ranking = Rank.query.order_by(desc(Rank.points)).all()
        rt = []

        for r in ranking:
            if len(rt) < 5:
                rt.append(r)
            else:
                break

        return jsonify(success="true", ranking=[e.serialize() for e in rt]), 200
    except:
        return jsonify({"msg" : "Invalid Request"}), 400

@app.route("/get_worst", methods=["GET"])
def get_worst():
    try:
        ranking = Rank.query.order_by(Rank.points).all()
        rt = []

        for r in ranking:
            if len(rt) < 5:
                rt.append(r)
            else:
                break

        return jsonify(success="true", ranking=[e.serialize() for e in rt]), 200
    except:
        return jsonify({"msg" : "Invalid Request"}), 400


app.run()
