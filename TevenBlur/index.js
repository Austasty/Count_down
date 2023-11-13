const imageEl = document.getElementById("bg-image")

window.addEventListener("scroll",()=>{
    updateimage()
})

function updateimage(){
    imageEl.style.opacity = 1 - window.pageYOffset / 900
    imageEl.style.backgroundSize = 160 - window.pageYOffset /12 + "%"
}