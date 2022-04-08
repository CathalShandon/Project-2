/* array of Questions and Answers.*/
let questionBank = [
    {
        question : 'What is the captial of France?',
        option : ['Luxemberg', 'Paris', 'Vienna', 'Glasglow'],
        answer : 'Paris'
    },
    {
        question : 'What is the captial of Croatia?',
        option : ['Lyon', 'Berlin', 'Zagreb', 'Moscow'],
        answer : 'Zagreb'
    },
    {
        question : 'What is the captial of Austria?',
        option : ['Vienna', 'Salzburg', 'Turin', 'Riga'],
        answer : 'Vienna'
    },
    {
        question : 'What is the captial of Moldova?',
        option : ['Balti', 'Sofia', 'Szeged', 'Chisinau'],
        answer : 'Chisinau'
    },
    {
        question : 'What is the captial of Ukraine?',
        option : ['Odesa', 'Angers', 'Kiev', 'Hamburg'],
        answer : 'Kiev'
    },
    {
        question : 'What is the captial of Greece?',
        option : ['Sarajevo', 'Zadara', 'Krakow', 'Athens'],
        answer : 'Athens'
    },
    {
        question : 'What is the captial of Bulgaria?',
        option : ['Plovdiv', 'Sofia', 'Bari', 'Burgos'],
        answer : 'Sofia'
    },
    {
        question : 'What is the captial of Portugal?',
        option : ['Porto', 'Lisbon', 'Vigo', 'Zaragoza'],
        answer : 'Lisbon'
    },
    {
        question : 'What is the captial of Switzerland?',
        option : ['Zurich', 'Hamburg', 'Bremen', 'Bern'],
        answer : 'Bern'
    },
    {
        question : 'What is the captial of Belgium?',
        option : ['Ghent', 'Brussels', 'Reims', 'Dresden'],
        answer : 'Brussels'
    },
    {
        question : 'What is the captial of Scotland?',
        option : ['Athens', 'Glasglow', 'Brest', 'Edinburgh'],
        answer : 'Edinburgh'
    },
    {
        question : 'What is the captial of Slovenia?',
        option : ['Bratislava', 'Ljubljana', 'Maribor', 'Graz'],
        answer : 'Ljubljana'
    },
    {
        question : 'What is the captial of Slovakia?',
        option : ['Eger', 'Bratislava', 'Linz', 'Split'],
        answer : 'Bratislava'
    },
    {
        question : 'What is the captial of Bosnia and Herzegovina?',
        option : ['Sarajeve', 'Tuzla', 'Debrecen', 'Presov'],
        answer : 'Sarajevo'
    },
    {
        question : 'What is the captial of North Macedonia?',
        option : ['Bitola', 'Durres', 'Tirana', 'Skopje'],
        answer : 'Skopje'
    },
    
    ];


var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

//Function to display questions
function displayQuestion() {
    for (var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    questionCount.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//Function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length){
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    } else {
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//Function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    } else {
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//Click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//Function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    
    for(var a=0;a<questionBank.length;a++) {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();

/**
 * Gets the current score from the DOM and increments it by 1
 */
 function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    
}
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    runGame(calculatedAnswer[1]);

}

/* Countdown timer */

/* Connected to the Reset button and reloads the page so the player can retsart the quiz and the timer.*/
function refresh(){
    window.location.reload("Refresh")
  }