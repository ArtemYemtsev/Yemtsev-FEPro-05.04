let slides = document.querySelectorAll(".slider__block__item");
let curentSlide = 0

function toSlide(n){
    controls(n)
    slides[curentSlide].className = 'slider__block__item'
    curentSlide = n
    slides[curentSlide].className = 'slider__block__item showing'
}

function controls(n){
    if(n > 0 && prev.classList.contains('disable')) {
        prev.classList.remove('disable')
    } else if (n == 0){
        prev.classList.add('disable')
    }

    if (n === slides.length-1){
        next.classList.add('disable')
    } else if(n < slides.length-1 && next.classList.contains('disable')){
        next.classList.remove('disable')
    }
}

let prev = document.getElementById('btnPrev')
prev.addEventListener('click',()=>{
    toSlide(curentSlide - 1)
})

let next = document.getElementById('btnNext')
next.addEventListener('click',()=>{
    toSlide(curentSlide + 1)
})