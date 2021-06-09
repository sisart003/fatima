const nav = document.querySelector('.nav-bar')
const carret = document.querySelector('.carret-up')
const res_nav = document.querySelector('.responsive')
const res_icon = document.querySelector('.res-icon')

window.addEventListener('scroll', navEffect)
window.addEventListener('scroll', carretUp)
res_nav.addEventListener('click', navDrop)

function navEffect(){

    if(window.scrollY > nav.offsetHeight + 300){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }

}

function carretUp(){
    if(window.scrollY > carret.offsetHeight + 300){
        carret.style.display = "block"
    }else{
        carret.style.display = "none"
    }
}

function navDrop(){
    res_icon.classList.toggle('resactive')
}