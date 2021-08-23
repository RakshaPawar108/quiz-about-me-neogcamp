const readLineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
var userName = readLineSync.question(chalk.bgYellow("What is your name? \n"));

console.log(chalk.cyan.bold("Welcome " + userName + " to A QUIZ ABOUT RAKSHA!"));

function playQuiz(ques, ans) {
  var userAnswer = readLineSync.question(ques);

  if (userAnswer.toUpperCase() === ans.toUpperCase()) {
    console.log(chalk.greenBright("Right!"));
    score += 1;
  } else {
    console.log(chalk.redBright("Wrong!"));
  }
  console.log("Current Score: ", score)
  console.log("--------------------")
}

var questions = [
  {
    question: "Where do I live? ",
    answer: "Pune"
  }, 
  {
    question: "What is the thing I love the most? ",
    answer: "Books"
  },
  {
    question: "Where do I work? ",
    answer: "TCS"
  }, 
  {
    question: "What is my favourite food? ",
    answer: "Pizza"
  },
  {
    question: "What is my favourite domain in CS?",
    answer: "Web Development"
  }
  
]

function game() {
  for(var i=0; i < questions.length; i++){
    var currQues = questions[i];
    playQuiz(currQues.question, currQues.answer);
  }
}

function displayScores(){
  console.log(chalk.magentaBright("YAYYY!!! You scored "+ score))
}

game()
displayScores()





