let myStorage = window.localStorage;
let jwt = myStorage.getItem('jwt');
let user = myStorage.getItem('user');
let playFns = [];
let pauseFns = [];

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

let sound13 = new Howl({
    src: ['sounds/ripped-pants.mp3']
  });
  
  let play13 = () => {
    sound13.play();
  }
  
  let pause13 = () => {
    sound13.pause();
  }

  let sound14 = new Howl({
    src: ['sounds/frostyTheSnowman.mp3']
  });
  
  let play14 = () => {
    sound14.play();
  }
  
  let pause14 = () => {
    sound14.pause();
  }

  let sound15 = new Howl({
    src: ['sounds/SFIRE - SFIRE6.mp3']
  });
  
  let play15 = () => {
    sound15.play();
  }
  
  let pause15 = () => {
    sound15.pause();
  }

  let sound16 = new Howl({
    src: ['sounds/SHYGIRL — BB.mp3']
  });
  
  let play16 = () => {
    sound16.play();
  }
  
  let pause16 = () => {
    sound16.pause();
  }


let sound12 = new Howl({
    src: ['sounds/Floating Points - LesAlpx.mp3']
  });
  
  let play12 = () => {
    sound12.play();
  }
  
  let pause12 = () => {
    sound12.pause();
  }


let sound11 = new Howl({
    src: ['sounds/01 stressrunstheworld.mp3']
  });
  
  let play11 = () => {
    sound11.play();
  }
  
  let pause11 = () => {
    sound11.pause();
  }

let sound10 = new Howl({
    src: ['sounds/zoey101.mp3']
  });
  
  let play10 = () => {
    sound10.play();
  }
  
  let pause10 = () => {
    sound10.pause();
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

let sound8 = new Howl({
    src: ['sounds/Britney Spears - Radar.mp3']
  });
  
  let play8 = () => {
    sound8.play();
  }
  
  let pause8 = () => {
    sound8.pause();
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

let sound6 = new Howl({
    src: ['sounds/y2mate.com - electric_zoo_Ci04mGSKbe0.mp3']
  });
  
  let play6 = () => {
    sound6.play();
  }
  
  let pause6 = () => {
    sound6.pause();
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

let sound4 = new Howl({
    src: ['sounds/nyan-cat-original.mp3']
  });
  
  let play4 = () => {
    sound4.play();
  }
  
  let pause4 = () => {
    sound4.pause();
  }

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
    playFns[4] = play4;
    pauseFns[4] = pause4;
    playFns[5] = play5;
    pauseFns[5] = pause5;
    playFns[6] = play6;
    pauseFns[6] = pause6;
    playFns[7] = play7;
    pauseFns[7] = pause7;
    playFns[8] = play8;
    pauseFns[8] = pause8;
    playFns[9] = play9;
    pauseFns[9] = pause9;
    playFns[10] = play10;
    pauseFns[10] = pause10;
    playFns[11] = play11;
    pauseFns[11] = pause11;
    playFns[12] = play12;
    pauseFns[12] = pause12;
    playFns[13] = play13;
    pauseFns[13] = pause13;
    playFns[14] = play14;
    pauseFns[14] = pause14;
    playFns[15] = play15;
    pauseFns[15] = pause15;
    playFns[16] = play16;
    pauseFns[16] = pause16;
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

    for (let i = 0; i < 50; i++) {
        let index = Object.keys(x.data.result)[i];
        if (index !== undefined) {


            let songDiv = document.createElement('div');
            let title = document.createElement('h2');
            let playBtn = document.createElement('btn')
            playBtn.id = "playButton" + (index);
            playBtn.className = "button is-warning";
            playBtn.type = "button";
            playBtn.textContent = "Play"
            console.log(likedArray[i])
            console.log(index)
            title.textContent = likedArray[i];
            title.className = "title"
            let pauseBtn = document.createElement('btn');
            pauseBtn.id = "pauseButton" + (index);
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
            if (title.textContent == "Summer") {
                x = 1;
            } else if (title.textContent == "Good Vibrations") {
                x = 2;
            } else if (title.textContent == "Crazy Frog") {
                x = 3;
            } else if (title.textContent == "Nyan Cat") {
                x = 4;
            } else if (title.textContent =="I Like To Move It") {
                x = 5;
            } else if (title.textContent == "Electric Zoo") {
                x=6;
            } else if (title.textContent == "The Gummy Bear Song") {
                x=7;
            } else if (title.textContent == "Radar") {
                x=8;
            } else if (title.textContent == "Jellyfish Jam") {
                x=9;
            } else if (title.textContent == "Zoey 101 Theme Song") {
                x=10;
            } else if (title.textContent == "Stressrunstheworld") {
                x=11;
            } else if (title.textContent == "Floating Points") {
                x =12;
            } else if (title.textContent == "When I Ripped My Pants") {
                x = 13;
            } else if (title.textContent == "Frosty the Snowman") {
                x = 14;
            } else if (title.textContent == "Sfire 6") {
                x=15;
            } else if (title.textContent == "Shygirl") {
                x=16;
            }
            $('body').on('click', '#' + playBtn.id, playFns[x])
            $('body').on('click', '#' + pauseBtn.id, pauseFns[x])
            $("#songContainer").append(songDiv);
        }
    }
}


$(document).ready(renderPage());