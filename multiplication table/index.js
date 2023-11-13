const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.getElementById('question')

questionEl.innerText = `what is ${num1} multiply by ${num2}?`
const scoreEl = document.getElementById('score')
const inputEl = document.getElementById('input')

const formEl = document.getElementById('form')

let score = JSON.parse(localStorage.getItem('score'))
if (!score) {
    score = 0;
}

scoreEl.innerText = `score: ${score}`


const correctAns = num1 * num2;
formEl.addEventListener('submit', ()=>{
    const userAns = +inputEl.value
    if (userAns === correctAns) {
      score++  
      udateLocalStorage()
    }else{
        score--
        udateLocalStorage()
    }
});

function udateLocalStorage(params) {
    localStorage.setItem('score', JSON.stringify(score))
}

