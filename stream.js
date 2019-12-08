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

async function renderPage() {
    let page = $('body');
    page.on('click', '#playButton', play);
    page.on('click', '#pauseButton', pause);
}


$(document).ready(renderPage());