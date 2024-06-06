const questions = [
    {
        serial: 1,
        que: "A trader bought a product for $200 and sold it for $300. What is the profit percentage?",
        ans: 2,
        option: [
            "25%",
            "50%",
            "75%",
            "100%"]
    },
    {
        serial: 2,
        que: "If the cost price of an item is $150 and the selling price is $120, what is the loss percentage?",
        ans: 3,
        option: [
            "10%",
            "15%",
            "20%",
            "25%"]
    },
    {
        serial: 3,
        que: "A person sold a bicycle for $600 and incurred a loss of 20%. What was the cost price of the bicycle?",
        ans: 1,
        option: [
            "$720",
            "$640",
            "$500",
            "$480"]
    },
    {
        serial: 4,
        que: "If the selling price of an article is $450 and the profit percentage is 30%, what is the cost price?",
        ans: 2,
        option: [
            "$315",
            "$350",
            "$400",
            "$420"]
    },
    {
        serial: 5,
        que: "A shopkeeper bought a shirt for $30 and sold it for $45. What is the profit percentage?",
        ans: 4,
        option: [
            "30%",
            "40%",
            "50%",
            "50%"]
    },
    {
        serial: 6,
        que: "If the cost price of an item is $80 and the profit earned is $20, what is the profit percentage?",
        ans: 1,
        option: [
            "25%",
            "30%",
            "40%",
            "50%"]
    },
    {
        serial: 7,
        que: "A trader sold a watch for $1200, incurring a loss of 25%. What was the cost price of the watch?",
        ans: 3,
        option: [
            "$1400",
            "$1300",
            "$1600",
            "$1500"]
    },
    {
        serial: 8,
        que: "If the cost price of an item is $500 and the selling price is $600, what is the profit percentage?",
        ans: 2,
        option: [
            "10%",
            "20%",
            "25%",
            "30%"]
    },
    {
        serial: 9,
        que: "A person sold a car for $8000, incurring a loss of 15%. What was the cost price of the car?",
        ans: 1,
        option: [
            "$9400",
            "$8500",
            "$9600",
            "$9000"]
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
