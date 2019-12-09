//import streamer from "./stream.js";

//let thestream = new streamer();

const renderSong = function(song) {
    let ret = `<div class = "song">SongName</div>
    <div class = "artist">ArtistName</div>
    <div class="holder">
      <btn id="${song.id}playButton" type="button" class = "playButton">Play</btn>
      <btn id="${song.id}pauseButton" type="button" class = "pauseButton">Pause</btn>
    </div>`;
    return ret;
}
/*
const getSongs= async() => {
  let res = [];
    const songs = await axios({
        method: 'get',
        url: 'http://localhost:3000/account/login',
        withCredentials: true,
        });
    return songs["data"]
} */

$(function() {
  songs = getSongs();
  songs.then(function(result){
      result.forEach(element => {
          let s = renderSong(element);
          $(`.hero-body`).append(s);
      });
      $('.playButton').on("click", handlePlayButtonPress);
      $('.pauseButton').on("click", handlePauseButtonPress); 
  });
});

