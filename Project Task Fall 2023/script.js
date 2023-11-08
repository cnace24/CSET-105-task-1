const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        correctAnswer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Earth"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris"],
        correctAnswer: "Paris"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const questionElement = document.getElementById("question");
const optionsForm = document.getElementById("options");
const submitButton = document.getElementById("submit-button");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsForm.innerHTML = "";

    for (let i = 0; i < currentQuestion.options.length; i++) {
        const option = currentQuestion.options[i];
        const optionInput = document.createElement("input");
        optionInput.type = "radio";
        optionInput.name = "option";
        optionInput.id = `option${i}`;
        optionInput.value = option;

        const optionLabel = document.createElement("label");
        optionLabel.htmlFor = `option${i}`;
        optionLabel.innerText = option;

        optionsForm.appendChild(optionInput);
        optionsForm.appendChild(optionLabel);
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const currentQuestion = questions[currentQuestionIndex];
        
        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
        }

        currentQuestionIndex++;
        selectedOption.checked = false;

        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Please select an option before submitting.");
    }
}

function showResult() {
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.innerText = `Score: ${score}/${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    questionContainer.style.display = "block";
    resultContainer.style.display = "none";
}

submitButton.addEventListener("click", checkAnswer);
restartButton.addEventListener("click", restartQuiz);

loadQuestion();
