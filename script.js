const hamburgerButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu');

const div1 = document.querySelector('#article-1');
const div2 = document.querySelector('#article-2');
const div3 = document.querySelector('#article-3');

const imgDiv1 = document.querySelector('#image-1');
const imgDiv2 = document.querySelector('#image-2');
const imgDiv3 = document.querySelector('#image-3');

const rightTiles = document.querySelectorAll('.tile-right');
const leftTiles = document.querySelectorAll('.tile-left');

hamburgerButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('show'); // Dodaj lub usuń klasę "show" w celu pokazania/ukrycia menu
});
window.addEventListener('load', function(){
    const resizeEvent = new Event('resize');

    window.dispatchEvent(resizeEvent);
})
window.addEventListener('resize', function(){
    if (this.innerWidth>=1200){
        mobileMenu.classList.remove('show');
    }
    if (this.innerWidth>900){
        if (isElementBefore(imgDiv2,div2)){
            swapDOMElements(div2,imgDiv2);
        }
        rightTiles.forEach(function(tile){
            tile.style.height = window.innerWidth*(7/24)+"px";

        });
        leftTiles.forEach(function(tile){
            tile.style.height = window.innerWidth*(7/24)+"px";
        });
    }
    else{
        if (isElementBefore(div2,imgDiv2)){
            swapDOMElements(div2,imgDiv2);
        }
        rightTiles.forEach(function(tile){
            tile.style.height = window.innerWidth*(2/3)+"px";

        });
        leftTiles.forEach(function(tile){
            tile.style.height = window.innerWidth*(2/3)+"px";
        });
    }

    
});



