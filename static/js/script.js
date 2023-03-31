var myNav = document.getElementById('header');
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >=200 ){
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};


let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("navbar");
let navLinks = navBar.querySelectorAll("li");
hamMenuIcon.addEventListener("click", () => {
    navBar.classList.toggle("active");
    hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click", () => {
        navBar.classList.remove("active");
        hamMenuIcon.classList.toggle("fa-times");
    });
});


