
async function renderPage() {
    let page = $('body');
    console.log('here');
    $("#signUpForm").submit(function (e) {
        let error = false;
        event.preventDefault();
        console.log(e.target);
        let user = e.target.user.value;
        let pass = e.target.pass.value;
        let name = e.target.name.value;
        console.log(user);
        const response =  axios({
            method: 'POST',
            url: 'http://localhost:3000/account/create',
            data: {
                "name": user,
                "pass": pass,
                "data": { "firstname": name,
                }
            }
        }).catch(e=> {
            error = true;
            alert('Someone else already has that user name!');
        }).then (() => {
            if (!error) {
                window.location.href = "signin.html";
            }
        });
        
    });
}
$(document).ready(renderPage());