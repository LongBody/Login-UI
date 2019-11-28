import backLogin from './login.js'
import setScreen from '../index.js'
import { register } from '../controllers/auth.js'

const screen = `<div class="container">
<div class="row">
<div class="col-lg-4"></div>
    <div class="col-lg-3">
        <form class="form-group" id="js-formres">
            <label for="email">Email</label>
            <input type="email" class="form-control" name="" id="email" aria-describedby="emailHelpId" placeholder="" required>
            <div class="form-group">
                <label for="name">Display</label>
                <input type="text" class="form-control" name="" id="name" aria-describedby="helpId" placeholder="" required>
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input type="password" class="form-control" name="" id="Password" aria-describedby="helpId" placeholder="" required>
            </div>
            <div class="form-group">
                <label for="RetypePassword">RetypePassword</label>
                <input type="password" class="form-control" name="" id="RetypePassword" aria-describedby="helpId" placeholder="" required>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
            <button type="submit" class="btn btn-secondary" id="js-login">Back To Login</button>
        </form>
    </div>
</div>
</div>`

function onload() {
    document.getElementById('js-login').addEventListener('click', function() {
        setScreen(backLogin)

    });
    const form = document.getElementById('js-formres');
    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const user = {
            email: form.email.value,
            name: form.name.value,
            password: form.Password.value,
            RetypePassword: form.RetypePassword.value,
        }
        console.log(user)
        const result = await register(user);
        if (result) alert("Register successfully!")
    });
}

export default {
    content: screen,
    onload: onload
}