/* EXPOSURE QUEST — editable question bank
   To add or edit a question, keep this shape:
   {
     type: "ISO" | "SHUTTER SPEED" | "APERTURE" | "MIXED",
     question: "Question text",
     context: "Optional extra situation",
     options: ["Option one", "Option two", "Option three"],
     answer: 0, // zero-based index of the correct option
     explanation: "Simple explanation shown after an answer",
     takeaway: "Short review explanation shown at the end"
   }
*/
"use strict";

const QUESTION_BANK = [
  {
    type: "ISO",
    question: "Which camera setting controls how sensitive the camera sensor is to light?",
    context: "Think about the setting you might change when a scene is dark.",
    options: ["ISO", "Shutter speed", "Aperture"],
    answer: 0,
    explanation: "ISO controls the sensor's light sensitivity. A higher ISO can help in low light, but it often adds more visible image noise or grain.",
    takeaway: "ISO affects light sensitivity and image noise."
  },
  {
    type: "SHUTTER SPEED",
    question: "You want to freeze a runner in mid-air. Which setting is most directly useful?",
    context: "You want the movement to look sharp rather than blurred.",
    options: ["Aperture", "Shutter speed", "ISO"],
    answer: 1,
    explanation: "A faster shutter speed records the scene for less time, helping freeze movement. It may let in less light, so exposure may need balancing.",
    takeaway: "Shutter speed affects motion blur and how long light reaches the sensor."
  },
  {
    type: "APERTURE",
    question: "Which setting changes how wide the lens opening is?",
    context: "This opening helps control light entering the camera.",
    options: ["ISO", "Shutter speed", "Aperture"],
    answer: 2,
    explanation: "Aperture is the opening inside the lens. A wider opening lets in more light; aperture also affects depth of field, or how much looks in focus.",
    takeaway: "Aperture controls the lens opening and affects depth of field."
  },
  {
    type: "APERTURE",
    question: "You are taking a portrait and want the person sharp while the background looks soft. Which setting helps control this effect?",
    context: "The effect is called shallow depth of field.",
    options: ["Aperture", "ISO only", "Shutter speed only"],
    answer: 0,
    explanation: "A wider aperture often creates a shallower depth of field, making the subject stand out against a softer background. Distance and lens choice also matter.",
    takeaway: "Aperture is an important way to control how much of the scene appears in focus."
  },
  {
    type: "ISO",
    question: "Your photo looks grainy because you used a very high ISO. What is the most likely cause?",
    context: "The camera was set to help capture a dim scene.",
    options: ["The lens opening was too wide", "The sensor sensitivity was increased", "The shutter stayed open too long"],
    answer: 1,
    explanation: "High ISO can make a camera more useful in low light, but it can also make noise or grain more visible. The best ISO depends on the scene and camera.",
    takeaway: "Higher ISO can help in low light but may increase image noise."
  },
  {
    type: "SHUTTER SPEED",
    question: "You photograph a waterfall and want the moving water to look silky and blurred. Which choice can help?",
    context: "Keep the camera steady when using a long exposure.",
    options: ["Use a slower shutter speed", "Use a faster shutter speed", "Change only the file name"],
    answer: 0,
    explanation: "A slower shutter speed records movement over a longer time, so flowing water can blur. A tripod helps avoid blur caused by camera shake.",
    takeaway: "A slower shutter speed can show movement as blur."
  },
  {
    type: "APERTURE",
    question: "You are photographing a landscape and want the foreground and distant mountains to appear in focus. Which setting can help you get greater depth of field?",
    context: "Focus, lens choice, and distance also affect the result.",
    options: ["A wider aperture", "A narrower aperture", "A higher ISO by itself"],
    answer: 1,
    explanation: "A narrower aperture often increases depth of field, so more of the scene can appear in focus. Very narrow apertures can reduce fine detail through diffraction.",
    takeaway: "A narrower aperture often gives greater depth of field."
  },
  {
    type: "MIXED",
    question: "The photo is too dark. You want to keep a fast shutter speed to freeze action. Which change could help brighten it?",
    context: "Assume the aperture can be opened wider, or ISO can be raised.",
    options: ["Raise ISO or use a wider aperture", "Use an even faster shutter speed only", "Make the aperture narrower and lower ISO"],
    answer: 0,
    explanation: "A faster shutter speed allows less light in. Raising ISO or choosing a wider aperture can help brighten the exposure while keeping that fast shutter speed.",
    takeaway: "The three settings work together to balance exposure."
  },
  {
    type: "MIXED",
    question: "Which statement about the exposure trio is correct?",
    context: "Each setting has a different main role.",
    options: ["ISO controls motion blur directly", "Aperture changes the lens opening and depth of field", "Shutter speed controls how wide the lens opening is"],
    answer: 1,
    explanation: "Aperture changes the lens opening and affects depth of field. Shutter speed affects motion rendering, while ISO affects sensor sensitivity and image noise.",
    takeaway: "Know each setting's main role, then balance them together."
  },
  {
    type: "SHUTTER SPEED",
    question: "You are indoors and taking a photo in low light. The photo is blurry because your hands moved while taking it. What change may reduce camera-shake blur?",
    context: "You still need enough light for a good exposure.",
    options: ["Use a faster shutter speed", "Use a slower shutter speed", "Use a wider aperture number"],
    answer: 0,
    explanation: "A faster shutter speed can reduce blur from hand movement, but it lets in less light. You may need to raise ISO, open the aperture, or use support.",
    takeaway: "A faster shutter speed can reduce motion and camera-shake blur."
  },
  {
    type: "MIXED",
    question: "A student wants a clean photo in bright daylight and does not need to freeze fast movement. Which is a sensible starting idea?",
    context: "There is plenty of light, so the camera has more flexibility.",
    options: ["Use the highest ISO possible", "Choose a suitable low ISO and adjust aperture and shutter speed for the scene", "Always use the slowest shutter speed"],
    answer: 1,
    explanation: "In bright light, a low ISO can help keep noise down. Choose aperture for depth of field and shutter speed for movement, then balance exposure.",
    takeaway: "Choose settings for the light and the creative result you want."
  },
  {
    type: "FINAL CHALLENGE",
    question: "NEW SCENE: At a dim indoor sports match, you want to freeze a player jumping. Which plan makes the most sense?",
    context: "This final question checks whether you can connect all three settings to a new situation.",
    options: ["Use a fast shutter speed, raise ISO if needed, and use a wide aperture if your lens allows", "Use a slow shutter speed, low ISO, and a narrow aperture", "Change aperture only; shutter speed and ISO never affect exposure"],
    answer: 0,
    explanation: "A fast shutter speed helps freeze the player. A higher ISO can help in dim light, and a wider aperture lets in more light. Balance all three for the result you need.",
    takeaway: "For action in low light, protect motion with shutter speed, then balance aperture and ISO to get enough light."
  }
];

