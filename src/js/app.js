import * as jsFunctions from "./modules/functions.js";

jsFunctions.isWebp();

let header = document.querySelector('.header__menu');
// let height = 450;
let headerContent = document.querySelector('.header__content')
// let entireHeader = document.querySelector('.header');
window.addEventListener('scroll', () => {
    let scrollHeight = window.scrollY;
    if (scrollHeight >= 450) {
        console.log(scrollHeight);
        header.classList.add('header-fixed-scroll');
        headerContent.style.paddingTop = `${header.offsetHeight * 2}px`;
        // console.log(header.offsetHeight);
    } else {
        header.classList.remove('header-fixed-scroll');
        headerContent.style.paddingTop = null;
    }
})

let select = document.querySelector('.create-tour__select');
select.addEventListener('change', () => {
    select.style.color = 'black';
})