let accCont = document.querySelector('.container__content')

let plus = document.querySelector('.plus').onclick = function (){

    accCont.classList.toggle('show');
    if(this.classList.contains('plus')){
        this.classList.remove('plus');
        this.classList.add('plus-active')
    } else{
        this.classList.add('plus');
        this.classList.remove('plus-active')
    }
}

let navMenu = document.querySelector('.nav-menu')

let navBtn = document.querySelector('.nav-btn').onclick = function (){
    navMenu.classList.toggle('show-nav-mobile')
}