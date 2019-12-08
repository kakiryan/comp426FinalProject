
async function handleSubmitButtonPress(e) {
    e.preventDefault();
    console.log('hey')
    console.log(e.target);
    let name = e.target.name.value
    let pass = e.target.pass.value
    // let name = "Test2";
    // let pass = "1234"
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
    // $("#submitButton").click(handleSubmitButtonPress);
    $("#signUpForm").submit(function (e) {
        event.preventDefault();
        console.log(e.target);
        let user = e.target.user.value
        let pass = e.target.pass.value
        let name = e.target.name.value;
        // let name = "Test2";
        // let pass = "1234"
        // await createAccount({name,  pass});
        const response =  axios({
            method: 'POST',
            url: 'http://localhost:3000/account/create',
            data: {
                "name": user,
                "pass": pass,
                "data": { "firstname": name,
                }
            }
        });
        console.log(response);
        window.location.href = "signin.html";
    });
}
$(document).ready(renderPage());