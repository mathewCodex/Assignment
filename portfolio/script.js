"use strict";

//onmouseover..

const navSlide = () => {
     const burger = document.querySelector('.burger');
     const nav = document.querySelector('.nav-links');
     const navLinks = document.querySelector(' li');

     
     burger.addEventListener('click', () => {
   //toggle nav
        nav.classList.toggle('nav-active');

          console.log('ckicked')
    

 
    });
}

navSlide();