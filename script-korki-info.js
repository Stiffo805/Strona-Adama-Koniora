const div1 = document.querySelector('#korki-1-div');
const div2 = document.querySelector('#korki-2-div');
const div3 = document.querySelector('#korki-3-div');
const div4 = document.querySelector('#korki-4-div');
const div5 = document.querySelector('#korki-5-div');

const imgDiv1 = document.querySelector('#korki-1-img-div');
const imgDiv2 = document.querySelector('#korki-2-img-div');
const imgDiv3 = document.querySelector('#korki-3-img-div');
const imgDiv4 = document.querySelector('#korki-4-img-div');
const imgDiv5 = document.querySelector('#korki-5-img-div');

const rightTiles = document.querySelectorAll('.tile-right');
const leftTiles = document.querySelectorAll('.tile-left');

const container = document.querySelector('.main-page-section');

function swapDOMElements(element1, element2){
    const temp = document.createElement('div');
    element1.parentNode.insertBefore(temp, element1);
    element2.parentNode.insertBefore(element1, element2);
    temp.parentNode.insertBefore(element2, temp);
    temp.parentNode.removeChild(temp);
}

function isElementBefore(element1, element2) {
    if (element1 && element2 && element1 !== element2) {
        const parent = element1.parentNode;

        if (parent === element2.parentNode) {
            
            const children = Array.from(parent.children);

            const index1 = children.indexOf(element1);
            const index2 = children.indexOf(element2);

            if (index1 !== -1 && index2 !== -1) {
                
                return index1 < index2;
            }
        }
    }
    return false;
}
window.addEventListener('load', function(){
    const resizeEvent = new Event('resize');

    window.dispatchEvent(resizeEvent);
})

window.addEventListener('resize', function(){
    if (this.innerWidth>900){
        if (isElementBefore(imgDiv2,div2)){
            swapDOMElements(div2,imgDiv2);
        }
        if (isElementBefore(imgDiv4,div4)){
            swapDOMElements(div4,imgDiv4);
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
        if (isElementBefore(div4,imgDiv4)){
            swapDOMElements(div4,imgDiv4);
        }
        rightTiles.forEach(function(tile){
            tile.style.height = window.innerWidth*(2/3)+"px";

        });
        leftTiles.forEach(function(tile){
            tile.style.height = window.innerWidth*(2/3)+"px";
        });
    }
});
