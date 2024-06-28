/*=============== Add Box Shadow to Header ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER Js Form Home Page ===============*/
var swiper = new Swiper(".energy-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
    mousewheel: true,
    keyboard: true,
});

//Countdown
let valueDisplays = document.querySelectorAll('.num');
let interval = 10000;

valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue);

    let counter = setInterval(function(){
        startValue += 1;
        valueDisplays.textContent = startValue;

        if(startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

/*=============== SWIPER Js For About Page ===============*/
var swiper = new Swiper(".partner-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        250: {
            slidesPerView: 2,
        },
        380: {
            slidesPerView: 3,
        },
        450: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 5,
        },
    },
    mousewheel: true,
    keyboard: true,
});

/*=============== SWIPER Js For About Page ===============*/
var swiper = new Swiper(".team-slider", {
    effect: "coverflow",
    grabCursor: true,
    spaceBetween: 25,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        // stretch: -10,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});