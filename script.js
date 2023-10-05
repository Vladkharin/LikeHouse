// menu

const menuOpen = document.querySelector('.menu__Open')
const menuClose = document.querySelector('.menu__Close')
const menu = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')



menuOpen.addEventListener('click', () => {
    menu.classList.add('visible');
    overlay.classList.add('block')
    document.body.style.overflow = 'hidden';
})

menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu__Close')){
        menu.classList.remove('visible');
        document.body.style.overflow = '';
        overlay.classList.remove('block')
    } else if (e.target.classList.contains('overlay')) {
        overlay.classList.remove('block')
        menu.classList.remove('visible');
        document.body.style.overflow = '';
    }
})

overlay.addEventListener('click', () => {
    overlay.classList.remove('block')
    menu.classList.remove('visible');
    document.body.style.overflow = '';
})

//detailed information

const buttonsDetailedInformation = document.querySelectorAll('.fifthBlock__item-plus')
const buttonWrapper = document.querySelector('.fifthBlock__items')
const textDetailedInforamtion = document.querySelectorAll('.fifthBlock__item-subtitle')

buttonWrapper.addEventListener('click', (e) => {
    let target = e.target
    if (e.target.classList.contains('fifthBlock__item-plus')) {
        if (e.target.classList.contains('rotate')) {
            e.target.nextElementSibling.style.maxHeight = '0px'
            e.target.classList.remove('rotate')
        } else {
            e.target.nextElementSibling.style.maxHeight = '190px'
            e.target.classList.add('rotate')
        }
    }
});



//animation nav at scroll


const navElem = document.querySelector('.nav')
const navElemHeight = navElem.offsetHeight / 2;

window.addEventListener('scroll', () => {
    if (window.scrollY > navElemHeight){
        navElem.style.backgroundColor = '#074097';
    } else {
        navElem.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }
})


// create catalog items house media max 480px


const itemsHouseField = document.querySelector('.thirdBlock__tiles-inner')

