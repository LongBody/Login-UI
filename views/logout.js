const logout = `<div class="container">
<div class="row">
<div class="col-lg-4"></div>
        <div class="col-lg-3">
        <button type="button" class="btn btn-primary" onclick='log()'>Logout</button>
        </div>
    </div>
    </div>`




function onload() {
    document.getElementById('logout').style.display = "none"



}
export default {
    content: logout,
    onload: onload
}