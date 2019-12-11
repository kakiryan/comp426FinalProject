//import streamer from "./stream.js";

//let thestream = new streamer();
/*
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
/*
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

*/

let sound1 = new Howl({
  src: ['sounds/bensound-summer.mp3']
});

let sound2 = new Howl({
  src: ['sounds/Good Vibrations.mp3']
});

let sound3 = new Howl({
  src: ['sounds/Crazy Frog - Axel F (Official Video).mp3']
});

let play1 = () => {
  sound1.play();
};

let pause1 = () => {
  sound1.pause();
};

let play2 = () => {
  sound2.play();
};

let pause2 = () => {
  sound2.pause();
};

let play3 = () => {
  sound3.play();
}

let pause3 = () => {
  sound3.pause();
}

let playButton1 = document.getElementById('playButton1');
let playButton2 = document.getElementById('playButton2');
let playButton3 = document.getElementById('playButton3');

async function renderPage() {
  let page = $('body');
  page.on('click', '#playButton1', play1);
  page.on('click', '#pauseButton1', pause1);
  page.on('click', '#playButton2', play2);
  page.on('click', '#pauseButton2', pause2);
  page.on('click', '#playButton3', play3);
  page.on('click', '#pauseButton3', pause3);
}


$(document).ready(renderPage());