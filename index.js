import backLogin from "./views/login.js"

function setScreen(screen) {
    document.getElementById('demo').innerHTML = screen.content;
    screen.onload();
}

setScreen(backLogin);


export default setScreen;