const screens = {
  home: document.getElementById("homeScreen"),
  instructions: document.getElementById("instructionsScreen"),
  game: document.getElementById("gameScreen"),
  results: document.getElementById("resultsScreen")
};

const playButton = document.getElementById("playButton");
const beginGameButton = document.getElementById("beginGameButton");
const backHomeButton = document.getElementById("backHomeButton");
const gameHomeButton = document.getElementById("gameHomeButton");
const restartButton = document.getElementById("restartButton");
const resultsHomeButton = document.getElementById("resultsHomeButton");
const playAgainButton = document.getElementById("playAgainButton");
const continueButton = document.getElementById("continueButton");
const untimedToggle = document.getElementById("untimedToggle");
const targetButtons = Array.from(document.querySelectorAll(".answer-target"));

let questionOrder = [];
let currentIndex = 0;
let score = 0;
let firstTryCorrect = 0;
let attemptsThisQuestion = 0;
let answeredThisQuestion = false;
let currentQuestion = null;
let untimedMode = true;
let questionResults = [];

function showScreen(name) {
  Object.entries(screens).forEach(([key, element]) => {
    element.classList.toggle("hidden", key !== name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function shuffleIndices(length) {
  const indices = Array.from({ length }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
}

function startGame() {
  // Shuffle practice questions, but always keep the transfer challenge last.
  const finalQuestionIndex = QUESTION_BANK.length - 1;
  questionOrder = shuffleIndices(finalQuestionIndex).concat(finalQuestionIndex);
  currentIndex = 0;
  score = 0;
  firstTryCorrect = 0;
  attemptsThisQuestion = 0;
  answeredThisQuestion = false;
  questionResults = [];
  untimedMode = untimedToggle.checked;
  document.getElementById("paceLabel").textContent = untimedMode ? "UNTIMED MODE" : "FOCUS MODE";
  showScreen("game");
  loadQuestion();
}

function loadQuestion() {
  currentQuestion = QUESTION_BANK[questionOrder[currentIndex]];
  attemptsThisQuestion = 0;
  answeredThisQuestion = false;
  document.getElementById("questionCounter").textContent =
    String(currentIndex + 1).padStart(2, "0") + " / " + String(questionOrder.length).padStart(2, "0");
  document.getElementById("scoreDisplay").textContent = score;
  document.getElementById("progressBar").style.width = ((currentIndex) / questionOrder.length * 100) + "%";
  document.getElementById("questionType").textContent = currentQuestion.type;
  document.getElementById("questionText").textContent = currentQuestion.question;
  document.getElementById("questionContext").textContent = currentQuestion.context || "";
  const feedback = document.getElementById("feedbackPanel");
  feedback.classList.add("hidden");
  feedback.classList.remove("wrong");
  targetButtons.forEach((button, index) => {
    button.disabled = false;
    button.classList.remove("correct", "incorrect");
    button.querySelector(".target-label").textContent = currentQuestion.options[index];
    button.setAttribute("aria-label", "Answer " + String.fromCharCode(65 + index) + ": " + currentQuestion.options[index]);
  });
}

function chooseAnswer(index) {
  if (answeredThisQuestion) return;
  attemptsThisQuestion++;
  const isCorrect = index === currentQuestion.answer;
  const selectedButton = targetButtons[index];
  if (isCorrect) {
    answeredThisQuestion = true;
    selectedButton.classList.add("correct");
    targetButtons.forEach(button => { button.disabled = true; });
    const points = attemptsThisQuestion === 1 ? 10 : 5;
    score += points;
    if (attemptsThisQuestion === 1) firstTryCorrect++;
    questionResults.push({
      question: currentQuestion.question,
      correct: true,
      firstTry: attemptsThisQuestion === 1,
      chosen: currentQuestion.options[index],
      correctAnswer: currentQuestion.options[currentQuestion.answer],
      explanation: currentQuestion.explanation,
      takeaway: currentQuestion.takeaway
    });
    showFeedback(true, attemptsThisQuestion === 1 ? "Bullseye! +10 points" : "You got it! +5 points", currentQuestion.explanation, false);
    document.getElementById("scoreDisplay").textContent = score;
  } else {
    selectedButton.classList.add("incorrect");
    selectedButton.disabled = true;
    showFeedback(false, "Not quite — try again", currentQuestion.explanation, true);
  }
}

function showFeedback(correct, title, explanation, canRetry) {
  const panel = document.getElementById("feedbackPanel");
  panel.classList.remove("hidden");
  panel.classList.toggle("wrong", !correct);
  document.getElementById("feedbackIcon").textContent = correct ? "✓" : "↻";
  document.getElementById("feedbackTitle").textContent = title;
  document.getElementById("feedbackText").textContent = explanation;
  continueButton.classList.toggle("hidden", !correct);
  if (canRetry) {
    document.getElementById("feedbackText").textContent = explanation + " Choose another target when you're ready.";
  }
}

function continueGame() {
  if (!answeredThisQuestion) return;
  currentIndex++;
  if (currentIndex >= questionOrder.length) {
    showResults();
  } else {
    loadQuestion();
  }
}

function showResults() {
  document.getElementById("progressBar").style.width = "100%";
  const total = questionOrder.length;
  const percent = Math.round((score / (total * 10)) * 100);
  document.getElementById("finalScore").textContent = score + " / " + (total * 10);
  document.getElementById("firstTryRate").textContent = Math.round(firstTryCorrect / total * 100) + "%";
  document.getElementById("answeredCount").textContent = total;
  let heading = "Quest complete!";
  let lead = "Good work. Review your results and keep practising.";
  if (percent >= 85) {
    heading = "Exposure expert!";
    lead = "Excellent work — you understand how the exposure trio works together.";
  } else if (percent < 55) {
    heading = "Every shot teaches you.";
    lead = "You finished the quest. Review the notes below, then play again to build confidence.";
  }
  document.getElementById("resultHeading").textContent = heading;
  document.getElementById("resultLead").textContent = lead;
  document.getElementById("resultMedal").textContent = percent >= 85 ? "★" : "✦";
  const reviewList = document.getElementById("reviewList");
  reviewList.replaceChildren();
  questionResults.forEach((result, index) => {
    const item = document.createElement("article");
    item.className = "review-item" + (result.firstTry ? "" : " missed");
    const status = document.createElement("div");
    status.className = "review-status";
    status.textContent = result.firstTry ? "FIRST-TRY HIT" : "LEARNED AFTER RETRY";
    const title = document.createElement("h3");
    title.textContent = (index + 1) + ". " + result.question;
    const text = document.createElement("p");
    text.textContent = "Best answer: " + result.correctAnswer + " — " + result.takeaway + " " + result.explanation;
    item.append(status, title, text);
    reviewList.append(item);
  });
  showScreen("results");
}

playButton.addEventListener("click", () => showScreen("instructions"));
beginGameButton.addEventListener("click", startGame);
backHomeButton.addEventListener("click", () => showScreen("home"));
gameHomeButton.addEventListener("click", () => {
  if (window.confirm("Exit this run? Your current progress will be lost.")) showScreen("home");
});
restartButton.addEventListener("click", () => {
  if (window.confirm("Restart the quest from the beginning? Your current score will be lost.")) startGame();
});
resultsHomeButton.addEventListener("click", () => showScreen("home"));
playAgainButton.addEventListener("click", startGame);
continueButton.addEventListener("click", continueGame);
document.getElementById("brandHome").addEventListener("click", event => {
  event.preventDefault();
  showScreen("home");
});
targetButtons.forEach((button, index) => {
  button.addEventListener("click", () => chooseAnswer(index));
});
document.addEventListener("keydown", event => {
  if (screens.game.classList.contains("hidden")) return;
  if (event.key === "1" || event.key === "a" || event.key === "A") chooseAnswer(0);
  if (event.key === "2" || event.key === "b" || event.key === "B") chooseAnswer(1);
  if (event.key === "3" || event.key === "c" || event.key === "C") chooseAnswer(2);
  if ((event.key === "Enter" || event.key === " ") && !continueButton.classList.contains("hidden") &&
      document.activeElement !== targetButtons[0] && document.activeElement !== targetButtons[1] && document.activeElement !== targetButtons[2]) {
    event.preventDefault();
    continueGame();
  }
});

/* Keep the score tied to learning, not speed. The mode is intentionally untimed;
   the toggle is a student pacing preference and does not change the score. */
