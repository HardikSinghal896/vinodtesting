const questions = [
    {
        serial: 1,
        que: "What is the probability of rolling an even number on a six-sided die?",
        ans: 1,
        option: [
            "1/6",
            "1/2",
            "2/3",
            "5/6"]
    },
    {
        serial: 2,
        que: "In a deck of playing cards, what is the probability of drawing a heart?",
        ans: 3,
        option: [
            "1/13",
            "1/26",
            "1/4",
            "1/2"]
    },
    {
        serial: 3,
        que: "If you flip a fair coin twice, what is the probability of getting heads on both flips?",
        ans: 1,
        option: [
            "1/4",
            "1/2",
            "3/4",
            "1"]
    },
    {
        serial: 4,
        que: "What is the probability of selecting a red ball from a bag containing 3 red balls and 5 blue balls?",
        ans: 2,
        option: [
            "3/8",
            "3/5",
            "1/2",
            "5/8"]
    },
    {
        serial: 5,
        que: "If you randomly choose a card from a standard deck, what is the probability of selecting a face card (jack, queen, or king)?",
        ans: 4,
        option: [
            "1/13",
            "1/4",
            "3/13",
            "3/26"]
    },
    {
        serial: 6,
        que: "In a bag, there are 4 red marbles, 3 blue marbles, and 2 green marbles. What is the probability of drawing a green marble?",
        ans: 1,
        option: [
            "1/9",
            "1/4",
            "1/3",
            "2/9"]
    },
    {
        serial: 7,
        que: "If you spin a spinner with 8 equal sections numbered 1 to 8, what is the probability of landing on an even number?",
        ans: 3,
        option: [
            "1/4",
            "1/2",
            "3/8",
            "5/8"]
    },
    {
        serial: 8,
        que: "If you draw two cards without replacement from a standard deck, what is the probability that both cards are kings?",
        ans: 1,
        option: [
            "1/221",
            "1/169",
            "1/128",
            "1/104"]
    },
    {
        serial: 9,
        que: "In a group of 20 people, what is the probability that at least two people have the same birthday?",
        ans: 2,
        option: [
            "0.05",
            "0.41",
            "0.95",
            "0.99"]
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
