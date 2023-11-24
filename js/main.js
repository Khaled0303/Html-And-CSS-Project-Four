let nav = document.querySelector("nav")
let bar = document.querySelector(".bar")
bar.addEventListener("click" , () =>{
    nav.classList.toggle("active")
    bar.classList.toggle("active")
    glass.classList.remove("active")
    form.classList.remove("active")
})
let glass = document.querySelector(".glass")
let form = document.querySelector("form")
glass.addEventListener("click" , () =>{
    glass.classList.toggle("active")
    form.classList.toggle("active")
    nav.classList.remove("active")
    bar.classList.remove("active")
})
window.addEventListener("scroll" , ()=>{
    nav.classList.remove("active")
    bar.classList.remove("active")
    glass.classList.remove("active")
    form.classList.remove("active")
})

// Nav Links
let links = document.querySelectorAll("nav a")
console.log(links)

links.forEach((link)=>{
    link.addEventListener("click" , ()=>{
        links.forEach((e)=>{
            e.classList.remove("active")
        })
        link.classList.add("active")
    })
})

// Button GoUp

let goUp = document.querySelector(".goUp")

window.onscroll = function(){
    if(window.scrollY > 300){
        goUp.classList.add("show")
    }else{
        goUp.classList.remove("show")
    }
}

goUp.addEventListener("click" , ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})