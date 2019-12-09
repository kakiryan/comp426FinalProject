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

let myStorage = window.localStorage;
let jwt = myStorage.getItem('jwt');
let user = myStorage.getItem('user');

const userRoot = new axios.create({
  baseURL: 'http://localhost:3000/user'
})

const handleEditBio = function (event) {
  event.preventDefault()
  let html = `<textarea class="textarea" id="changes" placeholder="e.g. Hello! My name is Bob."></textarea>`;
  let html2 = `<input class="button is-dark is-small" id="editBioo" value = "Submit Changes" />`;
  $('.bio').append(html);
  $('.bio').append(html2);
  console.log("post");
  $('#editBioo').on('click', handleSubmit);
}

async function updatePic(pic) {

  let x = await userRoot.post(`/pics/`,
    { data : pic}, {
      headers: {Authorization: `Bearer ${jwt}` }
    })
}
async function getPic() {
  return await userRoot.get('/pics', {
    headers: {Authorization: `Bearer ${jwt}` }
  })
}

async function updateUser(bio) {

  let x = await userRoot.post(`/bios/`,
    { data: bio }, {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  console.log(jwt);
}

async function getBio() {
  return await userRoot.get('/bios', {
    headers: { Authorization: `Bearer ${jwt}` }
  })
}

const handleSubmit = function (event) {
  event.preventDefault();
  let t = $('#changes').val();
  $('.bio').text(t);
  let z =  updateUser(t);
}

const handleEditPic = function (event) {
  event.preventDefault();
  let html = `<input type=file name=filename id=file>
  <input class="button is-dark is-small" id="displayImage" value = "Display" />`;

  $('.pic').append(html);
  $('#displayImage').on('click', handleSubmitPic);

}


const handleSubmitPic = function (event) {

  console.log("here");
  var file = document.getElementById('file').files[0];
  var reader  = new FileReader();
  reader.onload = function(e)  {
      var image = document.createElement("img");
      image.src = e.target.result;
      $('.pic').text("");
      $('.pic').append(image);
      let z =  updatePic(image.src);

      // need to figure out how to get users from backend and use them for
      // autocomplete
      
  }
  reader.readAsDataURL(file);
  
}


$(function () {
  $('#editBio').on('click', handleEditBio);
  console.log("pre");
  $('#changes').on('click', handleSubmit);
  $('#editPic').on('click', handleEditPic);

});

async function renderPage() {
  $('#profileTitle').text(`${user}'s Profile`)
  $('#credentials').text(`Logged in as: ${user}`)
  let x = await getBio();
  let y = await getPic();
  let html = `<img src="${y.data.result}">`;
  console.log(user);
  $('.bio').text(x.data.result);
  $('.pic').text("");
  $('.pic').append(html);
  
}


$(document).ready(renderPage());
