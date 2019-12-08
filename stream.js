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

let seek = function() {

    var seek = sound.seek() || 0;
    timer.innerHTML = self.formatTime(Math.round(seek));
    progress.style.width = (((seek / sound.duration()) * 100) || 0) + '%';

    // If the sound is still playing, continue stepping.
    if (sound.playing()) {
      requestAnimationFrame(self.step.bind(self));
    }
  }

let playButton = document.getElementById('playButton');

async function renderPage() {
    let page = $('body');
    page.on('click', '#playButton', play);
    page.on('click', '#pauseButton', pause);
}


$(document).ready(renderPage());