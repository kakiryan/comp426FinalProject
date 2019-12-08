import { setToken } from "./config/Token";

async function renderPage() {
    let page = $('body');
    console.log('here');
    $("#signUpForm").submit(function (e) {
        let error = false;
        event.preventDefault();
        console.log(e.target);
        let user = e.target.user.value
        let pass = e.target.pass.value
        const response =  axios({
            method: 'POST',
            url: 'http://localhost:3000/account/login',
            data: {
                "name": user,
                "pass": pass,
                "data": {
                }
            }
        }).catch(e=> {
            error = true;
            alert('Login failed');
        }).then (() => {
            const jwt = response.data.jwt;
            setToken(jwt);
            if (!error) {
                console.log('hi');
                window.location.href = "home.html";
            }
        });
        
    });
}
$(document).ready(renderPage());