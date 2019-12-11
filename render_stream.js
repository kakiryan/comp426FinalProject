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
let myStorage = window.localStorage;
let jwt = myStorage.getItem('jwt');
let user = myStorage.getItem('user');
let page = $('body');

const userRoot = new axios.create({
  baseURL: 'http://localhost:3000/user'
})

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

async function like1() {
  let x = await userRoot.post(`/liked/`+1,
    { data: 'summer' }, {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="unlikeButton1" type="button" class = "unlikeButton">Unlike</button>`;
  $(`#likeButton1`).replaceWith(html);
  page.on('click', '#unlikeButton1', unlike1);
}

async function unlike1() {
  let x = await userRoot.delete(`/liked/` +1,
    {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="likeButton1" type="button" class = "likeButton">Like</button>`;
  $(`#unlikeButton1`).replaceWith(html);
  //page.on('click', '#likeButton1', like1);
}

let play2 = () => {
  sound2.play();
};

let pause2 = () => {
  sound2.pause();
};

async function like2() {
  let x = await userRoot.post(`/liked/`+2,
    { data: 'goodVibrations' }, {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="unlikeButton2" type="button" class = "unlikeButton">Unlike</button>`;
  $(`#likeButton2`).replaceWith(html);
  page.on('click', '#unlikeButton2', unlike2);
}

async function unlike2() {
  let x = await userRoot.delete(`/liked/` +2,
    {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="likeButton2" type="button" class = "likeButton">Like</button>`;
  $(`#unlikeButton2`).replaceWith(html);
  //page.on('click', '#likeButton2', like2);
}

let play3 = () => {
  sound3.play();
}

let pause3 = () => {
  sound3.pause();
}

async function like3() {
  let x = await userRoot.post(`/liked/`+3,
    { data: 'crazyFrog' }, {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="unlikeButton3" type="button" class = "unlikeButton">Unlike</button>`;
  $(`#likeButton3`).replaceWith(html);
  page.on('click', '#unlikeButton3', unlike3);
}

async function unlike3() {
  let x = await userRoot.delete(`/liked/`+3,
    {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="likeButton3" type="button" class = "likeButton">Like</button>`;
  $(`#unlikeButton3`).replaceWith(html);
  //page.on('click', '#likeButton3', like3);
}

//let playButton1 = document.getElementById('playButton1');
//let playButton2 = document.getElementById('playButton2');
//let playButton3 = document.getElementById('playButton3');

async function renderPage() {
  let page = $('body');
  page.on('click', '#playButton1', play1);
  page.on('click', '#pauseButton1', pause1);
  page.on('click', '#likeButton1', like1);
  page.on('click', '#playButton2', play2);
  page.on('click', '#pauseButton2', pause2);
  page.on('click', '#likeButton2', like2);
  page.on('click', '#playButton3', play3);
  page.on('click', '#pauseButton3', pause3);
  page.on('click', '#likeButton3', like3);
}


$(document).ready(renderPage());