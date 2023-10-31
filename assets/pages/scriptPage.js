const cost = document.querySelector('.cost__span')
const startCost = +cost.textContent;

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
    
//open and close selection menu

const buttonOpeningHouseSelectionMenu = document.querySelector('.secondBlockMenu__button');
const selectionMenu = document.querySelector('.secondBlockMenu__menu')

buttonOpeningHouseSelectionMenu.addEventListener('click', () => {
    if(selectionMenu.classList.contains('notVisible')){
        selectionMenu.classList.remove('notVisible')
        selectionMenu.classList.add('visible')
    } else {
        selectionMenu.classList.remove('visible')
        selectionMenu.classList.add('notVisible')
    }
})

let priceChange = 0;



selectionMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('secondBlockMenu__text')) {
        buttonOpeningHouseSelectionMenu.textContent = e.target.textContent
        selectionMenu.classList.remove('visible')
        selectionMenu.classList.add('notVisible')
        // priceChange =  (+e.target.value) - (+buttonOpeningHouseSelectionMenu.value)
        priceChange +=  (+e.target.value) - (+buttonOpeningHouseSelectionMenu.value)
        buttonOpeningHouseSelectionMenu.setAttribute('value', e.target.value)
        cost.textContent = startCost + priceChange
    }
})

//slider movements

const sliderInputs = document.querySelectorAll('.secondBlock__service-input')
const counters = document.querySelectorAll('.secondBlock__service-numberCounter')
const progressBar = document.querySelectorAll('.secondBlock__service-inputProgressBar')

let price = 0;
let pricePositionSlider = 0;
let secondPositionSlider = 0;
let secondPrice = 0;

sliderInputs[0].addEventListener('input', (e) => {
    progressBar[0].style.width =  (e.target.offsetWidth - 20) * (e.target.value/e.target.max) + 'px'
    counters[0].style.left = counters[0].style.left = (e.target.offsetWidth - 30) * (e.target.value/e.target.max)  + 'px'
    counters[0].textContent = e.target.value
    if ((+e.target.value) > pricePositionSlider) {
        price = e.target.value * 7500
        priceChange += price - (pricePositionSlider * 7500)
        pricePositionSlider = e.target.value
    } else if ((+e.target.value) < pricePositionSlider) {
        price = pricePositionSlider * 7500
        pricePositionSlider = e.target.value
        priceChange -= price - (e.target.value * 7500)
    }
    cost.textContent = startCost + priceChange


    if (pricePositionSlider > 0) {
        sliderInputs[1].setAttribute('disabled', true)
    } else {
        sliderInputs[1].removeAttribute('disabled')
    }
})

sliderInputs[1].addEventListener('input', (e) => {
    progressBar[1].style.width =  (e.target.offsetWidth - 20) * (e.target.value/e.target.max) + 'px'
    counters[1].style.left = counters[1].style.left = (e.target.offsetWidth - 30) * (e.target.value/e.target.max)  + 'px'
    if ((+e.target.value) > secondPositionSlider) {
        secondPrice = e.target.value * 2900
        priceChange += secondPrice - (secondPositionSlider * 2900)
        secondPositionSlider = e.target.value
    } else if ((+e.target.value) < secondPositionSlider) {
        secondPrice = secondPositionSlider * 2900
        secondPositionSlider = e.target.value
        priceChange -= secondPrice - (e.target.value * 2900)
    }
    cost.textContent = startCost + priceChange
    counters[1].textContent = e.target.value

    if (secondPositionSlider > 0) {
        sliderInputs[0].setAttribute('disabled', true)
    } else {
        sliderInputs[0].removeAttribute('disabled')
    }
})



// click select button

const selectFieldButtons = document.querySelectorAll('.secondBlock__service-buttonSelector')

selectFieldButtons.forEach(selectButton => {
    selectButton.addEventListener('click', (e) => {

        if (e.target.dataset.select){
            const btns = document.querySelectorAll('.secondBlock__service-buttonSelector[data-select="'+e.target.dataset.select+'"]')

            let btn = e.target
            let value = +btn.value
            if (btn.classList.contains('inactiveBtn')) {
                for (let i = 0; i < btns.length; i++){
                    if (e.target === btns[i]){
                        btns[i].classList.add('activeBtn')
                        btns[i].classList.remove('inactiveBtn')
                        continue
                    } else {
                        btns[i].classList.add('inactiveBtn')
                        btns[i].classList.remove('activeBtn')
                    }
                }
                priceChange += value
            } else {
                btn.classList.add('inactiveBtn')
                btn.classList.remove('activeBtn')
                for (let i = 0; i < btns.length; i++){
                    if (e.target === btns[i]){
                        continue
                    } else {
                        btns[i].removeAttribute('disabled')
                    }
                }
                priceChange -= value
            }
        } else {
            let btn = e.target
            let value = +btn.value
            if (btn.classList.contains('inactiveBtn')) {
                btn.classList.add('activeBtn')
                btn.classList.remove('inactiveBtn')
                priceChange += value
            } else {
                btn.classList.add('inactiveBtn')
                btn.classList.remove('activeBtn')
                priceChange -= value
            }
        }

        
        cost.textContent = startCost + priceChange
    })
})



const buttonsSpan = document.querySelectorAll('.secondBlock__service-span')
const imgBtn = document.querySelector('.firstBlock__carousel-item')
const modal = document.querySelector(`.modalMain.bgwhite`)
let slideIndexModal = 1;


imgBtn.addEventListener('click', () => {
    modal.classList.add('visible')
    modal.classList.remove('notVisible')
    document.body.style.overflow = 'hidden';
    slidesModal.forEach((slide, i) => {
        if (slide.classList.contains('active')){
            slideIndexModal = i + 1
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
        document.body.style.overflow = '';
    }
})

buttonWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal__wrapper')){
        modal.classList.remove('visible')
        modal.classList.add('notVisible')
        document.body.style.overflow = '';
    }
})

const mediaQuerrymax1200 = window.matchMedia('(max-width: 1199px)')
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

buttonsSpan.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = document.querySelector(`.modal[data-modal=${btn.dataset.modal}]`)
        modal.classList.add('visible')
        modal.classList.remove('notVisible')
        document.body.style.overflow = 'hidden';
    })
})


const modals = document.querySelectorAll('.modal')
modals.forEach(modal => {
    buttonWrapper = modal.children[0]
    btnClose = buttonWrapper.children[0]
    btnClose.addEventListener('click', (e) => {
        if (modal.classList.contains('visible')){
            modal.classList.remove('visible')
            modal.classList.add('notVisible')
            document.body.style.overflow = '';
        }
    })

    buttonWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal__wrapper')){
            modal.classList.remove('visible')
            modal.classList.add('notVisible')
            document.body.style.overflow = '';
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