let itemsHouse = [
    {
        img: './assets/img/firstTile.webp',
        alt: 'firstTile',
        size: 'Размер: 6х7',
        square: 'Площадь: 71 м2',
        coust:  'Стоимость: 2 329 000 руб.',
        mortgage: 'В ипотеку: от 12 698 руб.',
        type: 'two-storey house', 
        link: '6x7.html'
    } ,
    {
        img: './assets/img/secondTile.webp',
        alt: 'secondTile',
        size: 'Размер: 7х7',
        square: 'Площадь: 82.4 м2',
        coust:  'Стоимость: 2 729 000 руб.',
        mortgage: 'В ипотеку: от 15 029 руб.',
        type: 'two-storey house',
        link: '7x7.html'
    } ,
    {
        img: './assets/img/thirdTile.webp',
        alt: 'thirdTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage',
        link: '12x12.html'
    },
    {
        img: './assets/img/fourthTile.webp',
        alt: 'fourthTile',
        size: 'Размер: 7х8',
        square: 'Площадь: 94.7 м2',
        coust:  'Стоимость: 3 050 000 руб.',
        mortgage: 'В ипотеку: от 16 899 руб.',
        type: 'two-storey house',
        link: '7x8.html'
    },
    {
        img: './assets/img/fifthTile.webp',
        alt: 'fifthTile',
        size: 'Размер: 7х8 одноэтажный',
        square: 'Площадь: 50 м2',
        coust:  'Стоимость: 2 329 000 руб.',
        mortgage: 'В ипотеку: от 12 698 руб.',
        type: 'cottage',
        link: '7x8-one.html'
    },
    {
        img: './assets/img/sixthTile.webp',
        alt: 'sixthTile',
        size: 'Размер: 8х8',
        square: 'Площадь: 109 м2',
        coust:  'Стоимость: 3 329 000 руб.',
        mortgage: 'В ипотеку: от 18 525 руб.',
        type: 'two-storey house',
        link: '8x8.html'
    },
    {
        img: './assets/img/seventhTile.webp',
        alt: 'seventhTile',
        size: 'Размер: 10х8',
        square: 'Площадь: 73 м2',
        coust:  'Стоимость: 2 729 000 руб.',
        mortgage: 'В ипотеку: от 15 029 руб.',
        type: 'cottage',
        link: '10x8.html'
    },
    {
        img: './assets/img/eighthTile.webp',
        alt: 'eighthTile',
        size: 'Размер: 8х9',
        square: 'Площадь: 126 м2',
        coust:  'Стоимость: 3 690 000 руб.',
        mortgage: 'В ипотеку: от 20 629 руб.',
        type: 'two-storey house',
        link: '8x9.html'
    },
    {
        img: './assets/img/ninthTile.webp',
        alt: 'ninthTile',
        size: 'Размер: 12х8',
        square: 'Площадь: 87 м2',
        coust:  'Стоимость: 3 229 000 руб.',
        mortgage: 'В ипотеку: от 17 890 руб.',
        type: 'cottage',
        link: '12x8.html'
    },
    {
        img: './assets/img/tenthTile.webp',
        alt: 'tenthTile',
        size: 'Размер: 10х9.5',
        square: 'Площадь: 133 м2',
        coust:  'Стоимость: 3 970 000 руб.',
        mortgage: 'В ипотеку: от 22 260 руб.',
        type: 'two-storey house',
        link: '10x9.html'
    },
    {
        img: './assets/img/eleventhTile.webp',
        alt: 'eleventhTile',
        size: 'Размер: 10х9.5 передняя веранда',
        square: 'Площадь: 133 м2',
        coust:  'Стоимость: 4 050 000 руб.',
        mortgage: 'В ипотеку: от 22 727 руб.',
        type: 'two-storey house',
        link: '10x9-anterior.html'
    },
    {
        img: './assets/img/twelfthTile.webp',
        alt: 'twelfthTile',
        size: 'Размер: 12х6',
        square: 'Площадь: 106  м2',
        coust:  'Стоимость: 4 270 000 руб.',
        mortgage: 'В ипотеку: от 24 009 руб.',
        type: 'two-storey house',
        link: '12x6.html'
    },
    {
        img: './assets/img/thirdteenthTile.webp',
        alt: 'thirdteenthTile',
        size: 'Размер: 12х8',
        square: 'Площадь: 87 м2',
        coust:  'Стоимость:  3 340 000 руб.',
        mortgage: 'В ипотеку: от 18 589 руб.',
        type: 'cottage',
        link: '12x8-barn.html'
    },
    {
        img: './assets/img/fourteenthTile.webp',
        alt: 'fourteenthTile',
        size: 'Размер: 11х7.5',
        square: 'Площадь: 103 м2',
        coust:  'Стоимость: 4 029 000 руб.',
        mortgage: 'В ипотеку: от 22 604 руб.',
        type: 'two-storey house',
        link: '11x7.html'
    },
    {
        img: './assets/img/fifteenthTile.webp',
        alt: 'fifteenthTile',
        size: 'Размер: 12х9.5',
        square: 'Площадь: 153 м2',
        coust:  'Стоимость: 5 029 000 руб.',
        mortgage: 'В ипотеку: от 28 432 руб.',
        type: 'two-storey house',
        link: '12x9.html'
    },
    {
        img: './assets/img/sixteenthTile.webp',
        alt: 'sixteenthTile',
        size: 'Размер: 8х10.5',
        square: 'Площадь: 120 м2',
        coust:  'Стоимость: 3 640 000 руб.',
        mortgage: 'В ипотеку: от 20 337 руб.',
        type: 'two-storey house',
        link: '8x10.html'
    },
    {
        img: './assets/img/seventeenthTile.webp',
        alt: 'seventeenthTile',
        size: 'Размер: 10х7.5',
        square: 'Площадь: 114 м2',
        coust:  'Стоимость: 3 660 000 руб.',
        mortgage: 'В ипотеку: от 20 454 руб.',
        type: 'two-storey house',
        link: '10x7.html'
    },
    {
        img: './assets/img/eigthteenthTile.webp',
        alt: 'twentyThirdTile',
        size: 'Размер: 8х10',
        square: 'Площадь: 73 м2',
        coust:  'Стоимость: 2 750 000 руб.',
        mortgage: 'В ипотеку: от 15 151 руб.',
        type: 'cottage',
        link: '8x10-2.html'
    },
    {
        img: './assets/img/twentieth.webp',
        alt: 'twentieth',
        size: 'Размер: 12x8',
        square: 'Площадь: 89.7 м2',
        coust:  'Стоимость: 3 229 000 руб.',
        mortgage: 'В ипотеку: от 17 890 руб.',
        type: 'cottage',
        link: '12x8-bay_window.html'
    },
    {
        img: './assets/img/twentyFirstTile.webp',
        alt: 'twentyFirstTile',
        size: 'Размер: 6х6',
        square: 'Площадь: 54 м2',
        coust:  'Стоимость: 1 950 000 руб.',
        mortgage: 'В ипотеку: от 10 489 руб.',
        type: 'two-storey house',
        link: '6x6.html'
    },
    {
        img: './assets/pages/6x6-oneImage/__01_1.jpg',
        alt: 'twentyFirstTile',
        size: 'Размер: 6х6',
        square: 'Площадь: 36 м2',
        coust:  'Стоимость: 1 349 000 руб.',
        mortgage: 'В ипотеку: от 6 987 руб.',
        type: 'two-storey house',
        link: '6x6-one.html'
    },
    {
        img: './assets/img/twentySecondTile.webp',
        alt: 'twentySecondTile',
        size: 'Размер: 11х9',
        square: 'Площадь: 90 м2',
        coust:  'Стоимость: 3 239 000 руб.',
        mortgage: 'В ипотеку: от 18 001 руб.',
        type: 'cottage',
        link: '11x9.html'
    }
    
]


