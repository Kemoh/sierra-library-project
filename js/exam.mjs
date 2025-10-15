import { artlist } from "../data/arts-subjects.js";

export function loadArtsSubjects() {
  const container = document.querySelector("#arts-container");
  container.innerHTML = "";

  artlist.forEach((subject) => {
    const card = document.createElement("div");
    card.className = "subject-card";
    card.style.backgroundColor = subject.cardColor;
    card.textContent = subject.subjectTitle;

    // Click handler for subject
    card.addEventListener("click", () => {
      const type = document.querySelector("#exam-type").value;
      const year = document.querySelector("#exam-year").value;

      const subjectParam = encodeURIComponent(subject.subjectTitle);
      const url = `questions.html?subject=${subjectParam}&year=${year}&type=${type}`;
      window.location.href = url;
    });

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadArtsSubjects();
});

