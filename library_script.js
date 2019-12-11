let myStorage = window.localStorage;
let jwt = myStorage.getItem('jwt');
let user = myStorage.getItem('user');
let playFns = [];
let pauseFns =[];

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

let play1 = (sound) => {
    sound1.play();
  };
  
  let pause1 = (sound) => {
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

async function renderPage() {
    playFns[1] = play1;
    pauseFns[1] = pause1;
    playFns[2] = play2;
    pauseFns[2] = pause2;
    playFns[3] = play3;
    pauseFns[3] = pause3;
    // playFns[2] = play2;
    console.log(jwt);
    if (jwt == null) {
        window.location.replace("http://localhost:3000/index.html");
        alert("Please Make a Profile First to View Your Library!")
    } else {
        $('#libraryTitle').text(`${user}'s Personalized Library!`)
        $('#credentials').text(`Logged in as: ${user}`)

    }

    let x = await userRoot.get(`/liked`,
        {
            headers: { Authorization: `Bearer ${jwt}` }
        });
    console.log(Object.values(x.data.result)[0])
    console.log(Object.keys(x.data.result).length);
    let likedArray = Object.values(x.data.result);
    console.log(likedArray);
    if (likedArray.length == []) {
        let y = document.getElementById("libraryHeader");
        console.log(y)
        y.textContent = "You haven't like any songs yet!"
    } 

    for (let i = 0; i < likedArray.length; i++) {
        let songDiv = document.createElement('div');
        let title = document.createElement('h2');
        let playBtn = document.createElement('btn')
        playBtn.id = "playButton"+(i+1);
        playBtn.className = "button is-warning";
        playBtn.type = "button";
        playBtn.textContent = "Play"
        title.textContent=likedArray[i];
        title.className = "title"
        let pauseBtn = document.createElement('btn');
        pauseBtn.id = "pauseButton"+(i+1);
        pauseBtn.className = "button is-warning";
        pauseBtn.type = "button";
        pauseBtn.textContent = "Pause"
        let space = document.createElement('span');
        let br = document.createElement('hr');
        space.textContent = "  "
        songDiv.append(title);
        songDiv.append(playBtn);
        songDiv.append(space);
        songDiv.append(pauseBtn);
        songDiv.append(br);
        console.log(songDiv);
        let x;
        if (title.textContent == "summer") {
            x = 1;
        } else if (title.textContent == "goodVibrations") {
            x =2;
        } else if (title.textContent = "crazyFrog") {
            x = 3;
        }
        $('body').on('click', '#'+playBtn.id, playFns[x])
        $('body').on('click', '#'+pauseBtn.id, pauseFns[x])
        $("#songContainer").append(songDiv);
    }
}


$(document).ready(renderPage());