function createHouseElem () {
    itemsHouseField.innerHTML = itemsHouse
        .map(
            (task) => `
                <div class="thirdBlock__tile">
                    <img class="thirdBlock__tile-img" src=${task.img} alt=${task.alt}>
                    <div class="thirdBlock__tile-text">${task.size}</div>
                    <div class="thirdBlock__tile-text">${task.square}</div>
                    <div class="thirdBlock__tile-text">${task.coust}</div>
                    <div class="thirdBlock__tile-text">${task.mortgage}</div>
                    <a href=${task.link} class="thirdBlock__link">
                        <img src="./assets/icons/textSvg.svg" alt="link">
                    </a>
                </div>
            `
        )
        .join('')
}
const itemsBathhouseField = document.querySelector('.fourthBlock__tiles-inner')

let itemsBathhouse = [
    {
        img: './assets/img/twentyFourthTile.webp',
        alt: 'twentyFourthTile',
        size: 'Размер: 5х8.5',
        square: 'Площадь: 26 м2',
        coust:  'Стоимость: 1 320 000 руб.',
        type: 'bathhouse',
        link: '5x8-bath.html'
    } ,
    {
        img: './assets/img/twentyFifthTile.webp',
        alt: 'twentyFifthTile',
        size: 'Размер: 8х7',
        square: 'Площадь: 33 м2',
        coust:  'Стоимость: 1 740 000 руб.',
        type: 'bathhouse',
        link: '8x7-bath.html'
    } ,
    {
        img: './assets/img/twentySixthTile.webp',
        alt: 'twentySixthTile',
        size: 'Размер: 21х8',
        square: 'Площадь: 91 м2',
        coust:  'Стоимость: 4 710 000 руб.',
        type: 'bathhouse',
        link: '21x8.html'
    }
]


function createBathhouseElem () {
    itemsBathhouseField.innerHTML = itemsBathhouse
        .map(
            (task) => `
                <div class="fourthBlock__tile">
                    <img class="fourthBlock__tile-img" src=${task.img} alt=${task.alt}>
                    <div class="fourthBlock__tile-text">${task.size}</div>
                    <div class="fourthBlock__tile-text">${task.square}</div>
                    <div class="fourthBlock__tile-text">${task.coust}</div>
                    <a href=${task.link} class="fourthBlock__link">
                        <img src="./assets/icons/textSvg.svg" alt="link">
                    </a>
                </div>
            `
        )
        .join('')
}



const mediaQuerrymax480 = window.matchMedia('(max-width: 480px)')

if (mediaQuerrymax480.matches) {
    createHouseElem()
    createBathhouseElem()
}



//slider House

const slidesThirdBlock = document.querySelectorAll('.thirdBlock__tile')
const prevThirdBlock = document.querySelector('.thirdBlock__button-left')
const nextThirdBlock = document.querySelector('.thirdBlock__button-right')
const slidesWrapperThirdBlock = document.querySelector('.thirdBlock__tiles')
const slidesFieldThirdBlock = document.querySelector('.thirdBlock__tiles-inner')
let widthThirdBlock = window.getComputedStyle(slidesWrapperThirdBlock).width;

let slideIndexThirdBlock = 1;
let offsetThirdBlock = 0;

slidesFieldThirdBlock.style.width = 100 * slidesThirdBlock.length + (slidesThirdBlock.length * 20) + '%';
slidesFieldThirdBlock.style.display = 'flex';
slidesFieldThirdBlock.style.transition = "0.5s all"
slidesFieldThirdBlock.style.columnGap = '20px'


