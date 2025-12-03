const quizData = [
    {
        question: "What shape is the UFC fighting area?",
        choices: ["Ring", "Octagon", "Square", "Circle"],
        answer: 1
    },
    {
        question: "What does UFC stand for?",
        choices: ["Ultimate Fighting Championship", "United Fight Club", "Universal Fight Cage", "Ultimate Fight Contest"],
        answer: 0
    },
    {
        question: "What type of sport is UFC mainly known for?",
        choices: ["Football", "Mixed Martial Arts", "Boxing", "Wrestling Only"],
        answer: 1
    }
];


let currentQuestion = 0;
let score = 0;
let selectedChoice = null;

function loadQuestion() {
    document.getElementById("current").textContent = currentQuestion + 1;
    document.getElementById("question-text").textContent = quizData[currentQuestion].question;
    
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    quizData[currentQuestion].choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = choice;
        button.onclick = () => selectOption(button, index);
        optionsDiv.appendChild(button);
    });
    
    document.getElementById("result").textContent = "";
    document.getElementById("submit").disabled = false;
    selectedChoice = null;
}

function selectOption(button, index) {
    document.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
    button.classList.add("selected");
    selectedChoice = index;
}

function checkAnswer() {
    if (selectedChoice === null) {
        alert("Please select an answer!");
        return;
    }
    
    const resultDiv = document.getElementById("result");
    const correct = quizData[currentQuestion].answer;
    
    if (selectedChoice === correct) {
        resultDiv.textContent = "Correct!";
        resultDiv.className = "correct";
        score++;
    } else {
        resultDiv.textContent = "Wrong! Correct answer: " + quizData[currentQuestion].choices[correct];
        resultDiv.className = "wrong";
    }
    
    document.querySelectorAll(".option").forEach(opt => opt.disabled = true);
    document.getElementById("submit").disabled = true;
    
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        setTimeout(loadQuestion, 1500);
    } else {
        setTimeout(showResults, 1500);
    }
}

function showResults() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
    document.getElementById("score-display").textContent = `You scored ${score} out of ${quizData.length}`;
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz").style.display = "block";
    document.getElementById("end-screen").style.display = "none";
    loadQuestion();
}
window.onload = loadQuestion;
