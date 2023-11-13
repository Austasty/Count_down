const textAreaEl = document.getElementById("textarea")
const totalEl = document.getElementById("total-counter")
const remainingEl = document.getElementById("remaining-counter")
const finishEl = document.getElementById("finish")

textAreaEl.addEventListener("keyup",() =>{
    means()
    
})

means()


function means (){
   
    totalEl.innerText =textAreaEl.value.length
    remainingEl.innerText = textAreaEl.getAttribute("maxlength") -textAreaEl.value.length
}
pinned()
let a = ""
function pinned() {
    if (remainingEl === 50 && totalEl === 0) {
        a = finishEl
    } else (remainingEl === 0 && totalEl === 50); {
        finishEl.innerText = ("no more sections")
    } 
    
}







