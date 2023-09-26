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
    console.log(e.target)
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
    console.log(target)
    if (e.target.classList.contains('fifthBlock__item-plus')) {
        if (e.target.classList.contains('rotate')) {
            e.target.nextElementSibling.style.maxHeight = '0px'
            e.target.classList.remove('rotate')
            console.log('good')
        } else {
            e.target.nextElementSibling.style.maxHeight = '190px'
            e.target.classList.add('rotate')
            console.log('good2')
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
        type: 'bathhouse'
    } ,
    {
        img: './assets/img/secondTile.webp',
        alt: 'secondTile',
        size: 'Размер: 7х7',
        square: 'Площадь: 82.4 м2',
        coust:  'Стоимость: 2 729 000 руб.',
        mortgage: 'В ипотеку: от 15 029 руб.',
        type: 'bathhouse'
    } ,
    {
        img: './assets/img/thirdTile.webp',
        alt: 'thirdTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/fourthTile.webp',
        alt: 'fourthTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/fifthTile.webp',
        alt: 'fifthTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/sixthTile.webp',
        alt: 'sixthTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/seventhTile.webp',
        alt: 'seventhTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/eighthTile.webp',
        alt: 'eighthTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/ninthTile.webp',
        alt: 'ninthTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/tenthTile.webp',
        alt: 'tenthTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/eleventhTile.webp',
        alt: 'eleventhTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/twelfthTile.webp',
        alt: 'twelfthTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/thirdteenthTile.webp',
        alt: 'thirdteenthTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/fourteenthTile.webp',
        alt: 'fourteenthTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/fifteenthTile.webp',
        alt: 'fifteenthTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/sixteenthTile.webp',
        alt: 'sixteenthTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/seventeenthTile.webp',
        alt: 'seventeenthTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/eigthteenthTile.webp',
        alt: 'eigthteenthTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/nineteenthTile.webp',
        alt: 'nineteenthTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/twentieth.webp',
        alt: 'twentieth',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/twentyFirstTile.webp',
        alt: 'twentyFirstTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/twentySecondTile.webp',
        alt: 'twentySecondTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
    },
    {
        img: './assets/img/twentyThirdTile.webp',
        alt: 'twentyThirdTile',
        size: 'Размер: 12х12',
        square: 'Площадь: 97 м2',
        coust:  'Стоимость: 3 685 000 руб.',
        mortgage: 'В ипотеку: от 20 600 руб.',
        type: 'cottage'
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
                    <a href="#" class="thirdBlock__link">
                        <img src="./assets/icons/textSvg.svg" alt="link">
                    </a>
                </div>
            `
        )
        .join('')
        console.log(itemsHouse)
}
const itemsBathhouseField = document.querySelector('.fourthBlock__tiles-inner')

let itemsBathhouse = [
    {
        img: './assets/img/twentyFourthTile.webp',
        alt: 'twentyFourthTile',
        size: 'Размер: 5х8.5',
        square: 'Площадь: 26 м2',
        coust:  'Стоимость: 1 320 000 руб.',
        type: 'bathhouse'
    } ,
    {
        img: './assets/img/twentyFifthTile.webp',
        alt: 'twentyFifthTile',
        size: 'Размер: 8х7',
        square: 'Площадь: 33 м2',
        coust:  'Стоимость: 1 740 000 руб.',
        type: 'bathhouse'
    } ,
    {
        img: './assets/img/twentySixthTile.webp',
        alt: 'twentySixthTile',
        size: 'Размер: 21х8',
        square: 'Площадь: 91 м2',
        coust:  'Стоимость: 4 710 000 руб.',
        type: 'bathhouse'
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
                    <a href="#" class="fourthBlock__link">
                        <img src="./assets/icons/textSvg.svg" alt="link">
                    </a>
                </div>
            `
        )
        .join('')
        console.log(itemsBathhouse)
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

console.log(slidesThirdBlock.length)

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

console.log(slidesFourthBlock.length)

let slideIndexFourthBlock = 1;
let offsetFourthBlock = 0;

slidesFieldFourthBlock.style.width = 100 * slidesFourthBlock.length + (slidesThirdBlock.length * 20) + '%';
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
const slidesWrapperModal = document.querySelector('.modalImgSlider')
const slidesFieldModal = document.querySelector('.modalImgSlider__field')
let widthModal = window.getComputedStyle(slidesWrapperModal).width;

console.log(slidesFourthBlock.length)

let slideIndexModal = 1;
let offsetModal = 0;

slidesFieldModal.style.width = 100 * slidesModal.length  + '%';
slidesFieldModal.style.transition = "0.0s all"
slidesFieldModal.style.columnGap = '20px'


slidesWrapperModal.style.visibility = 'hidden'

slidesModal.forEach((slide) => {
    slide.style.width = widthModal;
});

widthModal = +widthModal.slice(0, widthModal.length - 2) + 20

nextModal.addEventListener('click', () => {
    if (offsetModal == widthModal * (slidesModal.length - 1)) {
        offsetModal = 0
    } else {
        offsetModal += widthModal
    }
    
    
    slidesFieldModal.style.transform = `translateX(-${offsetModal}px)`
})


prevModal.addEventListener('click', () => {
    
    if ( offsetModal == 0) {
        offsetModal = widthModal * (slidesModal.length - 1)
    } else {
        offsetModal -= widthModal
    }


    slidesFieldModal.style.transform = `translateX(-${offsetModal}px)`
})





