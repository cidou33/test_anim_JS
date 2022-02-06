let bodyBox = document.querySelector('.body');
let clownBox = document.querySelector('.clown');
let bulleBox = document.querySelector('.bulle');
let textBox = document.querySelector('.textBulle');
let btn = document.querySelector('.btnBurger');
let midBox = document.querySelector('.midStick');
let topBox = document.querySelector('.topStick');
let bottomBox = document.querySelector('.bottomStick');
let textParagraph = document.querySelector('.paragraph p');
let liBox = document.querySelectorAll('.liHidden');
let menuBurgerBox = document.querySelectorAll('.liBurger');

function moveLelft() {

            clownBox.classList.toggle('clownHidden');
            bulleBox.classList.toggle('bulle');
            textBox.classList.toggle('textBulleHidden');
            midBox.classList.toggle('midStick');
            topBox.classList.toggle('topStick');
            bottomBox.classList.toggle('bottomStick');
            textParagraph.classList.toggle('textParagraphHidden');
            bodyBox.classList.toggle('bodyHidden');
            liBox.forEach(element => {
                element.classList.toggle('liBlock');
            });
            menuBurgerBox.forEach(element => {
                element.classList.toggle('liBurgerHidden')
            });
};



btn.addEventListener('click', moveLelft);