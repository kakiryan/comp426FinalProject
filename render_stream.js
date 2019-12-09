//import streamer from "./stream.js";

//let thestream = new streamer();

const renderStreamContainer = function() {
    return `<div class = "song">Summer</div>
    <div class = "artist">BenSound</div>
    <div class="holder">
        <div class="audio green-audio-player" id = "song1">
            <div class="loading">
                <div class="spinner"></div>
            </div>
            <div class="play-pause-btn">  
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
                  <path fill="#566574" fill-rule="evenodd" d="M18 12L0 24V0" class="play-pause-icon" id="playPause"/>
                </svg>
            </div>
            <div class="controls">
                <span class="current-time">0:00</span>
                <div class="slider" data-direction="horizontal">
                  <div class="progress">
                    <div class="pin" id="progress-pin" data-method="rewind"></div>
                  </div>
                </div>
                <span class="total-time">0:00</span>
              </div>
          
              <div class="volume">
                <div class="volume-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#566574" fill-rule="evenodd" d="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z" id="speaker"/>
                  </svg>
                </div>
                <div class="volume-controls hidden">
                  <div class="slider" data-direction="vertical">
                    <div class="progress">
                      <div class="pin" id="volume-pin" data-method="changeVolume"></div>
                    </div>
                  </div>
                </div>
              </div>
          
              <audio crossorigin>
                <source src = "sounds/bensound-summer.mp3" type = "audio/mpeg">
              </audio>
            </div>
          </div>`;
}

const getSongs= async() => {
  let res = [];
    const songs = await axios({
        method: 'get',
        url: 'http://localhost:3000/account/login',
        withCredentials: true,
        });
    return songs["data"]
}
