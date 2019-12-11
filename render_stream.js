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
let unlikeFns = []

const userRoot = new axios.create({
  baseURL: 'http://localhost:3000/user'
})

let sound1 = new Howl({
  src: ['sounds/bensound-summer.mp3']
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
  let html = `<button id="unlikeButton1" type="button" class = "unlikeButton button is-light">Unlike</button>`;
  $(`#likeButton1`).replaceWith(html);
  page.on('click', '#unlikeButton1', unlike1);
}

async function unlike1() {
  console.log('here');
  let x = await userRoot.delete(`/liked/` +1,
    {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="likeButton1" type="button" class = "likeButton button is-light">Like</button>`;
  $(`#unlikeButton1`).replaceWith(html);
  //page.on('click', '#likeButton1', like1);
}

let sound2 = new Howl({
  src: ['sounds/Good Vibrations.mp3']
});

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
  let html = `<button id="unlikeButton2" type="button" class = "unlikeButton button is-light">Unlike</button>`;
  $(`#likeButton2`).replaceWith(html);
  page.on('click', '#unlikeButton2', unlike2);
}

async function unlike2() {
  let x = await userRoot.delete(`/liked/` +2,
    {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="likeButton2" type="button" class = "likeButton button is-light">Like</button>`;
  $(`#unlikeButton2`).replaceWith(html);
  //page.on('click', '#likeButton2', like2);
}

let sound3 = new Howl({
  src: ['sounds/Crazy Frog - Axel F (Official Video).mp3']
});

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
  let html = `<button id="unlikeButton3" type="button" class = "unlikeButton button is-light">Unlike</button>`;
  $(`#likeButton3`).replaceWith(html);
  page.on('click', '#unlikeButton3', unlike3);

}

async function unlike3() {
  let x = await userRoot.delete(`/liked/`+3,
    {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="likeButton3" type="button" class = "likeButton button is-light">Like</button>`;
  $(`#unlikeButton3`).replaceWith(html);
  //page.on('click', '#likeButton3', like3);
}

let sound4 = new Howl({
  src: ['sounds/nyan-cat-original.mp3']
});

let play4 = () => {
  sound4.play();
}

let pause4 = () => {
  sound4.pause();
}

async function like4() {
  let x = await userRoot.post(`/liked/`+4,
    { data: 'nyanCat' }, {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="unlikeButton4" type="button" class = "unlikeButton button is-light">Unlike</button>`;
  $(`#likeButton4`).replaceWith(html);
  page.on('click', '#unlikeButton4', unlike4);

}

async function unlike4() {
  let x = await userRoot.delete(`/liked/`+4,
    {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="likeButton4" type="button" class = "likeButton button is-light">Like</button>`;
  $(`#unlikeButton4`).replaceWith(html);
  //page.on('click', '#likeButton3', like3);
}

let sound5 = new Howl({
  src: ['sounds/i-like-to-move-it-original-video-madagascar-hd.mp3']
});

let play5 = () => {
  sound5.play();
}

let pause5 = () => {
  sound5.pause();
}

async function like5() {
  let x = await userRoot.post(`/liked/`+5,
    { data: 'iLikeToMoveIt' }, {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="unlikeButton5" type="button" class = "unlikeButton button is-light">Unlike</button>`;
  $(`#likeButton5`).replaceWith(html);
  page.on('click', '#unlikeButton5', unlike5);

}

async function unlike5() {
  let x = await userRoot.delete(`/liked/`+5,
    {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="likeButton5" type="button" class = "likeButton button is-light">Like</button>`;
  $(`#unlikeButton5`).replaceWith(html);
  //page.on('click', '#likeButton3', like3);
}

let sound6 = new Howl({
  src: ['sounds/y2mate.com - electric_zoo_Ci04mGSKbe0.mp3']
});

let play6 = () => {
  sound6.play();
}

let pause6 = () => {
  sound6.pause();
}

async function like6() {
  let x = await userRoot.post(`/liked/`+6,
    { data: 'electricZoo' }, {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="unlikeButton6" type="button" class = "unlikeButton button is-light">Unlike</button>`;
  $(`#likeButton6`).replaceWith(html);
  page.on('click', '#unlikeButton6', unlike6);

}

async function unlike6() {
  let x = await userRoot.delete(`/liked/`+6,
    {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="likeButton6" type="button" class = "likeButton button is-light">Like</button>`;
  $(`#unlikeButton6`).replaceWith(html);
  //page.on('click', '#likeButton3', like3);
}

let sound7 = new Howl({
  src: ['sounds/theGummyBearSong.mp3']
});

let play7 = () => {
  sound7.play();
}

let pause7 = () => {
  sound7.pause();
}

async function like7() {
  let x = await userRoot.post(`/liked/`+7,
    { data: 'gummyBear' }, {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="unlikeButton7" type="button" class = "unlikeButton button is-light">Unlike</button>`;
  $(`#likeButton7`).replaceWith(html);
  page.on('click', '#unlikeButton7', unlike7);

}

async function unlike7() {
  let x = await userRoot.delete(`/liked/`+7,
    {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="likeButton7" type="button" class = "likeButton button is-light">Like</button>`;
  $(`#unlikeButton7`).replaceWith(html);
  //page.on('click', '#likeButton3', like3);
}

let sound8 = new Howl({
  src: ['sounds/Britney Spears - Radar.mp3']
});

let play8 = () => {
  sound8.play();
}

let pause8 = () => {
  sound8.pause();
}

async function like8() {
  let x = await userRoot.post(`/liked/`+8,
    { data: 'radar' }, {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="unlikeButton8" type="button" class = "unlikeButton button is-light">Unlike</button>`;
  $(`#likeButton8`).replaceWith(html);
  page.on('click', '#unlikeButton8', unlike8);

}

async function unlike8() {
  let x = await userRoot.delete(`/liked/`+8,
    {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="likeButton8" type="button" class = "likeButton button is-light">Like</button>`;
  $(`#unlikeButton8`).replaceWith(html);
  //page.on('click', '#likeButton3', like3);
}

let sound9 = new Howl({
  src: ['sounds/jellyfishJam.mp3']
});

let play9 = () => {
  sound9.play();
}

let pause9 = () => {
  sound9.pause();
}

async function like9() {
  let x = await userRoot.post(`/liked/`+9,
    { data: 'radar' }, {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="unlikeButton9" type="button" class = "unlikeButton button is-light">Unlike</button>`;
  $(`#likeButton9`).replaceWith(html);
  page.on('click', '#unlikeButton9', unlike8);

}

async function unlike9() {
  let x = await userRoot.delete(`/liked/`+9,
    {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="likeButton9" type="button" class = "likeButton button is-light">Like</button>`;
  $(`#unlikeButton9`).replaceWith(html);
  //page.on('click', '#likeButton3', like3);
}

let sound10 = new Howl({
  src: ['sounds/jellyfishJam.mp3']
});

let play9 = () => {
  sound9.play();
}

let pause9 = () => {
  sound9.pause();
}

async function like9() {
  let x = await userRoot.post(`/liked/`+9,
    { data: 'radar' }, {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="unlikeButton9" type="button" class = "unlikeButton button is-light">Unlike</button>`;
  $(`#likeButton9`).replaceWith(html);
  page.on('click', '#unlikeButton9', unlike8);

}

async function unlike9() {
  let x = await userRoot.delete(`/liked/`+9,
    {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  let html = `<button id="likeButton9" type="button" class = "likeButton button is-light">Like</button>`;
  $(`#unlikeButton9`).replaceWith(html);
  //page.on('click', '#likeButton3', like3);
}

async function renderPage() {
  unlikeFns[1] = unlike1;
  unlikeFns[2] = unlike2;
  unlikeFns[3] = unlike3;
  unlikeFns[4] = unlike4;
  unlikeFns[5] = unlike5;
  unlikeFns[6] = unlike6;
  unlikeFns[7] = unlike7;
  unlikeFns[8] = unlike8;
  unlikeFns[9] = unlike9;
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
  page.on('click', '#playButton4', play4);
  page.on('click', '#pauseButton4', pause4);
  page.on('click', '#likeButton4', like4);
  page.on('click', '#playButton5', play5);
  page.on('click', '#pauseButton5', pause5);
  page.on('click', '#likeButton5', like5);
  page.on('click', '#playButton6', play6);
  page.on('click', '#pauseButton6', pause6);
  page.on('click', '#likeButton6', like6);
  page.on('click', '#playButton7', play7);
  page.on('click', '#pauseButton7', pause7);
  page.on('click', '#likeButton7', like7);
  page.on('click', '#playButton8', play8);
  page.on('click', '#pauseButton8', pause8);
  page.on('click', '#likeButton8', like8);
  page.on('click', '#playButton9', play9);
  page.on('click', '#pauseButton9', pause9);
  page.on('click', '#likeButton9', like9);

  let x = await userRoot.get(`/liked`,
    {
    headers: { Authorization: `Bearer ${jwt}` }
  });
  //console.log(Object.values(x.data.result)[0])
  //console.log(Object.keys(x.data.result).length);
  let likedArray = Object.values(x.data.result);
  //console.log(likedArray);
  for(let i = 0; i < Object.keys(x.data.result).length; i++)
  {
    let y = likedArray[i];
    //console.log(y);
    let html = `<button id="unlikeButton${i+1}" type="button" class = "unlikeButton button is-light">Unlike</button>`;
    $(`#likeButton${i+1}`).replaceWith(html);
    let buttonName = "#unlikeButton" +(i +1);
    let x = document.getElementById(buttonName);
    //console.log(x);
    //console.log(buttonName);
    //console.log(unlikeFns[i+1]);
    page.on('click', buttonName, unlikeFns[i+1]);
  }
  
}


$(document).ready(renderPage());