import stream_player from "./stream_player.js";

$(function() {
    var audioPlayer = document.querySelector('#song1');
    let strm1 = new stream_player(audioPlayer);
    strm1.doShit();
    let audioPlayer2 = document.querySelector('#song2');
    let strm2 = new stream_player(audioPlayer2);
    strm2.doShit();
});

/*
var audioPlayer = document.querySelector('#song1');
let strm1 = new stream_player(audioPlayer);
strm1.doShit();

let sound = new Howl({
    src: ['sounds/bensound-summer.mp3'],
    loop: false
});


let play = () => {
    sound.play();
};

let pause = () => {
    sound.pause();
};


let playButton = document.getElementById('playButton');
*/
/*
async function renderPage() {
    let page = $('body');
    page.on('click', '#playButton', play);
    page.on('click', '#pauseButton', pause);
}


$(document).ready(renderPage()); */