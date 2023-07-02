document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    
    // windows.onscroll = function() {
    if(window.scrollY > 0) {
        nav.classList.add("navbar-scrolled");
    } else {
        nav.classList.remove("navbar-scrolled");
    }
});