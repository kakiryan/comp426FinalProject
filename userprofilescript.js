const handleEditBio = function(event) {
    let html = `<textarea class="textarea" id="changes" placeholder="e.g. Hello! My name is Bob."></textarea>`;
    let html2 = `<input class="button is-dark is-small" id="editBioo" value = "Submit Changes" />`;
$('.bio').append(html);
$('.bio').append(html2);
console.log("post");
$('#editBioo').on('click', handleSubmit);
}

const handleSubmit = function(event) {
    console.log("hereee");
    let t = $('#changes').val();
    $('.bio').text(t);
}

const handleEditPic = function(event) {
    let html = `<div class="file is-warning" id="picture">
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

  let html2 = `<input class="button is-dark is-small" id="editBioo2" value = "Submit Picture" />`;

  $('.pic').append(html);
  $('.pic').append(html2);
  const fileInput = document.querySelector('#picture input[type=file]');
  fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
      const fileName = document.querySelector('#picture .file-name');
      fileName.textContent = fileInput.files[0].name;
    }
  }

    $('#editBioo2').on('click', handleSubmitPic);

}

const handleSubmitPic = function(event) {
    let t = $('#changes').val();
    $('.bio').text(t);

    let image = fileName.textContent;
  
      $('.pic').text(image); 
}


$(function() {
    $('#editBio').on('click', handleEditBio);
    console.log("pre");
    $('#changes').on('click', handleSubmit);
    $('#editPic').on('click', handleEditPic);

});