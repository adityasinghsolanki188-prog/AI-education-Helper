// ---------------------------------------------
// STEP 1: Question Bank (yeh humara "AI data" hai)
// Har topic ke andar questions ka array hai
// ---------------------------------------------
const quizData = {
  science: [
    {
      question: "What is the boiling point of water?",
      options: ["50°C", "100°C", "150°C", "200°C"],
      answer: 1 // index of correct option
    },
    {
      question: "Which gas do plants release during photosynthesis?",
      options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      answer: 1
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"],
      answer: 1
    }
  ],
  math: [
    {
      question: "What is 12 x 4?",
      options: ["44", "46", "48", "52"],
      answer: 2
    },
    {
      question: "What is the value of Pi (approx)?",
      options: ["3.14", "2.14", "4.13", "3.41"],
      answer: 0
    },
    {
      question: "Square root of 81 is?",
      options: ["7", "8", "9", "10"],
      answer: 2
    }
  ],
  gk: [
    {
      question: "Who is known as the Father of the Nation in India?",
      options: ["Nehru", "Gandhi", "Bose", "Patel"],
      answer: 1
    },
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
      answer: 2
    },
    {
      question: "Which is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Saturn"],
      answer: 1
    }
  ]
};

// ---------------------------------------------
// STEP 2: Variables to track quiz state
// ---------------------------------------------
let currentQuestions = [];   // selected topic ke questions
let currentIndex = 0;        // kaunsa question chal raha hai
let score = 0;                // sahi answers ka count

// ---------------------------------------------
// STEP 3: Start Quiz (jab user topic choose kare)
// ---------------------------------------------
function startQuiz(topic) {
  currentQuestions = quizData[topic];
  currentIndex = 0;
  score = 0;

  // topic screen chupao, quiz screen dikhao
  document.getElementById("topicScreen").classList.add("hidden");
  document.getElementById("quizScreen").classList.remove("hidden");
  document.getElementById("resultScreen").classList.add("hidden");

  showQuestion();
}

// ---------------------------------------------
// STEP 4: Show current question on screen
// ---------------------------------------------
function showQuestion() {
  const q = currentQuestions[currentIndex];

  document.getElementById("questionText").textContent = q.question;
  document.getElementById("scoreText").textContent = "Score: " + score;
  document.getElementById("nextBtn").classList.add("hidden");

  const optionsBox = document.getElementById("optionsBox");
  optionsBox.innerHTML = ""; // purane options hatao

  // har option ke liye ek button banao
  q.options.forEach(function (option, index) {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = function () {
      checkAnswer(index, btn);
    };
    optionsBox.appendChild(btn);
  });
}

// ---------------------------------------------
// STEP 5: Check if selected answer is correct
// ---------------------------------------------
function checkAnswer(selectedIndex, btnClicked) {
  const q = currentQuestions[currentIndex];
  const allButtons = document.querySelectorAll("#optionsBox button");

  // saare buttons disable kar do taki dobara click na ho
  allButtons.forEach(btn => btn.disabled = true);

  if (selectedIndex === q.answer) {
    btnClicked.classList.add("correct");
    score++; // score badhao
  } else {
    btnClicked.classList.add("wrong");
    allButtons[q.answer].classList.add("correct"); // sahi answer bhi dikhao
  }

  document.getElementById("scoreText").textContent = "Score: " + score;
  document.getElementById("nextBtn").classList.remove("hidden");
}

// ---------------------------------------------
// STEP 6: Move to next question
// ---------------------------------------------
function nextQuestion() {
  currentIndex++;

  if (currentIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// ---------------------------------------------
// STEP 7: Show final result
// ---------------------------------------------
function showResult() {
  document.getElementById("quizScreen").classList.add("hidden");
  document.getElementById("resultScreen").classList.remove("hidden");

  document.getElementById("finalScore").textContent =
    "You scored " + score + " out of " + currentQuestions.length;
}

// ---------------------------------------------
// STEP 8: Restart quiz (topic screen par wapas jao)
// ---------------------------------------------
function restartQuiz() {
  document.getElementById("resultScreen").classList.add("hidden");
  document.getElementById("topicScreen").classList.remove("hidden");
}