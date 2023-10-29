const hamburgerButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('show'); 
});

window.addEventListener('resize', function(){
    if (this.innerWidth>=1200){
        mobileMenu.classList.remove('show');
    }
});
