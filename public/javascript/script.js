const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const backDrop = document.querySelector('.backdrop');

// open mobile nac function
toggleButton.addEventListener('click', function () {
    mobileNav.style.display = 'block';
    backDrop.style.display = 'block';
});

// close mobile nav
backDrop.addEventListener('click', function () {
    mobileNav.style.display = 'none';
    backDrop.style.display = 'none';
});
