const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEL = document.getElementById("question");

const formEl = document.getElementById("form");

const inputEl = document.getElementById("input");

const soreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0
}
questionEL.innerText =  `what is ${num1} multiply by ${num2} ?`

soreEl.innerText = `score: ${score}`


 const corectAns = num1 * num2;

formEl.addEventListener("submit",()=>{
    const userAns = +inputEl.value
    if(userAns === correctAns){
        score++
        UpdateLocalStorage()
    }else{
        score --;
        UpdateLocalStorage()
    }
});

function UpdateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(sco))
}

