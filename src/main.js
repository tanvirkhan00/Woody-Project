
// Add NavSideBar
const hamburger =document.getElementById('hamburger');
const navMenu =document.getElementById('nav-menu');
const closeIcon =document.getElementById('nav-close');
const navLink =document.querySelectorAll('.nav__link');

navLink.forEach(link => 
    link.addEventListener("click", () => {
        navMenu.classList.add('hidden');
    })
)

closeIcon.addEventListener("click", () => {
    navMenu.classList.add('hidden');
})

hamburger.addEventListener("click", () => {
       navMenu.classList.remove('hidden');
})


// ---------- SHOW SCROLL UP---------

const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if(this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}
window.addEventListener('scroll', scrollUp);