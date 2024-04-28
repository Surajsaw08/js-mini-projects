const questions =[

  {
    question :"Which is the largest animal in the world?",
    answers:[
      {text:"Shark" ,correct:"false"},
      {text:"Blue Wheale" ,correct:"true"},
      {text:"Elephent" ,correct:"false"},
      {text:"Girrafe" ,correct:"false"},
    ]
  },
  {
    question :"Which is the largest ocean in the world?",
    answers:[
      {text:"Atlantic Ocean" ,correct:"false"},
      {text:"Indian Ocean" ,correct:"false"},
      {text:"Arctic Ocean" ,correct:"false"},
      {text:"Pacific Ocean" ,correct:"true"},
    ]
  },
  {
    question :"Which planet is known as red planet?",
    answers :[
      {text:"Venus" ,correct:"false"},
      {text:"Mars" ,correct:"true"},
      {text:"Jupiter" ,correct:"false"},
      {text:"Saturn" ,correct:"false"},
    ]
  },
  {
    question :"Which continent is the most populous?",
    answers:[
      {text:"Asia" ,correct:"true"},
      {text:"Africa" ,correct:"false"},
      {text:"Europe" ,correct:"false"},
      {text:"North America" ,correct:"false"},
    ]
  },
];


const questionElement =document.getElementById("question")
const answerButton =document.getElementById("answer-button")
const nextButton =document.getElementById("next-btn")

let questionindex =0;
let score =0;

function Startquiz(){
  questionindex =0;
  score=0;
  nextButton.innerHTML="next";
  showquestion();
}

function showquestion(){
  resetstate();
  let currquestion = questions[questionindex];
  let questionNo = questionindex+1;
  questionElement.innerHTML= questionNo +". "+currquestion.question;

  currquestion.answers.forEach(answer =>{
    const button =document.createElement("button");
    button.innerHTML =answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button)

    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectanswer)
  });
}


function  resetstate(){
  nextButton.style.display="none"
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild)
  }
}

function selectanswer(e){
  const selectedbtn = e.target;
  const iscorrect =selectedbtn.dataset.correct === "true";

  if(iscorrect){
    selectedbtn.classList.add("correct");
    score++;
  }else{
    selectedbtn.classList.add("incorrect")
  }

  Array.from(answerButton.children).forEach(button =>{
    if(button.dataset.correct ==="true"){
      button.classList.add("correct")
    }
    button.disabled ="true";
  })
  nextButton.style.display="block"
}

function showscore(){
  resetstate();
    questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML="Play again";
    nextButton.style.display ="block"
}

function handlenextButton(){
  questionindex++;
  if(questionindex < questions.length){
    showquestion();
  }
  else{
    showscore();
  }
}



nextButton.addEventListener("click", ()=>{
  if(questionindex < questions.length){
    handlenextButton();
  }
  else{
    Startquiz()
  }
})

