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
var score = document.getElementById("score");
scoreCount = 0
var initialTextBox = document.getElementById("initialTextBox")
var gameover = document.getElementById("gameover");


questions.classList.add("hide");
totalScore.classList.add("hide");
notify.classList.add("hide");
questions2.classList.add("hide");
questions3.classList.add("hide");
correct.classList.add("hide");
wrong.classList.add("hide");
initials.classList.add("hide");
initialTextBox.classList.add("hide");
gameover.classList.add("hide");

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
        wrong.classList.add("hide");
        scoreCount = scoreCount + 30; 
        score.textContent = "Score: " + scoreCount;



    }
    else {
        console.log("wrong")
        notify.classList.remove("hide");
        correct.classList.add("hide");
        wrong.classList.remove("hide"),
        timeLeft = timeLeft - 5;
        scoreCount = scoreCount - 5; 
        score.textContent = "Score: " + scoreCount;


    }
    setInterval ( function () {
        notify.classList.add("hide");

    }, 800); 
    
    nextQuestion2()
}

function nextQuestion2 () {
    console.log("started next question 1");
    // after the button is clicked then we start our timer
    // countdown();
    welcome.classList.add("hide");
    questions.classList.add("hide");
    questions2.classList.remove("hide");
    

    // how we capture the USER INPUT/choice
    questionAnswer2.addEventListener('click', function(event) {
        
        console.log("Target: ", event.target);
        
        console.log("Content: ", event.target.textContent);
        var userAnswer2 = event.target.textContent;

        
        // now we have to compare their answer with the correct one(?)

        // we would have to PASS the data to another function
        compareAnswers2(userAnswer2)
    })
}

function compareAnswers2(choice2) {
    console.log("Data: ", choice2);


    // here is our compare logic
    // if() statement

    if (choice2 === " 2. console.log ") {
        console.log("correct")
        notify.classList.remove("hide");
        correct.classList.remove("hide");
        wrong.classList.add("hide");
        scoreCount = scoreCount + 30; 
        score.textContent = "Score: " + scoreCount;


    }
    else {
        console.log("wrong")
        notify.classList.remove("hide");
        wrong.classList.remove("hide");
        correct.classList.add("hide");
        timeLeft = timeLeft - 5;
        scoreCount = scoreCount - 5; 
        score.textContent = "Score: " + scoreCount; 
        
    }
    setInterval ( function () {
        notify.classList.add("hide");

    }, 800); 
    
    nextQuestion3 ()
    }


function nextQuestion3 () {
    console.log("started next question 3");
    // after the button is clicked then we start our timer
    // countdown();
    welcome.classList.add("hide");
    questions.classList.add("hide");
    questions2.classList.add("hide");
    questions3.classList.remove("hide");
    // notify.classList.add("hide")

    // how we capture the USER INPUT/choice
    questionAnswer3.addEventListener('click', function(event) {
        
        console.log("Target: ", event.target);
        
        console.log("Content: ", event.target.textContent);
        var userAnswer3 = event.target.textContent;

        
        // now we have to compare their answer with the correct one(?)

        // we would have to PASS the data to another function
        compareAnswers3(userAnswer3)
    })
}

function compareAnswers3(choice3) {
    console.log("Data: ", choice3);


    // here is our compare logic
    // if() statement

    if (choice3 === " 3. Array ") {
        console.log("correct")
        notify.classList.remove("hide");
        correct.classList.remove("hide");
        wrong.classList.add("hide");
        scoreCount = scoreCount + 30 + 10; 
        score.textContent = "Score: " + scoreCount;
        console.log(scoreCount)


    }
    else {
        console.log("wrong")
        notify.classList.remove("hide");
        wrong.classList.remove("hide");
        correct.classList.add("hide");
        timeLeft = timeLeft - 5;
        scoreCount = scoreCount - 5; 
        score.textContent = "Score: " + scoreCount;

    }

    setInterval ( function () {
        notify.classList.add("hide");

    }, 1000); 

    conatainer.classList.add("hide");
    gameover.classList.remove("hide");

}



var timeLeft = 60;

function countdown() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Time Left: " + timeLeft;
        
        if (timeLeft === 0) {
            conatainer.classList.add("hide");
            gameover.classList.remove("hide");
            clearInterval(timeInterval);
            timer.textContent = " ";
        }

    }, 1000);
}

// this is calling a function
//countdown();

    


