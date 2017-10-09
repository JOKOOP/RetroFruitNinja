
/**
 * Variable que contiene los nombres de las canciónes para cada nivel
 * @type {Array}
 */
LEVEL_SONGS = ["radioactive.mp3", "gas.mp3", "90s.mp3"];
/**
 * Canción de victoria
 * @type {String}
 */
SUCC_SONG = "ff.mp3";
/**
 * Canción de derrota
 * @type {String}
 */
OVER_SONG = "morty.mp3";
/**
 * Canción del menu
 * @type {String}
 */
MENU_SONG = "ozzy.mp3"

/**
 * @class JavaScrip que se utiliza para la selección, cambio y ajustes de la musica
 * @property {Audio} cur_son La canción que se está utilizando en el momento para reproducir.
 */
class Musica {

  /**
   * Constructor de la clase, se inicializa la variable cur_song (canción actual)
   * @return {[type]}
   */
  constructor (){
    this.cur_song = 0;
  }

  /**
   * Función utilizada para la selección de la musica y que empieze a sonar. La musica se escoge dependiendo del nivel de juego
   * @return {[type]}
   */
  play_current(){
    this.audio = new Audio("./audio/"+LEVEL_SONGS[this.cur_song]);
    this.audio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
    this.audio.play();
  }

  /**
   * Funcion que hace que hace que suene la primera canción. Llama a la función play_current
   * @return {[type]}
   */
  play_first(){
    this.cur_song = 0;
    this.play_current();
  }

  /**
   * La función que se utiliza para pausar la música
   * @return {[type]}
   */
  pause(){
    if(this.audio)
      this.audio.pause();
  }

  /**
   * Función que se utiliza para pasar a la siguiente canción. Se utiliza cuando se pasa de nivel y reproduce la misma canción si esta se trata de la ultima. Llama a la función play_current
   * @return {[type]}
   */
  play_next(){
    this.audio.pause();
    this.cur_song += 1;
    if (this.cur_song >= LEVEL_SONGS.length){
      this.cur_song = 0;
    }
    this.play_current();
  }

  /**
   * La función set_current se utiliza para seleccionar una canción que se pasa como variable Audio. No hace que la canción se reproduzca.
   * @param {[Audio]} La canción que se desea seleccionar
   */
  set_current(s){
    this.cur_song = s;
    if (this.cur_song >= LEVEL_SONGS.length){
      this.cur_song = 0;
    }
  }

  /**
   * Selecciona y reproduce la canción de victoria, para cuando el jugador queda entre los primeros. Pausa la canción que se estuviese reproduciendo
   * @return {[type]}
   */
  play_succ_song(){
    if (this.audio)
      this.audio.pause();
    this.audio = new Audio("./audio/"+SUCC_SONG);
    this.audio.play();
  }

  /**
   * Selecciona y reproduce la canción de derrota, para cuando el jugador queda entre los últimos. Pausa la canción que se estuviese reproduciendo
   * @return {[type]}
   */
  play_over_song(){
    if (this.audio)
      this.audio.pause();
    this.audio = new Audio("./audio/"+OVER_SONG);
    this.audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
    }, false);
    this.audio.play();
  }

  /**
   * Selecciona y reproduce la canción del menu. Pausa la canción que se estuviese reproduciendo
   * @return {[type]}
   */
  play_menu_song(){
    if (this.audio)
      this.audio.pause();

    this.audio = new Audio("./audio/"+MENU_SONG);
    this.audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
    }, false);
    this.audio.play();
  }
}
