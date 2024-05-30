let hambuger = document.querySelector('.hamburger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hambuger.addEventListener('click', function () {
    mobileNav.classList.add('open');
});

times.addEventListener('click', function () {
    mobileNav.classList.remove('open');
});