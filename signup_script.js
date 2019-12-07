const handleSubmitButtonPress = async(event) => {
    var name = $(`.signupName`).val();
    var user = $(`.signupUsername`).val();
    var pass = $(`.signupPassword`).val(); //need to pass to check if valid. then sign in or not accordingly
    const response = await axios({
        method: 'POST',
        url: 'http://localhost:3000/account/create',
        data: {
            "name": user,
            "pass": pass,
            "data": {
                "firstname": name
            }
        }
    });
}



$(function() {
    $(`.submitButton`).on("click", handleSubmitButtonPress);
})