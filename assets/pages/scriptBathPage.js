const cost = document.querySelector('.cost__span')
let totalCost = +cost.textContent;

// slider house img 

const slidesModal = document.querySelectorAll('.firstBlock__field-img')
const prevModal = document.querySelector('.firstBlock__carousel-left')
const nextModal = document.querySelector('.firstBlock__carousel-right')
const slideModalField = document.querySelector('.firstBlock__field')
const mainSlide = document.querySelector('.firstBlock__carousel-item')

let slideIndex = 1;


const mediaQuerrymax = window.matchMedia('(max-width: 959px)')

let lastSlideIndex = 0

function showSlides(n, transform, widthElem) {

    let translateCount = (slideIndex - 2) * -transform + 'px'
    const lastTranslateCount = (slidesModal.length - 2) * -transform - widthElem + 'px';

    if (n > slidesModal.length) {
        slideIndex = 1
    } 

    if  (n < 1) {
        slideIndex = slidesModal.length
    }

    
    if (n >= 3 && translateCount !== '100px' && n <= (slidesModal.length - 1)) {
        slideModalField.style.transform = `translateX(${translateCount})`
    }

    if (slideIndex == slidesModal - 1){
        slideModalField.style.transform = `translateX(${lastTranslateCount})`
    }

    if (translateCount == '100px' || translateCount == '0px') {
        slideModalField.style.transform = 'translateX(0)'
    }
    
    if (slideIndex - 3 == slidesModal.length - 3) {
        slideModalField.style.transform = `translateX(${lastTranslateCount})`
    }
    
    if (slidesModal.length == lastSlideIndex && slideIndex == 1){
        slideModalField.style.transform = 'translateX(0)'
    }

    slidesModal.forEach( slide => slide.classList.remove('active'))

    slidesModal[slideIndex - 1].classList.add('active')

    mainSlide.src = slidesModal[slideIndex - 1].src

    lastSlideIndex = slideIndex
    
}
function plusSlides(n, transform, widthElem) {
    showSlides(slideIndex += n, transform, widthElem)
}

prevModal.addEventListener('click', function(){
    if (mediaQuerrymax.matches){
        plusSlides(-1, 95, -95)
    } else {
        plusSlides(-1, 180, -180)
    }
})

nextModal.addEventListener('click', function(){
    if (mediaQuerrymax.matches){
        plusSlides(1, 95, -95)
    } else {
        plusSlides(1, 180, -180)
    }
})


const modals = document.querySelectorAll('.modal')
modals.forEach(modal => {
    buttonWrapper = modal.children[0]
    btnClose = buttonWrapper.children[0]
    btnClose.addEventListener('click', (e) => {
        if (modal.classList.contains('visible')){
            modal.classList.remove('visible')
            modal.classList.add('notVisible')
        }
    })

    buttonWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal__wrapper')){
            modal.classList.remove('visible')
            modal.classList.add('notVisible')
        }
    })

    // modal slider


    const sliderImgs = buttonWrapper.querySelectorAll('.modal__img')
    const btnNext = buttonWrapper.children[buttonWrapper.children.length - 2]
    const btnPrev = buttonWrapper.children[buttonWrapper.children.length - 1]

    let slideIndex = 1;

    showSlides(slideIndex)


    function showSlides(n) {

        if (n > sliderImgs.length) {
            slideIndex = 1
        } 

        if  (n < 1) {
            slideIndex = sliderImgs.length
        }

        sliderImgs.forEach( slide => slide.classList.add('none'))
        sliderImgs.forEach( slide => slide.classList.remove('block'))

        sliderImgs[slideIndex - 1].classList.add('block')
        sliderImgs[slideIndex - 1].classList.remove('none')

    }

    function plusSlides(n) {
        showSlides(slideIndex += n)
    }

    btnPrev.addEventListener('click', function(){
        plusSlides(-1)
    })

    btnNext.addEventListener('click', function(){
        plusSlides(1)
    })
})


const buttonsSpan = document.querySelectorAll('.secondBlock__service-span')
const imgBtnModal = document.querySelector('.firstBlock__carousel-item')
const modal = document.querySelector(`.modalMain.bgwhite`)
let slideIndexModal = 1;


imgBtnModal.addEventListener('click', () => {
    modal.classList.add('visible')
    modal.classList.remove('notVisible')
    slidesModal.forEach((slide, i) => {
        if (slide.classList.contains('active')){
            slideIndexModal = i + 1
            console.log(slideIndexModal)
            showSlidesModal(slideIndexModal)
        }
    }) 
})

buttonWrapper = modal.children[0]
btnClose = buttonWrapper.children[0]
btnClose.addEventListener('click', (e) => {
    if (modal.classList.contains('visible')){
        modal.classList.remove('visible')
        modal.classList.add('notVisible')
    }
})

buttonWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal__wrapper')){
        modal.classList.remove('visible')
        modal.classList.add('notVisible')
    }
})

const sliderImgsModal = modal.querySelectorAll('.modalMain__img')
const btnNext = buttonWrapper.children[buttonWrapper.children.length - 2]
const btnPrev = buttonWrapper.children[buttonWrapper.children.length - 1]


function showSlidesModal(n) {

    if (n > sliderImgsModal.length) {
        slideIndexModal= 1
    } 

    if  (n < 1) {
        slideIndexModal = sliderImgsModal.length
    }

    sliderImgsModal.forEach( slide => slide.classList.add('none'))
    sliderImgsModal.forEach( slide => slide.classList.remove('block'))
    sliderImgsModal.forEach( slide => slide.style.scale = '1.0')

    sliderImgsModal[slideIndexModal - 1].classList.add('block')
    sliderImgsModal[slideIndexModal - 1].classList.remove('none')

}

function plusSlidesModal(n) {
    showSlidesModal(slideIndexModal += n)
}

btnPrev.addEventListener('click', function(){
    plusSlidesModal(-1)
})

btnNext.addEventListener('click', function(){
    plusSlidesModal(1)
})




