import setScreen from '../index.js'
import screen from "./register.js"
// import content from "./logout.js"
import { login } from "../controllers/auth.js"
const backLogin = `<div class="container">
<div class="row">
<div class="col-lg-4"></div>
        <div class="col-lg-3">
            <form class="form-group" id="js-formLogin">
                <label for="email">Email</label>
                <input type="email" class="form-control" name="" id="email" aria-describedby="emailHelpId" placeholder="" required>
                <div class="form-group">
                    <label for="" >Password</label>
                    <input type="password" class="form-control" name="" id="password" aria-describedby="helpId" placeholder="" required>
                </div>
                <button type="submit" class="btn btn-success">Login</button>
                <button type="button" id="js-res" class="btn btn-secondary">Register</button>
                </form>
        </div>
    </div>
    </div>`

function onload() {
    document.getElementById('js-res').addEventListener('click', function() {
        setScreen(screen)

    })
    const formLogin = document.getElementById("js-formLogin");


    formLogin.addEventListener("submit", async function(event) {
        event.preventDefault();
        var email = formLogin.email.value;
        const password = formLogin.password.value;
        const user = { email: email, password: password };
        try {
            const success = await login(user);
            if (success) {
                window.location = "page.html"
                    // setScreen(content)
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