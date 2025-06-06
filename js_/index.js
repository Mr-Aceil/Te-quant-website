const  nav_menu_button= document.getElementById("nav_menu_button")
const menu_content= document.getElementById("menu_content")
const nav_pages= document.getElementById("nav_pages")
let menu_open= false

nav_menu_button.addEventListener ("click", function(){    
    menu_content.classList.toggle("hide")
})


if (nav_pages.style.display==="flex"){
    menu_content.style.display="none"
}