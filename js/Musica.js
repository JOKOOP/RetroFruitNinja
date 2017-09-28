SONGS = ["clint.mp3", "morty.mp3", "gas.mp3"];

class Musica {

  constructor (){
    this.cur_song = 0;
  }

  play_current(){
    this.audio = new Audio("./audio/"+SONGS[this.cur_song]);
    this.audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
    }, false);
    this.audio.play();
  }

  pause_song(){
    this.audio.pause();
  }

  next_song(){
    this.audio.pause();
    this.cur_song += 1;
    if (this.cur_song >= SONGS.length){
      this.cur_song = 0;
    }
    this.play_current();
  }

  play_song(s){
    this.audio.pause();
    this.cur_song = s;
    if (this.cur_song >= SONGS.length){
      this.cur_song = 0;
    }
    this.play_current();
  }
}
