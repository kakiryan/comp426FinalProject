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
  console.log("post");
  $('#editBioo').on('click', handleSubmit);
}

async function updatePic(pic) {

  let x = await privateRoot.post(`/pics/`,
    { data : pic}, {
      headers: {Authorization: `Bearer ${jwt}` }
    })
}
async function getPic() {
  return await privateRoot.get('/pics', {
    headers: {Authorization: `Bearer ${jwt}` }
  })
}

async function updateUser(bio) {

  let x = await privateRoot.post(`/bios/`,
    { data: bio }, {
    headers: { Authorization: `Bearer ${jwt}` }
  })
  console.log(jwt);
}

async function updateUsers(user) {
  console.log(user);
  return await privateRoot.post(`/users/`+user,
    { data: user }, {
    headers: { Authorization: `Bearer ${jwt}` }
  })

  console.log(jwt);
}

async function getBio() {
  return await privateRoot.get('/bios', {
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
  if (jwt==null){
    window.location.replace("http://localhost:3000/index.html");
    alert("Please Make a Profile First")
  }else{
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
  //$('.pic').append(html);
  let z = await updateUsers(user);
  console.log(z.data.result)

}


$(document).ready(renderPage());