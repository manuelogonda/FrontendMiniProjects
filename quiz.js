
const sampleQuestions = [
    {
        quiz: "Which method adds a new element at the end of an array?",
        choices: ["pop()","push()","shift()","unshift()"],
        answer: "push()"
    },
    {
    quiz: "How do you access the value of a property 'name' in this object: let user = { name: 'Alex' }?",
    choices: ["user.name", "user->name", "user[name]", "user::name"],
    answer: "user.name"
  },
  {
    quiz: "Which of these is not a JS primitive data type",
    choices: ["number", "string", "object", "null"],
    answer: "object"
  },
  {
    quiz: "What does `document.getElementById('demo')` do?",
    choices: [
      "Returns the element with ID 'demo'",
      "Creates a new element with ID 'demo'",
      "Deletes the element with ID 'demo'",
      "Changes the ID of an element to 'demo'"
    ],
    answer: "Returns the element with ID 'demo'"
  },
  {
    quiz: "Which of the following is a correct way to loop through all properties in an object?",
    choices: [
      "for (let key in obj)",
      "for (let i = 0; i < obj.length; i++)",
      "obj.forEach()",
      "obj.map()"
    ],
    answer: "for (let key in obj)"
  },
  {
    quiz: "Which DOM method creates a new HTML element in JavaScript?",
    choices: [
      "createElement()",
      "appendChild()",
      "getElementById()",
      "innerHTML()"
    ],
    answer: "createElement()"
  }
    
];

let score = 0;
let currentIndex = 0;

const nextBtn = document.getElementById("nextBtn");
const quizSection = document.getElementById("question");
const choicesArea = document.getElementById("choices");
const scoreDisplay = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");
const toggleBtn = document.getElementById("toggleBtn");


//toggle dark mode
toggleBtn.addEventListener('click', (e) => {
    const body = document.body;
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        toggleBtn.textContent = "Toggle Light Mode";
        
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        toggleBtn.textContent = "Toggle Dark Mode";
    }
});
//to restart the quiz
restartBtn.addEventListener('click', (e) => {
    score = 0;
    currentIndex = 0;
    scoreDisplay.innerHTML = "";
    nextBtn.style.display = "none";
    quizSection.textContent = "";
    showQuestion();
})



function showQuestion() {
    clearChoices();
    let currentQuestion = sampleQuestions[currentIndex];
    //quizSection accesses the first item in the array of sampleQuestions
    quizSection.textContent = currentQuestion.quiz;

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        button.addEventListener('click',()=>{
            checkAnswer(button, currentQuestion.answer)
        });
        choicesArea.appendChild(button)
    });
};

//to clear current questions choices
function clearChoices() {
    choicesArea.innerHTML = "";
    nextBtn.style.display = "none";
    restartBtn.style.display = "none";
    scoreDisplay.style.display = "none";

}

function checkAnswer(selectedBtn, correctAnswer) {
    const allButtons = document.querySelectorAll(".choice");
    allButtons.forEach(btn => {
        btn.disabled = true;
        if(btn.textContent === correctAnswer){
            btn.classList.add("correct");
        }else{
            btn.classList.add("wrong");
        }

    });
    if(selectedBtn.textContent === correctAnswer){
        score++;
    }
    nextBtn.style.display = "inline-block"

}


//nextbutton event
nextBtn.addEventListener('click',()=>{
    currentIndex++;
    if(currentIndex < sampleQuestions.length){
      showQuestion()
    }else{
        endQuiz();
    }
});
//function when the quiz ends  
function endQuiz() {
    quizSection.innerHTML = "Congrats Quiz Complete!";
    choicesArea.style.display = "none";
    nextBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
    scoreDisplay.style.display = "block";
    scoreDisplay.innerHTML = "Your final score is:" + score + "/" + sampleQuestions.length;
}
showQuestion();