//import {parse, stringify} from 'flatted/esm';

let myStorage = window.localStorage;
let jwt = myStorage.getItem('jwt');
let user = myStorage.getItem('user');

const userRoot = new axios.create({
  baseURL: 'http://localhost:3000/user'
})
const privateRoot = new axios.create({
  baseURL: `http://localhost:3000/private/${user}`
})

const handleEditBio = function (event) {
  event.preventDefault()
  let html = `<textarea class="textarea" id="changes" placeholder="e.g. Hello! My name is Bob."></textarea>`;
  let html2 = `<input class="button is-dark is-small" id="editBioo" value = "Submit Changes" />`;
  $('.bio').append(html);
  $('.bio').append(html2);
  //console.log("post");
  $('#editBioo').on('click', handleSubmit);
}

const handleEditMusic = function(event) {
  event.preventDefault();
  let html1 = `<input type=file name=filename id=file>
  <input class="button is-dark is-small" id="displayMusic" value = "Add" />`;

  $('.musicc').append(html1);
  //console.log("hii");
  $('#displayMusic').on('click', handleSubmitMusic);
}

const handleEditPic = function (event) {
  event.preventDefault();
  let html = `<input type=file name=filename id=file>
  <input class="button is-dark is-small" id="displayImage" value = "Display" />`;

  $('.pic').append(html);
  $('#displayImage').on('click', handleSubmitPic);

}


const handleSubmitMusic = function (event) {
  var file = document.getElementById('file').files[0];
  console.log(file);
  var reader  = new FileReader();
  reader.onload = function(e)  {
      //var audio = document.createElement("img");
      //audio.src = e.target.result;
      let html = `<div class="holder">
                    <button id="playButton1" type="button">Play</button>
                    <button id="pauseButton1" type="button" class = "pauseButton">Pause</button>
                  </div>`
      let sound1 = new Howl({
          src: [`${e.target.result}`]
      });

      //sound1.play();
      $('.musicc').text("");
      $('.musicc').append(html);
      console.log(sound1);
      //const str = stringify(sound1);
      //let z =  updateMusic(sound1);
  }
  let y = reader.readAsDataURL(file);
  //console.log(y);
}

let play = () => {
  sound1.play();
};

let pause = () => {
  sound1.pause();
};

const handleSubmitPic = function (event) {
  var file = document.getElementById('file').files[0];
  var reader  = new FileReader();
  reader.onload = function(e)  {
      var image = document.createElement("img");
      image.src = e.target.result;
      $('.pic').text("");
      $('.pic').append(image);
      let z =  updatePic(image.src);   
  }
  reader.readAsDataURL(file);
}

const handleSubmit = function (event) {
  event.preventDefault();
  let t = $('#changes').val();
  $('.bio').text(t);
  let z =  updateUser(t);
}

async function getPic() {
  return await privateRoot.get('/pics', {
    headers: {Authorization: `Bearer ${jwt}` }
  })
}

async function updatePic(pic) {
  let x = await privateRoot.post(`/pics/`,
    { data : pic}, {
      headers: {Authorization: `Bearer ${jwt}` }
    })
}

async function getMusic() {
  return await privateRoot.get('/music', {
    headers: {Authorization: `Bearer ${jwt}`}
  })
}
async function updateMusic(music) {
  let x = await privateRoot.post(`/music/`,
    { data : music}, {
      headers: {Authorization: `Bearer ${jwt}` }
    })
}

async function getBio() {
  return await privateRoot.get('/bios', {
    headers: { Authorization: `Bearer ${jwt}` }
  })
}

async function updateUser(bio) {

  let x = await privateRoot.post(`/bios/`,
    { data: bio }, {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  //console.log(jwt);
}
/*
async function updateUsers(user) {
  console.log(user);
  return await privateRoot.post(`/users/`+user,
    { data: user }, {
    headers: { Authorization: `Bearer ${jwt}` }
  })

  console.log(jwt);
}

*/

$(function () {
  $('#editBio').on('click', handleEditBio);
  console.log("pre");
  $('#changes').on('click', handleSubmit);
  $('#editPic').on('click', handleEditPic);
  $('#editMusic').on('click', handleEditMusic);

});

async function renderPage() {
  if (jwt==null){
    window.location.replace("http://localhost:3000/index.html");
    alert("Please Make a Profile First")
  }else{
  $('#profileTitle').text(`${user}'s Profile`)
  $('#credentials').text(`Logged in as: ${user}`)
  //let z = await updateUsers();
  let x = await getBio();
  let y = await getPic();
  //let t = await getMusic();
  //t.play();
  //console.log(t);

  let html = `<img src="${y.data.result}">`;
  //console.log(user);
  $('.bio').text(x.data.result);
  $('.pic').text("");
  $('.pic').append(html);
  let html2 = `<div class="holder">
                <button id="playButton1" type="button">Play</button>
                <button id="pauseButton1" type="button" class = "pauseButton">Pause</button>
              </div>`;
  $('.musicc').append(html2);
  //var file = t.files[0];
  //console.log(file);


  //var reader  = new FileReader();
  //reader.onload = function(e)  {
    //console.log(e.target.result);
      //var audio = document.createElement("img");
      //audio.src = e.target.result;
  //    let html = `<audio crossorigin>
  //                  <source src = "${e.target.result}" type = "audio/mpeg">
  //                </audio>`
  //    $('.musicc').append(html);
//}
  //$('.pic').append(html);
  //let z = await updateUsers(user);
  //console.log(z.data.result)

  let page = $('body');
  page.on('click', '#playButton1', play);
  page.on('click', '#pauseButton1', pause);




}
}


$(document).ready(renderPage());