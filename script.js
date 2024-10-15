let prevButton =  document.getElementById('prev');
let nextButton =  document.getElementById('next');
let block3 = document.querySelector('.block-3');
let items = block3.querySelectorAll('.list .item');
let list = block3.querySelector('.list');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;


function setSlider(){
    let itemOld = block3.querySelector('.list .item.active');
    itemOld.classList.remove('active');
    
}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 :active +1
    setSlider()
    items[active].classList.add('active')
}

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')

    
}
