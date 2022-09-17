burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('navheight');

})
function display(signin){
    location="http://127.0.0.1:5500/signin.html";
};
function display(signup){
    location="http://127.0.0.1:5500/signup.html";
};