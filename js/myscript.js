
var typed = new Typed('.text', {
strings: ['Frontend Developer  ' ,'Logo Designer'],
typeSpeed: 100,
backSpeed: 100,
backDelay:1000,
loop:true
});


let navlink = document.querySelectorAll("header nav a");

navlink.forEach(nav => {
    nav.addEventListener('click', function () {
        navlink.forEach(navlist => navlist.classList.remove('active'));
        this.classList.add('active');
    })
})

