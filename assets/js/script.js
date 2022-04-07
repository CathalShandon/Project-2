// array of Questions and Answers.

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
    aswer : 'Chisinau'
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
var points = document.getElementById('answer');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

//Function to display questions
function displayQuestion() {
    for (var a=0; a<span.length;a++){
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
    if(i<questionBank.length-0)
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
// increament score for correct answers

function increamentScore(correctAnswerCount) {
    document.getElementById("right-answer").innerText = correctAnswerCount;
    score= score+1;
}

// increament score for wrong answers
function increamentWrongAnswer(wrongAnswerCount) {
    document.getElementById("wrong-answer").innerText = wrongAnswerCount;

}

/* final score box */

