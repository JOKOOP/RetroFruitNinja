LEVEL_SONGS = ["radioactive.mp3", "gas.mp3", "90s.mp3"];
SUCC_SONG = "ff.mp3";
OVER_SONG = "morty.mp3";
MENU_SONG = "ozzy.mp3"

class Musica {

  constructor (){
    this.cur_song = 0;
  }

  play_current(){
    this.audio = new Audio("./audio/"+LEVEL_SONGS[this.cur_song]);
    this.audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
    }, false);
    this.audio.play();
  }

  play_first(){
    this.cur_song = 0;
    this.play_current();
  }

  pause(){
    this.audio.pause();
  }

  play_next(){
    this.audio.pause();
    this.cur_song += 1;
    if (this.cur_song >= LEVEL_SONGS.length){
      this.cur_song = 0;
    }
    this.play_current();
  }

  set_current(s){
    this.cur_song = s;
    if (this.cur_song >= LEVEL_SONGS.length){
      this.cur_song = 0;
    }
  }

  play_succ_song(){
    if (this.audio)
      this.audio.pause();
    this.audio = new Audio("./audio/"+SUCC_SONG);
    this.audio.play();
  }

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
