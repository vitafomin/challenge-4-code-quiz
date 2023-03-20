// making variables that are taking a reference to certain elements
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
var highscores = document.getElementById("highscores");
var initialInput = document.getElementById("initialInput");
var userValue = document.getElementById("userValue");


// adding and removing classes to different varibale
questions.classList.add("hide");
totalScore.classList.add("hide");
notify.classList.add("hide");
questions2.classList.add("hide");
questions3.classList.add("hide");
correct.classList.add("hide");
wrong.classList.add("hide");
initialTextBox.classList.add("hide");
gameover.classList.add("hide");
highscores.classList.add("hide");


// this is the click event, and it will execute the function "startQuiz"
startBtn.addEventListener("click", startQuiz) 


// the function that will be executed when the click event occurs
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

        
        // now we have to compare their answer with the correct one
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
    var notifyInterval = setInterval ( function () {
        notify.classList.add("hide");
        clearInterval(notifyInterval);
        nextQuestion2()
    }, 1000); 
    
}

// function of the second question of the quiz 
function nextQuestion2 () {
    console.log("started next question 1");
  
    
    welcome.classList.add("hide");
    questions.classList.add("hide");
    questions2.classList.remove("hide");
    

    // how we capture the USER INPUT/choice
    questionAnswer2.addEventListener('click', function(event) {
        
        console.log("Target: ", event.target);
        
        console.log("Content: ", event.target.textContent);
        var userAnswer2 = event.target.textContent;

        
        // now we have to compare their answer with the correct one
        // we would have to PASS the data to another function
        compareAnswers2(userAnswer2)
    })
}

// now we need to compare user answer to the correct answer
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
    var notifyInterval = setInterval ( function () {
        notify.classList.add("hide");
        clearInterval(notifyInterval);
        nextQuestion3 ()
    }, 1000); 
    
    }

// the third and final question that is being asked in the quiz 
function nextQuestion3 () {
    console.log("started next question 3");
   
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

        
        // now we have to compare their answer with the correct one

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

    var notifyInterval = setInterval ( function () {
        console.log("interval log");
        notify.classList.add("hide");
        clearInterval(notifyInterval);
        endgame()
    }, 1000); 
}


//our final function of our code that ends the quiz
function endgame () {
    console.log("endgame log");
    conatainer.classList.add("hide");
    gameover.classList.remove("hide");

    var endgameInterval = setInterval( function () {
        gameover.classList.remove("hide");
        clearInterval(endgameInterval)
        getScores();
    }, 1000);
    

}

function getScores () {

    initialTextBox.classList.remove("hide");
    gameover.classList.add("hide");
    
    initials.addEventListener ("click", function () {
        initialTextBox.classList.add("hide");
        highscores.classList.remove("hide");
       
        var user = {
            initial: initialInput.value,
            score: scoreCount
        };
        localStorage.setItem(initialInput.value, JSON.stringify(user));
        applyScores();
    }) 

}

function  applyScores() {
    var user = {
        initial: initialInput.value,
        score: scoreCount
    };
    var lastScore = JSON.parse(localStorage.getItem("user"));
    console.log(user)


    // if (lastScore !== null) {
    //     userVlaue.textContent = user.initial + " - " + user.score
    // };
    var length = localStorage.length;

    for (var i = 0; i < length; i++) {
        var user = JSON.parse(localStorage.key(i));
        console.log(user);

        userValue.textContent = user.initial + " - " + user.score
    };
}



// this variable is in the global scope so other functions can use it as well
var timeLeft = 30;

// this is the countdown function that starts our timer when the quiz has started
function countdown() {
    var timeInterval = setInterval(function () {

        timer.textContent = "Time Left: " + timeLeft;
        timeLeft--;
        
        if (timeLeft === 0) {
            conatainer.classList.add("hide");
            gameover.classList.remove("hide");
            clearInterval(timeInterval);
            timer.textContent = " ";
        }

    }, 1000);
}



    


