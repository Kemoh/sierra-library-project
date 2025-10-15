window.addEventListener("DOMContentLoaded", () => {
  const subject = localStorage.getItem("subject") || "Unknown Subject";
  const questions = JSON.parse(localStorage.getItem("questions")) || [];
  const container = document.querySelector("#questions-container");

  if (!questions.length) {
    container.innerHTML = `<p>No questions found for ${subject}.</p>`;
    return;
  }

  const letters = ["a", "b", "c", "d"];

  // Render questions
  container.innerHTML = `
    <h2 class="text-2xl font-bold mb-4">${subject.toUpperCase()} QUESTIONS</h2>
    <form id="quiz-form">
      ${questions
        .map((q, i) => `
        <div class="mb-6 border-b border-gray-300 pb-4 question-card">
          <h3 class="font-semibold mb-2">Q${i + 1}. ${q.question}</h3>
          <ul class="list-disc ml-5 space-y-1">
            ${q.options
              .map(
                (opt, j) => `
              <li>
                <label style="cursor: pointer;">
                  <input type="radio" name="q${i}" value="${letters[j]}" />
                  <span class="option-text">${letters[j]}) ${opt}</span>
                  <span class="symbol ml-2"></span>
                </label>
              </li>
            `
              )
              .join("")}
          </ul>
          <p class="mt-2 text-sm text-green-600 hidden answer"><strong>Answer:</strong> ${q.answer.toUpperCase()}) ${q.options[letters.indexOf(q.answer)]}</p>
        </div>
      `)
        .join("")}
      <button type="submit" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Submit Answers
      </button>
    </form>
    <div id="score" class="mt-4 text-lg font-bold"></div>
  `;

  const form = document.querySelector("#quiz-form");
  const scoreEl = document.querySelector("#score");

  // Animate cards: bottom-to-top with stagger
  const cards = document.querySelectorAll(".question-card");
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, index * 150); // stagger by 150ms
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let score = 0;

    questions.forEach((q, i) => {
      const selected = form.querySelector(`input[name="q${i}"]:checked`);
      const options = Array.from(form.querySelectorAll(`input[name="q${i}"]`));
      const answerEl = form.querySelectorAll(".answer")[i];

      // Show the answer text
      answerEl.classList.remove("hidden");

      options.forEach((opt, j) => {
        const symbolSpan = opt.parentElement.querySelector(".symbol");

        if (letters[j] === q.answer) {
          // Correct answer
          symbolSpan.textContent = "✅";
          if (selected && selected.value === q.answer) {
            // User selected correct
            score++;
          }
        } else if (selected && selected.value === letters[j]) {
          // User selected wrong answer
          symbolSpan.textContent = "❌";
        }
      });
    });

    // Disable all inputs
    form.querySelectorAll("input[type='radio']").forEach((input) => (input.disabled = true));

    // Display score
    scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
  });
});
