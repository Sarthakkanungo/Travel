let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector('.search-bar-container');
let formbtn = document.querySelector('#login-btn');
let loginOpen = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let navOpen = document.querySelector('.navbar');
let menubtn = document.querySelector('#menu-bar');
let vidBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menubtn.classList.remove('fa-times');
    navOpen.classList.remove('active');
    loginOpen.classList.remove('active');
}

searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

})

menubtn.addEventListener('click', ()=>{
    menubtn.classList.toggle('fa-times');
    navOpen.classList.toggle('active');

})

formbtn.addEventListener('click', ()=>{ 
    loginOpen.classList.add('active');

})

formClose.addEventListener('click', ()=>{ 
    loginOpen.classList.remove('active');

})

vidBtn.forEach(btn => {
    btn.addEventListener('click' , ()=> {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute("data-src");
        document.querySelector('#video-slider').src = src;
    })
})

var swiper = new Swiper(".review-Slider", {
    spaceBetween: 20,
    loop: true,
    autoplay:{
        delay:2500,
        disableoOnInteraction : false,

    },

    breakpoints :{
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },

    }
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay:{
        delay:2500,
        disableoOnInteraction : false,

    },

    breakpoints :{
        450:{
            slidesPerView: 2,
        },
       
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        
        1200: {
            slidesPerView: 5,
        },

    },
});