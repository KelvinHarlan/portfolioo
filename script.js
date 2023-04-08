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
let index = 2;

let skillsName = ['bootstrap','Bulma & Sass', 'CSS', 'Express', 'Git', 'HTML', 'JavaScript', 'NodeJs', 'Python' ];

function skillsLogos(){
    let img = document.querySelector('.img-box img');
    img.src = `./imagens/0${index}.jpg`;
   
    /*insert name*/ 
    let insertName = document.querySelector('.skill-title');
    if(index <= 9){
        insertName.innerText =(skillsName[index -1])

    }
       /*insert logo*/
    if(index < 9){
        index +=1
       

    }
    else{
        index = 1;
        
    }
  
    
    
}setInterval(skillsLogos, 3000)

function left(){
    let img = document.querySelector('.img-box img');
    index > 1 ? img.src = `./imagens/0${index -=1}.jpg` : img.src = `./imagens/0${index =9}.jpg`;
   
}

function right(){
    let img = document.querySelector('.img-box img');
    index < 9 ? img.src = `./imagens/0${index +=1}.jpg` : img.src = `./imagens/0${index =1}.jpg`;
    
}