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
let inputPriceChange = 0



selectionMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('secondBlockMenu__text')) {
        buttonOpeningHouseSelectionMenu.textContent = e.target.textContent
        selectionMenu.classList.remove('visible')
        selectionMenu.classList.add('notVisible')
        // priceChange =  (+e.target.value) - (+buttonOpeningHouseSelectionMenu.value)
        priceChange +=  (+e.target.value) - (+buttonOpeningHouseSelectionMenu.value)
        buttonOpeningHouseSelectionMenu.setAttribute('value', e.target.value)
        cost.textContent = startCost + priceChange + inputPriceChange
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

    inputPriceChange -= secondPrice;
    sliderInputs[1].value = 0;
    secondPositionSlider = 0;
    secondPrice = 0;
    counters[1].textContent = 0;
    progressBar[1].style.width = 0 + 'px';
    counters[1].style.left = 0 + 'px';

    cost.textContent = startCost + priceChange + inputPriceChange

    progressBar[0].style.width =  (e.target.offsetWidth - 20) * (e.target.value/e.target.max) + 'px'
    counters[0].style.left = counters[0].style.left = (e.target.offsetWidth - 30) * (e.target.value/e.target.max)  + 'px'
    counters[0].textContent = e.target.value
    if ((+e.target.value === 0)){
        inputPriceChange -= pricePositionSlider * 8250
        price = 0
        pricePositionSlider = e.target.value
    }else if ((+e.target.value) > pricePositionSlider) {
        price = (+e.target.value) * 8250
        inputPriceChange += price - inputPriceChange
        pricePositionSlider = e.target.value
    } else if ((+e.target.value) < pricePositionSlider) {
        price = (+e.target.value) * 8250
        inputPriceChange += price - inputPriceChange
        pricePositionSlider = e.target.value
    }

    cost.textContent = startCost + priceChange + inputPriceChange

})

sliderInputs[1].addEventListener('input', (e) => {

    inputPriceChange -= price;
    sliderInputs[0].value = 0;
    pricePositionSlider = 0;
    price = 0;
    counters[0].textContent = 0;
    progressBar[0].style.width = 0 + 'px';
    counters[0].style.left = 0 + 'px';

    cost.textContent = startCost + inputPriceChange

    progressBar[1].style.width =  (e.target.offsetWidth - 20) * (e.target.value/e.target.max) + 'px'
    counters[1].style.left = counters[1].style.left = (e.target.offsetWidth - 30) * (e.target.value/e.target.max)  + 'px'
    counters[1].textContent = e.target.value
    if ((+e.target.value === 0)){
        inputPriceChange -= secondPositionSlider * 3190
        secondPrice = 0
        secondPositionSlider = e.target.value
    }else if ((+e.target.value) > secondPositionSlider) {
        secondPrice = e.target.value * 3190
        inputPriceChange += secondPrice - inputPriceChange
        secondPositionSlider = e.target.value
    } else if ((+e.target.value) < secondPositionSlider) {
        secondPrice = e.target.value * 3190
        inputPriceChange += secondPrice - inputPriceChange
        secondPositionSlider = e.target.value 
    }

    cost.textContent = startCost + priceChange + inputPriceChange
})

// click select button


const selectFieldButtons = document.querySelectorAll('.secondBlock__service-button')

selectFieldButtons.forEach(selectButton => {
    selectButton.addEventListener('click', (e) => {

        if (selectButton.dataset.select){

            const btns = document.querySelectorAll('.secondBlock__service-buttonSelector[data-select="'+e.target.dataset.select+'"]')
            let counter = 0
            for (let i = 0; i < btns.length; i++){
                if(btns[i].classList.contains('inactiveBtn')){
                    counter++
                }
            }
            if (counter > 1) {
                for (let i = 0; i < btns.length; i++){
                    if (btns[i] === e.target || btns[i] === e.target.children[0]){
                        btns[i].classList.add('activeBtn')
                        btns[i].classList.remove('inactiveBtn')
                        priceChange += +btns[i].value
                    }
                } 
                cost.textContent = startCost + priceChange + inputPriceChange
                

            } else if (counter === 1) {

                if (e.target.classList.contains('secondBlock__service-button')){
                    
                    if (e.target.children[0].classList.contains('inactiveBtn')){
                        for (let i = 0; i < btns.length; i++){
                            if (e.target.children[0] === btns[i]){
                                btns[i].classList.add('activeBtn')
                                btns[i].classList.remove('inactiveBtn')
                                priceChange += +btns[i].value
                            } else {
                                btns[i].classList.remove('activeBtn')
                                btns[i].classList.add('inactiveBtn')
                                priceChange -= +btns[i].value
                            }
                        } 
                    } else if (e.target.children[0].classList.contains('activeBtn')) {
                        e.target.children[0].classList.remove('activeBtn')
                        e.target.children[0].classList.add('inactiveBtn')
                        priceChange -= +e.target.children[0].value
                    }

                    cost.textContent = startCost + priceChange + inputPriceChange
                    
                } else if (e.target.classList.contains('secondBlock__service-buttonSelector')) {
                    if (e.target.classList.contains('inactiveBtn')){
                        for (let i = 0; i < btns.length; i++){
                            if (e.target === btns[i]){
                                btns[i].classList.add('activeBtn')
                                btns[i].classList.remove('inactiveBtn')
                                priceChange += +btns[i].value
                            } else {
                                btns[i].classList.remove('activeBtn')
                                btns[i].classList.add('inactiveBtn')
                                priceChange -= +btns[i].value
                            }
                        } 
                    } else if (e.target.classList.contains('activeBtn')) {
                        e.target.classList.remove('activeBtn')
                        e.target.classList.add('inactiveBtn')
                        priceChange -= +e.target.value
                    }

                    cost.textContent = startCost + priceChange + inputPriceChange
                }
            }
        } else {

            const btn = selectButton.querySelector('button')
            const value = +btn.value

            if (btn.classList.contains('inactiveBtn')) {
                btn.classList.add('activeBtn')
                btn.classList.remove('inactiveBtn')
                priceChange += value
            } else {
                btn.classList.add('inactiveBtn')
                btn.classList.remove('activeBtn')
                priceChange -= value
            }

            cost.textContent = startCost + priceChange + inputPriceChange
        }
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








