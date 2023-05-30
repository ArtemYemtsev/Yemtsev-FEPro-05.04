let slides = document.querySelectorAll(".slider__block__item");
let curentSlide = 0

function toSlide(n){
    const classShowing = 'slider__block__item showing'
    const classNoShowing = 'slider__block__item'
    controls(n)
    slides[curentSlide].className = classNoShowing
    curentSlide = n
    slides[curentSlide].className = classShowing
}

function controls(n){
    const classDisable = 'disable'
    
    if(n > 0 && prev.classList.contains(classDisable)) {
        prev.classList.remove(classDisable)
    } else if (n == 0){
        prev.classList.add(classDisable)
    }

    if (n === slides.length-1){
        next.classList.add(classDisable)
    } else if(n < slides.length-1 && next.classList.contains(classDisable)){
        next.classList.remove(classDisable)
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