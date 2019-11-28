import screen from "./views/register.js"


function setScreen(screen) {
    document.getElementById('demo').innerHTML = screen.content;
    screen.onload();
}

setScreen(screen);

export default setScreen;