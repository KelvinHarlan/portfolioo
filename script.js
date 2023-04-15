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
const skillCount = 12;
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
    'Python',
    'Reactjs',
    'TypeScript',
    'React Native'
];
/* Funcao para substituir as imagens das skills */

function setSkillLogo() {
    const img = document.querySelector('.img-box img');
    img.src = `${imagePath}0${index}.jpg`;
}

/* Funcao para mudar o nome das tecnologias nas skills */

function setSkillName() {
    const skillTitle = document.querySelector('.skill-title');
    const skillIndex = index - 1;
    if (skillIndex >= 0 && skillIndex < skillsName.length) {
        skillTitle.innerText = skillsName[skillIndex];
    }
}
/* Funcao para alterar o circulo, representado pela posicao da imagem*/

function circleSelected() {
    const circles = document.querySelectorAll('.selected');
    const circle = document.querySelector(`.selectedContainer .selected-${index}`)
    for (i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = 'transparent';
    }
    circle.style.backgroundColor = '#a200ff';
}

/*Funcao para mudar as  imagens das skills*/

function changeSkillLogo(direction) {
    index += direction;
    if (index < 1) {
        index = skillCount;
    } else if (index > skillCount) {
        index = 1;
    }
    try {
        setSkillLogo();
        setSkillName();
        circleSelected();
    } catch {
        false
    }
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

/*Funcao para observar os itens*/

const observer = new IntersectionObserver(entries => {
    entries[0].target.classList.add('init-hidden-off')
}, {
    threshold: 1
})
Array.from(document.querySelectorAll('.init-hidden')).map(element => {
    observer.observe(element);
});


/* Projetos */
const projects = [
    {
        id: 0,
        name: 'PokéDex',
        image: 0,
        typeImage:'png',
        link:'#'
    },
    {
        id: 1,
        name: 'API-Fimes',
        image: 1,
        typeImage:'png',
        link: '#'
    },
    {
        id: 2,
        name: 'Calcular Nota',
        image: 2,
        typeImage:'png',
        link: '#'
    },
    {
        id: 3,
        name: 'Aguarde',
        image: `breve`,
        typeImage:'png',
        link: '#'
    },
    {
        id: 4,
        name: 'Aguarde',
        image: `breve`,
        typeImage:'png',
        link: '#'
    },
    {
        id: 5,
        name: 'Aguarde',
        image: `breve`,
        typeImage:'png',
        link: '#'
    },
  

];

/* Renderizando projetos em tela */

function startProject() {
    let card = document.querySelector('.project-list');
    projects.map( function (el, i ){
        
        const id = projects[i].id +1;
        const name = projects[i].name;
        const image = projects[i].image;
        const link = projects[i].link;
        const type = projects[i].typeImage;
       

    card.innerHTML += `
    <li>
    <div class = "card-project">
        <div class="project-id">#0${id}</div>
        <h2>${name}</h2>
        <img src="./imagens/imagensProjeto/${image}.${type}" alt="imagem projeto">
        <div class="view-project-option">
            <a src="${link}"><i class="fa-solid fa-eye"></i></a>
        </div>
    </div>
    </li>`
    });
    
}
startProject()