slidesWrapperThirdBlock.style.overflow = 'hidden'

slidesThirdBlock.forEach((slide) => {
    slide.style.width = widthThirdBlock;
});

widthThirdBlock = +widthThirdBlock.slice(0, widthThirdBlock.length - 2) + 20

nextThirdBlock.addEventListener('click', () => {
    if (offsetThirdBlock == widthThirdBlock * (slidesThirdBlock.length - 1)) {
        offsetThirdBlock = 0
    } else {
        offsetThirdBlock += widthThirdBlock
    }
    
    
    slidesFieldThirdBlock.style.transform = `translateX(-${offsetThirdBlock}px)`
})


prevThirdBlock.addEventListener('click', () => {
    
    if ( offsetThirdBlock == 0) {
        offsetThirdBlock = widthThirdBlock * (slidesThirdBlock.length - 1)
    } else {
        offsetThirdBlock -= widthThirdBlock
    }


    slidesFieldThirdBlock.style.transform = `translateX(-${offsetThirdBlock}px)`
})


// slider baths

const slidesFourthBlock = document.querySelectorAll('.fourthBlock__tile')
const prevFourthBlock = document.querySelector('.fourthBlock__button-left')
const nextFourthBlock = document.querySelector('.fourthBlock__button-right')
const slidesWrapperFourthBlock = document.querySelector('.fourthBlock__tiles')
const slidesFieldFourthBlock = document.querySelector('.fourthBlock__tiles-inner')
let widthFourthBlock = window.getComputedStyle(slidesWrapperFourthBlock).width;

let slideIndexFourthBlock = 1;
let offsetFourthBlock = 0;

slidesFieldFourthBlock.style.width = 100 * slidesFourthBlock.length + (slidesFourthBlock.length * 20) + '%';
slidesFieldFourthBlock.style.display = 'flex';
slidesFieldFourthBlock.style.transition = "0.5s all"
slidesFieldFourthBlock.style.columnGap = '20px'


slidesWrapperFourthBlock.style.overflow = 'hidden'

slidesFourthBlock.forEach((slide) => {
    slide.style.width = widthFourthBlock;
});

widthFourthBlock = +widthFourthBlock.slice(0, widthFourthBlock.length - 2) + 20

nextFourthBlock.addEventListener('click', () => {
    if (offsetFourthBlock == widthFourthBlock * (slidesFourthBlock.length - 1)) {
        offsetFourthBlock = 0
    } else {
        offsetFourthBlock += widthFourthBlock
    }
    
    
    slidesFieldFourthBlock.style.transform = `translateX(-${offsetFourthBlock}px)`
})


prevFourthBlock.addEventListener('click', () => {
    
    if ( offsetFourthBlock == 0) {
        offsetFourthBlock = widthFourthBlock * (slidesFourthBlock.length - 1)
    } else {
        offsetFourthBlock -= widthFourthBlock
    }


    slidesFieldFourthBlock.style.transform = `translateX(-${offsetFourthBlock}px)`
})

// open and close modal 

const slidesOpenModal = document.querySelectorAll('.fifthBlock__img')
const modal = document.querySelector('.modalImgSlider')
const buttonCloseModal = document.querySelector('.modalImgSlider__close')
const buttonMagnifyingGlass = document.querySelector('.modalImgSlider__magnifyingGlass')

modal.style.visibility = 'hidden'

slidesOpenModal.forEach(slide => {
    
    slide.addEventListener('click', () => {
        modal.style.visibility = 'visible'
    })
})

buttonCloseModal.addEventListener('click', () => {
    modal.style.visibility = 'hidden'
})


// zoom in / zoom out

// const slidesZoomModal = document.querySelectorAll('.modalImgSlider__img')

// slidesZoomModal.forEach(slide => {
//     slide.addEventListener('click', (e) => {
//         slide.addEventListener('mousemove', (e) => {
//             slide.style.width = '100%';
//             let zoomer = e.currentTarget;
//             e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
//             e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
//             x = offsetX/zoomer.offsetWidth*100
//             y = offsetY/zoomer.offsetHeight*100
//             zoomer.style.backgroundPosition = x + '% ' + y + '%';
//         })
//     })
// })

// modal img slider

const slidesModal = document.querySelectorAll('.modalImgSlider__img')
const prevModal = document.querySelector('.modalImgSlider__button-left')
const nextModal = document.querySelector('.modalImgSlider__button-right')

