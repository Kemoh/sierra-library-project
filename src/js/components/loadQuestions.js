import { fetchQuestionV2 } from "../api/fetchQuestions.js";
import { getLocalStorage, setLocalStorage } from "./utils.js";
import { renderQuestions } from "./renderQuestions.js";

// Attach Questions Logic
export function attachQuestionLogic() {
  const fetchBtn = document.querySelector("#fetchBtn");

  if (!fetchBtn) {
    return;
  }

  fetchBtn.addEventListener("click", async () => {
    const subject = document.querySelector("#subject").value;
    const year = document.querySelector("#year").value;
    const type = document.querySelector("#type").value;
    const mode = document.querySelector("#mode").value; 

    if (!subject) {
      alert("Please select a subject");
      return;
    }

    const storageKey = `questions_${subject}_${year || "any"}_${type || "any"}`;
    let questions = getLocalStorage(storageKey);

    if (!questions) {
      questions = await fetchQuestionV2({ subject, year, type });
      setLocalStorage(storageKey, questions);
    }

    renderQuestions(questions, mode, 300); 
  });
}
