function menuOption() {
    let menuIcon = document.querySelector('.menu-option a');
    let itens = document.querySelector('.navbar .itens');
    if (itens.style.display == 'none' || itens.style.display == '') {
        itens.style.display = 'block';
        menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';


    }
    else if (itens.style.display == 'block') {
        itens.style.display = 'none';
        menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';


    }

}
let index = 1;
const skillCount = 9;
const intervalTime = 3000;
const imagePath = './imagens/';

const skillsName = [
    'Bootstrap',
    'Bulma & Sass',
    'CSS',
    'Express',
    'Git',
    'HTML',
    'JavaScript',
    'NodeJs',
    'Python'
];

function setSkillLogo() {
    const img = document.querySelector('.img-box img');
    img.src = `${imagePath}0${index}.jpg`;
}

function setSkillName() {
    const skillTitle = document.querySelector('.skill-title');
    const skillIndex = index - 1;
    if (skillIndex >= 0 && skillIndex < skillsName.length) {
        skillTitle.innerText = skillsName[skillIndex];
    }
}

function circleSelected() {
    const circles = document.querySelectorAll('.selected');
    const circle = document.querySelector(`.selectedContainer .selected-${index}`)
    for (i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = 'transparent';
    }
    circle.style.backgroundColor = '#a200ff';
}


function changeSkillLogo(direction) {
    index += direction;
    if (index < 1) {
        index = skillCount;
    } else if (index > skillCount) {
        index = 1;
    }
    setSkillLogo();
    setSkillName();
    circleSelected();
}

function left() {
    changeSkillLogo(-1);
}

function right() {
    changeSkillLogo(1);
}

setInterval(function () {
    changeSkillLogo(1);
}, intervalTime);





/*Functttion observer Itens*/

const observer = new IntersectionObserver(entries =>{
    entries[0].target.classList.add('init-hidden-off')
},{
    threshold: 1
})

Array.from(document.querySelectorAll('.init-hidden')).forEach(element =>{
    observer.observe(element);
})