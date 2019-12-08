
async function renderPage() {
    let page = $('body');
    console.log('here');
    $("#signUpForm").submit(function (e) {
        event.preventDefault();
        console.log(e.target);
        let user = e.target.user.value
        let pass = e.target.pass.value
        let name = e.target.name.value;
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