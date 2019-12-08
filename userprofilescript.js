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




$(function() {
    $('#editBio').on('click', handleEditBio);
    console.log("pre");
    $('#changes').on('click', handleSubmit);

});