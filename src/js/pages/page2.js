import { createElement, triggerAnimation } from "../components/utils.js";
import { attachQuestionLogic } from "../components/loadQuestions.js";


function Exampal() {
  // Dropdown Controls
  const controlsContainer = createElement("div", {
    className: "page2-container",
    id: "library-apps",
  });

  // Controls markup
  const controls = createElement("div", { className: "select-controls" }, [
    // Heading
    createElement("h1", { className: "welcome-msg" }, [
      createElement("span", { textContent: "ExamPal" }),
      createElement("p", { textContent: "Practice Makes Perfect!" }),
    ]),

    // Subject dropdown
    createElement("select", { id: "subject" }, [
      createElement("option", { value: "", textContent: "Select Subject" }),
      createElement("option", { value: "english", textContent: "English" }),
      createElement("option", { value: "mathematics", textContent: "Mathematics" }),
      createElement("option", { value: "chemistry", textContent: "Chemistry" }),
      createElement("option", { value: "biology", textContent: "Biology" }),
      createElement("option", { value: "physics", textContent: "Physics" }),
      createElement("option", { value: "commerce", textContent: "Commerce" }),
      createElement("option", { value: "accounting", textContent: "Accounting" }),
      createElement("option", { value: "economics", textContent: "Economics" }),
      createElement("option", { value: "englishlit", textContent: "English Literature" }),
      createElement("option", { value: "government", textContent: "Government" }),
      createElement("option", { value: "geography", textContent: "Geography" }),
      createElement("option", { value: "history", textContent: "History" }),
    ]),

    // Year dropdown
    createElement("select", { id: "year" }, [
      createElement("option", { value: "", textContent: "Select Year" }),
      ...Array.from({ length: 13 }, (_, i) => {
        const year = 2003 + i;
        return createElement("option", { value: year, textContent: year.toString() });
      }),
    ]),

    // Type dropdown
    createElement("select", { id: "type" }, [
      createElement("option", { value: "", textContent: "Select Type" }),
      createElement("option", { value: "utme", textContent: "UTME" }),
      createElement("option", { value: "wassce", textContent: "WASSCE" }),
    ]),

    // Mode dropdown
    createElement("select", { id: "mode" }, [
      createElement("option", { value: "exam", textContent: "Exam Mode (Countdown)" }),
      createElement("option", { value: "practice", textContent: "Practice Mode (Count Up)" }),
    ]),

    // Fetch button
    createElement("button", { id: "fetchBtn", textContent: "Fetch Question" }),

    // Question container
    createElement("div", { id: "question" }),
  ]);

  // Append controls to container
  controlsContainer.appendChild(controls);

  // Run animation and attach logic after UI loads
  requestAnimationFrame(() => {
    triggerAnimation("animate-app");
    attachQuestionLogic(); // safe: #fetchBtn now exists
  });

  return controlsContainer;
}

export default Exampal;
