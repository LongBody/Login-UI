import setScreen from '../index.js'
import screen from "./register.js"
import { login } from "../controllers/auth.js"
import logScreen from "./logout.js"
const backLogin = `<div class="container">
<div class="row">
<div class="col-lg-4"></div>
        <div class="col-lg-3 card shadow" style="padding: 20px 25px; border: 1px solid black ;border-radius: 10px;">
            <form class="form-group" id="js-formLogin">
                <label for="email">Email :</label>
                <input type="email" class="form-control" name="" id="email"  aria-describedby="emailHelpId" placeholder="" required>
                <div class="form-group">
                    <label for="" >Password :</label>
                    <input type="password" class="form-control" name="" id="password" aria-describedby="helpId" placeholder="" required>
                    <p style="display:nones;color:red" id="err"></p>
                    </div>
                <button type="submit" class="btn btn-success">Login</button>
                <button type="button" id="js-res" class="btn btn-secondary">Register</button>
                </form>
        </div>
    </div>
    </div>`


function onload() {
    document.getElementById('js-res').addEventListener('click', function() { /// Back To Register
        setScreen(screen)

    })
    const formLogin = document.getElementById("js-formLogin");
    var ten = document.getElementById('ten')

    formLogin.addEventListener("submit", async function(event) { //// Login when true account
        event.preventDefault();
        var email = formLogin.email.value;
        const password = formLogin.password.value;
        const user = { email: email, password: password };
        ten.innerHTML = email

        try {
            const success = await login(user);
            if (success) {
                // window.location = "page.html"
                await setScreen(logScreen)
                ten.style.display = "block"
            }
        } catch (err) {
            alert(err.message);
        }


    });




}



export default {
    content: backLogin,
    onload: onload,
}