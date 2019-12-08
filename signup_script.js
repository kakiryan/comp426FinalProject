
async function handleSubmitButtonPress(e) {
    e.preventDefault();
    console.log('hey')
    console.log(e.target);
    //let name = e.target.name.value
    //let pass = e.target.pass.value
    let name = "Test1";
    let pass = "1234"
    // await createAccount({name,  pass});
    const response = await axios({
        method: 'POST',
        url: 'http://localhost:3000/account/create',
        data: {
            "name": name,
            "pass": pass,
            "data": {
            }
        }
    });
    console.log(response);
    window.location.href = "signin.html";
}

async function renderPage() {
    let page = $('body');
    console.log('here');
    $("#submitButton").click(handleSubmitButtonPress);
}


$(document).ready(renderPage());