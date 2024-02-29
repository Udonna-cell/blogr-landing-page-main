let hamburger = document.querySelector("nav > div:first-child div.menu")
let menu = document.querySelector("nav > div:first-child menu")
let isMenuOpen = false

hamburger.addEventListener("click", ()=>{
    if(!isMenuOpen){
        hamburger.innerHTML = '<img src="./images/icon-close.svg" alt="icon-close">'
        menu.style = "display: block"
        isMenuOpen = true
    }else {
        hamburger.innerHTML = '<img src="./images/icon-hamburger.svg" alt="icon-hamburger">'
        menu.style = "display: none"
        isMenuOpen = false
    }
})