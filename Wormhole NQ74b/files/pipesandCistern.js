const questions = [
    {
        serial: 1,
        que: "A pipe can fill a tank in 8 hours. Another pipe can empty the same tank in 12 hours. If both pipes are opened simultaneously, how long will it take to fill the tank?",
        ans: 2,
        option: [
            "4 hours",
            "24 hours",
            "16 hours",
            "20 hours"]
    },
    {
        serial: 2,
        que: "Pipe A can fill a tank in 10 hours, and pipe B can fill the same tank in 15 hours. If both pipes are opened simultaneously, how long will it take to fill the tank?",
        ans: 3,
        option: [
            "4 hours",
            "6 hours",
            "3 hours",
            "5 hours"]
    },
    {
        serial: 3,
        que: "A cistern can be filled by three pipes A, B, and C in 6 hours. After working for 2 hours, pipe C is turned off. How long will it take for the remaining pipes A and B to fill the cistern?",
        ans: 1,
        option: [
            "4 hours",
            "3 hours",
            "2 hours",
            "5 hours"]
    },
    {
        serial: 4,
        que: "Pipe P can fill a tank in 8 hours, and pipe Q can fill the same tank in 12 hours. If pipe P is opened for 2 hours and then pipe Q is also opened, how long will it take to fill the tank?",
        ans: 2,
        option: [
            "4 hours",
            "6 hours",
            "8 hours",
            "10 hours"]
    },
    {
        serial: 5,
        que: "Pipe X can fill a tank in 6 hours, and pipe Y can fill the same tank in 8 hours. If both pipes are opened simultaneously, after how much time should pipe X be closed to fill the tank in 4 hours?",
        ans: 4,
        option: [
            "1 hour",
            "2 hours",
            "3 hours",
            "4 hours"]
    },
    {
        serial: 6,
        que: "Pipe A can fill a tank in 15 hours, and pipe B can empty the same tank in 10 hours. If both pipes are opened simultaneously, how long will it take to fill the tank?",
        ans: 3,
        option: [
            "6 hours",
            "8 hours",
            "10 hours",
            "12 hours"]
    },
    {
        serial: 7,
        que: "Pipe M can fill a tank in 18 hours, and pipe N can fill the same tank in 12 hours. If both pipes are opened simultaneously, how long will it take to fill half of the tank?",
        ans: 1,
        option: [
            "4 hours",
            "6 hours",
            "8 hours",
            "9 hours"]
    },
    {
        serial: 8,
        que: "Pipe W can fill a tank in 20 hours, and pipe X can fill the same tank in 15 hours. If both pipes are opened simultaneously, how long will it take to fill the tank?",
        ans: 2,
        option: [
            "6 hours",
            "8 hours",
            "10 hours",
            "12 hours"]
    },
    {
        serial: 9,
        que: "Pipe Y can fill a tank in 25 hours, and pipe Z can empty the same tank in 20 hours. If both pipes are opened simultaneously, how long will it take to fill the tank?",
        ans: 4,
        option: [
            "15 hours",
            "18 hours",
            "20 hours",
            "24 hours"]
    }
]

// Hide the initial main container
document.querySelector(".main-container").style.display = "none";

// DOM elements for quiz functionality
let nextButton = document.querySelector('.btn5');
let option1 = document.querySelector('.btn1');
let option2 = document.querySelector('.btn2');
let option3 = document.querySelector('.btn3');
let option4 = document.querySelector('.btn4');
let timer = document.getElementById('timer');
let score = document.querySelector('#score');
let calculateScore = 0;
let calculateAttempted = 0;
let correctAnswers = document.querySelector('#correctAnswers');
let wrongAttemps = document.querySelector('#wrongAttemps');
let timeTaken = document.querySelector('#timeTaken');
let totalAttempted = document.querySelector('#totalAttempted');
let timerCounter = document.getElementById("timeTaken");
let globalCounter = 0;
let i = 0;
let timeleft;
let timeinterval;

// Function to start the timer
function startTimer(duration) {
    timeleft = duration;
    timer.textContent = `${timeleft}`;
    timeleft--;
    timeinterval = setInterval(updatetime, 1000);
}

// Function to update the timer
function updatetime() {
    if (timeleft > 0) {
        globalCounter++;
        timer.textContent = `${timeleft}`;
        timeleft--;
    } else {
        clearInterval(timeinterval);
        timer.innerHTML = `times up`;
    }
}

let questionContainer = document.querySelector('.question-container');
let originalBackgroundColor = option1.style.backgroundColor;
let originalColor = option1.style.color;

// Function to load the quiz questions and options
function loadQuiz(i) {
    score.innerHTML = `SCORE : ${calculateScore}`;
    if (i >= 9) {
        resultshow();
    }
    clearInterval(timeinterval);
    startTimer(20);
    resetOptionStyles();
    console.log(questions[i].que);

    questionContainer.innerHTML = questions[i].que;
    option1.innerHTML = questions[i].option[0];
    option2.innerHTML = questions[i].option[1];
    option3.innerHTML = questions[i].option[2];
    option4.innerHTML = questions[i].option[3];
}

// Event listeners for option buttons and next button
option1.addEventListener('click', () => { checkAnswer(i, 1) });
option2.addEventListener('click', () => { checkAnswer(i, 2) });
option3.addEventListener('click', () => { checkAnswer(i, 3) });
option4.addEventListener('click', () => { checkAnswer(i, 4) });
nextButton.addEventListener('click', () => { loadQuiz(++i) });

// Function to display the result
function resultshow() {
    correctAnswers.innerHTML += `     ${calculateScore}`;
    wrongAttemps.innerHTML += `       ${calculateAttempted - calculateScore}`;
    totalAttempted.innerHTML += `     ${calculateAttempted}`;
    timerCounter.innerHTML+=`  ${globalCounter} seconds`;

    const correctAnswer = document.getElementById("yourresult");
    correctAnswer.innerHTML = localStorage.getItem("name") + " Your Result";
    document.querySelector(".main-container1").style.display = "none";
    document.querySelector(".main-container").style.display = "";
}

// Function to check the selected answer
function checkAnswer(questionIndex, optionChosen) {
    calculateAttempted++;
    if (questions[i].ans == optionChosen) {
        calculateScore += 1;
        console.log(calculateScore);
        console.log("correct ans");
        console.log(optionChosen);
        highlightOption(optionChosen, 'green');
    } else {
        console.log("Wrong");
        highlightOption(optionChosen, 'red');
    }
}

// Function to reset option button styles
function resetOptionStyles() {
    option1.style.backgroundColor = originalBackgroundColor;
    option1.style.color = originalColor;
    option2.style.backgroundColor = originalBackgroundColor;
    option2.style.color = originalColor;
    option3.style.backgroundColor = originalBackgroundColor;
    option3.style.color = originalColor;
    option4.style.backgroundColor = originalBackgroundColor;
    option4.style.color = originalColor;
}

// Function to highlight the selected option
function highlightOption(option, color) {
    if (option === 1) {
        option1.style.backgroundColor = color;
        option1.style.color = 'white';
    } else if (option === 2) {
        option2.style.backgroundColor = color;
        option2.style.color = 'white';
    } else if (option === 3) {
        option3.style.backgroundColor = color;
        option3.style.color = 'white';
    } else if (option === 4) {
        option4.style.backgroundColor = color;
        option4.style.color = 'white';
    }
}

// Initial quiz load
loadQuiz(0);
