var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("timer");
var startButtonEl = document.getElementById("startQ");
var timeLeftEl = 60;
var questionAnswers = document.getElementById("questionAnswers");
var userScore = document.getElementById("score");
var totalScore = document.getElementById("totalScore");
var qIndex = 0;
var userScore = 0;
var totalScore = document.getElementById("totalScore");
var score = document.getElementById("score");

var questionsIndex = [
        {
            question1: "What is NOT a commonly used primative data type: ",
    
            options: ["numbers", "booleans", "alerts", "strings"],
    
            answer: "alerts"
    
        },
        {
            question1: "What tool is used for debugging, that prints to the console of the browser",
    
            options: ["var =", "console.log", "html", "for loops"],
    
            answer: "console.log",
    
        },
        {
            question1: "What is one comlpex data type",
    
            options: ["VS Code", "Element", "Flex Direction", "Array"],
    
            answer: "Array",
        },
    ];
startButtonEl.addEventListener("click", startQuiz);
function startQuiz (){

}