let slideIndex = 1;

showSlides(slideIndex)


function showSlides(n) {
    if (n > slidesModal.length) {
        slideIndex = 1
    } 

    if  (n < 1) {
        slideIndex = slidesModal.length
    }

    slidesModal.forEach( slide => slide.style.display = 'none')

    slidesModal[slideIndex - 1].style.display = 'block'

}
function plusSlides(n) {
    showSlides(slideIndex += n)
}

prevModal.addEventListener('click', function(){
    plusSlides(-1)
})


nextModal.addEventListener('click', function(){
    plusSlides(1)
})

//open and close selection menu

const buttonOpeningHouseSelectionMenu = document.querySelector('.fourthAndThirdBlockTogether__button');
const selectionMenu = document.querySelector('.fourthAndThirdBlockTogether__menu')

buttonOpeningHouseSelectionMenu.addEventListener('click', () => {
    if(selectionMenu.classList.contains('notVisible')){
        selectionMenu.classList.remove('notVisible')
        selectionMenu.classList.add('active')
    } else {
        selectionMenu.classList.remove('active')
        selectionMenu.classList.add('notVisible')
    }
})


//catalog of baths, houses

const allItemsField = document.querySelector('.fourthAndThirdBlockTogether__inner')
const allCatalog = [...itemsHouse, ...itemsBathhouse]

function createAllElem (arr) {
    allItemsField.innerHTML = arr
        .map(
            (task) => {
                if (Object.keys(task).length == 8) {
                    return `
                        <div class="fourthAndThirdBlockTogether__tile">
                            <img class="fourthAndThirdBlockTogether__tile-img" src=${task.img} alt=${task.alt}>
                            <div class="fourthAndThirdBlockTogether__tile-text">${task.size}</div>
                            <div class="fourthAndThirdBlockTogether__tile-text">${task.square}</div>
                            <div class="fourthAndThirdBlockTogether__tile-text">${task.coust}</div>
                            <div class="fourthAndThirdBlockTogether__tile-text">${task.mortgage}</div>
                            <a href=${task.link} class="fourthAndThirdBlockTogether__link">
                                <img src="./assets/icons/textSvg.svg" alt="link">
                            </a>
                        </div>
                    `
                } else if (Object.keys(task).length == 7){
                    return `
                        <div class="fourthAndThirdBlockTogether__tile">
                            <img class="fourthAndThirdBlockTogether__tile-img" src=${task.img} alt=${task.alt}>
                            <div class="fourthAndThirdBlockTogether__tile-text">${task.size}</div>
                            <div class="fourthAndThirdBlockTogether__tile-text">${task.square}</div>
                            <div class="fourthAndThirdBlockTogether__tile-text">${task.coust}</div>
                            <a href=${task.link} class="fourthAndThirdBlockTogether__link">
                                <img src="./assets/icons/textSvg.svg" alt="link">
                            </a>
                        </div>
                    `
                }
            } 
        )
        .join('')
}

createAllElem(allCatalog)


// redrawing a block with a menu

const selectionButtonsMenu = document.querySelector('.fourthAndThirdBlockTogether__menu')

