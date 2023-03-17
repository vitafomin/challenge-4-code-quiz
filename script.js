var timer = document.getElementById("timer");
var conatainer = document.querySelector(".container");
var quizChallenge = document.querySelector(".codeQuiz");
var welcome = document.getElementById("welcomingTag");
var startBtn = document.getElementById("startQ");
var questions = document.getElementById("questions");
var questionText = document.getElementById("questionText");
var questionAnswer = document.getElementById("questionAnswers");
var questions2 = document.getElementById("questions2");
var questionText2 = document.getElementById("questionText2");
var questionAnswer2 = document.getElementById("questionAnswers2");
var questions3 = document.getElementById("questions3");
var questionText3 = document.getElementById("questionText3");
var questionAnswer3 = document.getElementById("questionAnswers3");
var notify = document.getElementById("notify");
var totalScore = document.getElementById("totalScore");
var score = document.getElementById("score");
var initials = document.getElementById("nameSubmit");
var notify = document.getElementById("notify");
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");



questions.classList.add("hide");
totalScore.classList.add("hide");
notify.classList.add("hide");
questions2.classList.add("hide");
questions3.classList.add("hide");
correct.classList.add("hide");
wrong.classList.add("hide");

startBtn.addEventListener("click", startQuiz) 


function startQuiz () {
    console.log("started quiz");
    // after the button is clicked then we start our timer
    countdown();
    welcome.classList.add("hide");
    questions.classList.remove("hide");

    // how we capture the USER INPUT/choice
    questionAnswer.addEventListener('click', function(event) {
        
        console.log("Target: ", event.target);
        
        console.log("Content: ", event.target.textContent);
        var userAnswer = event.target.textContent;

        
        // now we have to compare their answer with the correct one(?)

        // we would have to PASS the data to another function
        compareAnswers(userAnswer)
    })
}
// we need a function to compare our users answer to the correct one

function compareAnswers(choice) {
    console.log("Data: ", choice);


    // here is our compare logic
    // if() statement

    if (choice === " 2. Alerts ") {
        console.log("correct")
        notify.classList.remove("hide");
        correct.classList.remove("hide");



    }
    else {
        console.log("wrong")
        notify.classList.remove("hide");
        wrong.classList.remove("hide"),
        timeLeft = timeLeft - 5;

    }
}




   

var timeLeft = 60;

function countdown() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Time Left: " + timeLeft;
        
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timer.textContent = " ";
        }

    }, 1000);
}

// this is calling a function
//countdown();

    


