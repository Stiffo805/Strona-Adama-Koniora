const tooltipText = document.querySelector('.tooltip-text');
const tooltipElement = document.querySelector('.tooltip');

tooltipElement.addEventListener('click',function(){
    tooltipText.classList.add('shake-absolute-anim');
    setTimeout(function(){
        tooltipText.classList.remove('shake-absolute-anim');
    },1000)
})