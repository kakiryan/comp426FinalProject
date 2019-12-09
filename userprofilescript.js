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
  <button type=button onclick='test()'>Display</button>`;
  /*
  `<div class="file is-warning" id="picture">
    <label class="file-label">
      <input class="file-input" type="file" name="resume">
      <span class="file-cta">
        <span class="file-icon">
          <i class="fas fa-upload"></i>
        </span>
        <span class="file-label">
          Choose a file…
        </span>
      </span>
      <span class="file-name">
      No File Uploaded
    </span>
    </label>
  </div>`
  */

  //let html2 = `<input class="button is-dark is-small" id="editBioo2" value = "Submit Picture" />`;

  $('.pic').append(html);
  //$('.pic').append(html2);
  /*
  const fileInput = document.querySelector('#picture input[type=file]');
  fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
      const fileName = document.querySelector('#picture .file-name');
      fileName.textContent = fileInput.files[0].name;
    }
  }
  */
  //$('#editBioo2').on('click', handleSubmitPic);

}

const handleSubmitPic = function (event) {
  let t = $('#changes').val();
  $('.bio').text(t);

  //let image = fileName.textContent;

  $('.pic').text(image);
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
  console.log(user);
  $('.bio').text(x.data.result);
}


$(document).ready(renderPage());