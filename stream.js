import stream_player from "./stream_player.js";

/*$(function() {
    var audioPlayer = document.querySelector('#song1');
    let strm1 = new stream_player(audioPlayer);
    strm1.doShit();
    let audioPlayer2 = document.querySelector('#song2');
    let strm2 = new stream_player(audioPlayer2);
    strm2.doShit();
}); */

export default class streamer {
    constructor() {
        let audioPlayer = document.querySelector('#song1');
        let strm1 = new stream_player(audioPlayer);
        //strm1.doShit();
        let audioPlayer2 = document.querySelector('#song2');
        let strm2 = new stream_player(audioPlayer2);
        //strm2.doShit();
    }
}
