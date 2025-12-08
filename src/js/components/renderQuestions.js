import { checkAnswer, calculateScore } from "./utils.js";

export function renderQuestions(questions, mode = "exam", duration = 300) {
  const questionDiv = document.querySelector("#question");

  questionDiv.innerHTML = `
    <div class="timer" id="quiz-timer"></div>
    <form id="quiz-form" class="quiz-form">
      ${questions
        .map((q, idx) => {
          return `
            <div class="question-box">
              <h3>Question ${idx + 1}</h3>
              <p class="question-text">${q.question || "No question text"}</p>
              ${Object.entries(q.option)
                .filter(([key, val]) => val)
                .map(
                  ([key, val]) => `
                    <label class="option-label">
                      <input type="radio" name="q${idx}" value="${key}" class="option-input">
                      <span class="option-text">${key.toUpperCase()}. ${val}</span>
                    </label>
                  `
                )
                .join("")}
              <p id="answer-${idx}" class="answer-text" style="display:none;"></p>
              <p id="solution-${idx}" class="solution-text" style="display:none;"></p>
            </div>
          `;
        })
        .join("")}
      <button type="button" id="submit-all" class="submit-btn" disabled>
        Submit All
      </button>
      <p id="score-summary" class="score-summary"></p>
    </form>
  `;

  const submitBtn = document.getElementById("submit-all");

  // Enable button when all answered
  questions.forEach((q, idx) => {
    document.querySelectorAll(`input[name="q${idx}"]`).forEach(radio => {
      radio.addEventListener("change", () => {
        const allAnswered = questions.every((_, i) =>
          document.querySelector(`input[name="q${i}"]:checked`)
        );
        submitBtn.disabled = !allAnswered;
        submitBtn.classList.toggle("ready", allAnswered);
      });
    });
  });

  // Timer logic
  const timerEl = document.getElementById("quiz-timer");
  let timeRemaining = duration;
  let timeElapsed = 0;

  if (mode === "exam") {
    timerEl.textContent = `Time left: ${formatTime(timeRemaining)}`;
  } else {
    timerEl.textContent = `Time elapsed: ${formatTime(timeElapsed)}`;
  }

  const timerInterval = setInterval(() => {
    if (mode === "exam") {
      timeRemaining--;
      timerEl.textContent = `Time left: ${formatTime(timeRemaining)}`;
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        autoSubmit(questions);
      }
    } else {
      timeElapsed++;
      timerEl.textContent = `Time elapsed: ${formatTime(timeElapsed)}`;
    }
  }, 1000);

  submitBtn.addEventListener("click", () => {
    clearInterval(timerInterval); // stop timer on manual submit
    autoSubmit(questions);
  });
}

function autoSubmit(questions) {
  const selections = questions.map((_, idx) => {
    const selected = document.querySelector(`input[name="q${idx}"]:checked`);
    return selected ? selected.value : null;
  });

  const score = calculateScore(questions, selections);

  questions.forEach((q, idx) => {
    const selected = selections[idx];
    const answerEl = document.getElementById(`answer-${idx}`);
    const solutionEl = document.getElementById(`solution-${idx}`);

    if (checkAnswer(selected, q.answer)) {
      answerEl.style.display = "block";
      answerEl.innerHTML = `<strong>Correct!</strong> The answer is ${q.answer.toUpperCase()}.`;
      answerEl.style.color = "green";
    } else {
      answerEl.style.display = "block";
      answerEl.innerHTML = `<strong>Incorrect.</strong> You chose ${selected?.toUpperCase() || "None"}, but the correct answer is ${q.answer.toUpperCase()}.`;
      answerEl.style.color = "red";
    }

    if (q.solution) {
      solutionEl.style.display = "block";
      solutionEl.innerHTML = `<em>Solution:</em> ${q.solution}`;
    }
  });

  document.getElementById("score-summary").innerHTML =
    `You got ${score.correct} out of ${score.total} correct (${score.percentage}%).`;
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}
