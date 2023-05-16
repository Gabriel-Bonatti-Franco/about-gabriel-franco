const carousel = document.querySelector('.carrossel');
const firstImg = carousel.querySelectorAll('.projeto')[0];
const arrowIcons = document.querySelectorAll('.projetos i');

let isDragStart = false, prevPageX, prevScroolLeft;

let firstImgWidth = firstImg.clientWidth + 15;

const ajustarTamanhos = () => {
    firstImgWidth = firstImg.clientWidth + 15;
    carousel.scrollLeft = (firstImgWidth * (carousel.scrollLeft / firstImgWidth).toFixed(0));
}

arrowIcons.forEach(icon => {
    icon.addEventListener('click',() =>{

        ajustarTamanhos();
        carousel.scrollLeft += (icon.id == "left" ? -firstImgWidth : firstImgWidth);

    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScroolLeft = carousel.scrollLeft;
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove('rolando');
    carousel.scrollLeft = (firstImgWidth * (carousel.scrollLeft / firstImgWidth).toFixed(0));
    
    ajustarTamanhos();
}

const dragging = (e) => {

    if(!isDragStart) return;

    e.preventDefault();
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.classList.add('rolando');

    carousel.scrollLeft = prevScroolLeft - positionDiff;
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart);

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('touchmove', dragging);

carousel.addEventListener('mouseup', dragStop);
carousel.addEventListener('touchend', dragStop);

window.addEventListener('resize', ajustarTamanhos);