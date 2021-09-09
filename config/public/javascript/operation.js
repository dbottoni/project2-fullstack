// var mainthing = document.getElementById("mainform");
console.log("js is linked");
// var ageQ = document.getElementById("agecheck");
var signPage = document.getElementById("signBtn");
var loginPage = document.getElementById("loginBtn");
var showsignPage = document.getElementById("signup-page")
var showloginPage = document.getElementById("login-page")


// startpage();
showlogin();
signPage.addEventListener("click", function(e){
    e.preventDefault();
    showsign();
})

loginPage.addEventListener("click", function(e){
    e.preventDefault();
    // beginmain();
    showlogin();
});



function showsign() {
    showloginPage.style.display = "none";
    showsignPage.style.display = "block";
}

function showlogin() {
    showsignPage.style.display = "none";
    showloginPage.style.display = "block";
} 

function startpage() {
    showsignPage.style.display = "none";
    showloginPage.style.display = "none";
}