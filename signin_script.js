const handleSubmitButtonPress = async(event) => {
    var user = $(`.usernameForm`).val();
    var pass = $(`.passwordForm`).val(); //need to pass to check if valid. then sign in or not accordingly
}



$(function() {
    $(`.submitButton`).on("click", handleSubmitButtonPress);
})