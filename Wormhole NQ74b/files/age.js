const questions = [
    {
        serial: 1,
        que: "A father is 40 years old, and his son is 15 years old. In how many years will the father be three times as old as his son?",
        ans: 4,
        option: [
            "5 years",
            "7 years",
            "10 years",
            "12 years"]
    },
    {
        serial: 2,
        que: "The sum of the ages of John and Mary is 50 years. If John is 5 years older than Mary, how old is Mary?",
        ans: 3,
        option: [
            "20 years",
            "22 years",
            "25 years",
            "30 years"]
    },
    {
        serial: 3,
        que: "Five years ago, the average age of a family of four members was 30 years. What is the average age of the family now?",
        ans: 2,
        option: [
            "25 years",
            "30 years",
            "35 years",
            "40 years"]
    },
    {
        serial: 4,
        que: "Alice is twice as old as Bob. If the sum of their ages is 45 years, how old is Alice?",
        ans: 1,
        option: [
            "30 years",
            "35 years",
            "40 years",
            "45 years"]
    },
    {
        serial: 5,
        que: "The average age of three friends is 25 years. If one friend is 30 years old, what is the average age of the other two?",
        ans: 4,
        option: [
            "20 years",
            "22.5 years",
            "25 years",
            "27.5 years"]
    },
    {
        serial: 6,
        que: "In 5 years, Maria will be twice as old as John. If Maria is currently 20 years old, how old is John?",
        ans: 3,
        option: [
            "10 years",
            "12 years",
            "15 years",
            "18 years"]
    },
    {
        serial: 7,
        que: "A group of friends has an average age of 28 years. If a new friend joins the group and the average age becomes 30 years, how old is the new friend?",
        ans: 1,
        option: [
            "32 years",
            "34 years",
            "36 years",
            "38 years"]
    },
    {
        serial: 8,
        que: "Tom is three times as old as Jerry. If the difference in their ages is 15 years, how old is Jerry?",
        ans: 2,
        option: [
            "10 years",
            "15 years",
            "20 years",
            "25 years"]
    },
    {
        serial: 9,
        que: "The sum of the ages of a father and his son is 50 years. If the father is twice as old as his son, how old is the son?",
        ans: 4,
        option: [
            "15 years",
            "20 years",
            "25 years",
            "30 years"]
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
