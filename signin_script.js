
import {setToken} from "./config/Token.js"

let myStorage = window.localStorage;

async function renderPage() {
    let page = $('body');
    console.log('here');
    $("#signInForm").submit(function (e) {
        let error = false;
        e.preventDefault();
        console.log(e.target);
        let user = e.target.user.value
        let pass = e.target.pass.value
        myStorage.setItem('user', user);
        const response =  axios({
            method: 'POST',
            url: 'http://localhost:3000/account/login',
            data: {
                "name": user,
                "pass": pass,
            }
        }).catch(e=> {
            error = true;
            alert("Username or Password Incorrect");
            console.log('error')
        }).then ((response) => {
            myStorage.setItem('jwt', response.data.jwt);
            let jwt = myStorage.getItem('jwt');
            window.location.href = "myProfile.html";
        });
        
    });
}

$(document).ready(renderPage());