selectionButtonsMenu.addEventListener('click', (e) => {

    let target = e.target;

    buttonOpeningHouseSelectionMenu.textContent = target.textContent
    selectionMenu.classList.remove('active')
    selectionMenu.classList.add('notVisible')


    allItemsField.innerHTML = allCatalog
        .map(
            (task) => {
                if (task.type === target.dataset.modal && target.dataset.modal != 'all') {
                    if (task.type === 'bathhouse') {
                        return `
                        <div class="fourthAndThirdBlockTogether__tile">
                            <img class="fourthAndThirdBlockTogether__tile-img" src=${task.img} alt=${task.alt}>
                            <div class="fourthAndThirdBlockTogether__tile-text">${task.size}</div>
                            <div class="fourthAndThirdBlockTogether__tile-text">${task.square}</div>
                            <div class="fourthAndThirdBlockTogether__tile-text">${task.coust}</div>
                            <a href=${task.link} class="fourthAndThirdBlockTogether__link">
                                <img src="./assets/icons/textSvg.svg" alt="link">
                            </a>
                        </div>
                    `
                    } else {
                        return `
                            <div class="fourthAndThirdBlockTogether__tile">
                                <img class="fourthAndThirdBlockTogether__tile-img" src=${task.img} alt=${task.alt}>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.size}</div>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.square}</div>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.coust}</div>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.mortgage}</div>
                                <a href=${task.link} class="fourthAndThirdBlockTogether__link">
                                    <img src="./assets/icons/textSvg.svg" alt="link">
                                </a>
                            </div>
                        `
                    } 
                } else if (target.dataset.modal == 'all') {
                    if (Object.keys(task).length == 8) {
                        return `
                            <div class="fourthAndThirdBlockTogether__tile">
                                <img class="fourthAndThirdBlockTogether__tile-img" src=${task.img} alt=${task.alt}>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.size}</div>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.square}</div>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.coust}</div>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.mortgage}</div>
                                <a href=${task.link} class="fourthAndThirdBlockTogether__link">
                                    <img src="./assets/icons/textSvg.svg" alt="link">
                                </a>
                            </div>
                        `
                    } else if (Object.keys(task).length == 7){
                        return `
                            <div class="fourthAndThirdBlockTogether__tile">
                                <img class="fourthAndThirdBlockTogether__tile-img" src=${task.img} alt=${task.alt}>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.size}</div>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.square}</div>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.coust}</div>
                                <a href=${task.link} class="fourthAndThirdBlockTogether__link">
                                    <img src="./assets/icons/textSvg.svg" alt="link">
                                </a>
                            </div>
                        `
                    }
                }
            }
        ).join('')    
})

// redrawing a block with a menu 1200px

const selectionButtonsMenu1200px = document.querySelector('.fourthAndThirdBlockTogether__menuWrapper')
const buttonsSelectionButtonsMenu1200px = document.querySelectorAll('.fourthAndThirdBlockTogether1200px__text')

selectionButtonsMenu1200px.addEventListener('click', (e) => {

    buttonsSelectionButtonsMenu1200px.forEach(button => {
        button.classList.remove('changesBg')
    })

    let target = e.target;

    target.classList.add('changesBg')


    allItemsField.innerHTML = allCatalog
        .map(
            (task) => {
                if (task.type === target.dataset.modal && target.dataset.modal != 'all') {
                    if (task.type === 'bathhouse') {
                        return `
                        <div class="fourthAndThirdBlockTogether__tile">
                            <img class="fourthAndThirdBlockTogether__tile-img" src=${task.img} alt=${task.alt}>
                            <div class="fourthAndThirdBlockTogether__tile-text">${task.size}</div>
                            <div class="fourthAndThirdBlockTogether__tile-text">${task.square}</div>
                            <div class="fourthAndThirdBlockTogether__tile-text">${task.coust}</div>
                            <a href=${task.link} class="fourthAndThirdBlockTogether__link">
                                <img src="./assets/icons/textSvg.svg" alt="link">
                            </a>
                        </div>
                    `
                    } else {
                        return `
                            <div class="fourthAndThirdBlockTogether__tile">
                                <img class="fourthAndThirdBlockTogether__tile-img" src=${task.img} alt=${task.alt}>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.size}</div>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.square}</div>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.coust}</div>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.mortgage}</div>
                                <a href=${task.link} class="fourthAndThirdBlockTogether__link">
                                    <img src="./assets/icons/textSvg.svg" alt="link">
                                </a>
                            </div>
                        `
                    } 
                } else if (target.dataset.modal == 'all') {
                    if (Object.keys(task).length == 8) {
                        return `
                            <div class="fourthAndThirdBlockTogether__tile">
                                <img class="fourthAndThirdBlockTogether__tile-img" src=${task.img} alt=${task.alt}>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.size}</div>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.square}</div>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.coust}</div>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.mortgage}</div>
                                <a href=${task.link} class="fourthAndThirdBlockTogether__link">
                                    <img src="./assets/icons/textSvg.svg" alt="link">
                                </a>
                            </div>
                        `
                    } else if (Object.keys(task).length == 7){
                        return `
                            <div class="fourthAndThirdBlockTogether__tile">
                                <img class="fourthAndThirdBlockTogether__tile-img" src=${task.img} alt=${task.alt}>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.size}</div>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.square}</div>
                                <div class="fourthAndThirdBlockTogether__tile-text">${task.coust}</div>
                                <a href=${task.link} class="fourthAndThirdBlockTogether__link">
                                    <img src="./assets/icons/textSvg.svg" alt="link">
                                </a>
                            </div>
                        `
                    }
                }
            }
        ).join('')    
})









