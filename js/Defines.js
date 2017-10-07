/**
 * Array.
 * @global
 * @type {array}
 */
FRUTAS = [];

/** 
 * Variable de cuchilllo. 
 * @global
 * @type {array}
 */
CUCHILLO = [];

/** 
 * Variable de música.
 * @global
 * @type {array}
 */
MUSICA = [];

/** 
 * Anchura de la pantalla.
 * @global
 * @type {int}
  
 */
CANVAS_WIDTH = 720;
/** 
 * Altura de la pantalla.
 * @global
 * @type {int}
 */
CANVAS_HEIGHT = 480;

/** 
 * Framerate.
 * @global
 * @type {int} 
 */
FPS = 60;

/** 
 * Gravedad.
 * @global
 * @type {float} 
 */
G = 9.8;

/** 
 * Constante para calcular "y". 
 * @global
 * @type {float}
 */
VY_KTE = 0.5;

/** 
 * Establece cada cuánto tiempo se clacula la posición.
 * @global
 * @type {float} 
 */
OFFSET = 0.12;

/** 
 * Parámetro vy máximo para que las frutas (y bombas) aparezcan dentro de la pantalla.
 * @global
 * @type {float}
 */
VY_MAX = -95
/** 
 * Parámetro vy mínimo para que las frutas (y bombas) aparezcan dentro de la pantalla.
 * @global
 * @type {float}
 */
VY_MIN = -75

/** 
 * Valor del radio de las frutas/bombas para dibujarlas.
 * @global
 * @type {float}
 */
RADIUM = 45;



/** 
 * Número de frutas/bombas en pantalla. 
 * @global
 * @type {int}
 */
NUMBOLAS = 3;

/** 
 * Variable de dificultad 1.
 * @global
 * @type {float}
 */
HARDNESS = 0.85;
/** 
 * Variable de dificultad 2.
 * @global
 * @type {float}
 */
ZAILTASUNA = 1;


/** 
 * Número de ciclos.
 * @global
 * @type {int}
 */
ZIKLO = 0;


/** 
 * Posiciñon de las imágenes de vidas.
 * @global
 * @type {array}
 */
POS_VIDAS = [{
        "posX": "690",
        "posY": "20"
    },
    {
        "posX": "665",
        "posY": "20"
    },
    {
        "posX": "640",
        "posY": "20"
    }
];
/** 
 * Número de vidas.
 * @global
 * @type {int}
 */
VIDAS = POS_VIDAS.length;

/** 
 * Especifíca si la música ha de sonar o no.
 * @global
 * @type {boolean}
 */
OP_MUSICA = true;


/**
 * Imágenes. 
 * @global
 * @type {hashmap}
 */
IMAGES = {};
