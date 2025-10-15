// Load subjects
import { scilist } from "../data/sci-subjects.js";
import { loadItems } from "./utils.mjs";
import { fetchScienceQuestions } from "./fetchSciSubjects.mjs";


export function sciPage() {
    loadItems(scilist, "#subject-type", "science");
}
sciPage();

// Listen for click on the "Open Science" button
document.addEventListener("click", async (e) => {
  // The ID matches what loadItems() gives the link: id="science-link"
  if (e.target && e.target.id === "science-link") {
    e.preventDefault();

    // Grab the subject title from the modal header (set by loadItems)
    const subject = document.querySelector("#science-title")?.textContent?.trim();
    if (!subject) return alert("No subject selected.");

    // show a loading message
    e.target.textContent = "Loading...";
    e.target.disabled = true;

    // Fetch from ALOC API
    const success = await fetchScienceQuestions(subject);

    // Reset button
    e.target.textContent = "Open Science";
    e.target.disabled = false;

    if (success) {
      window.location.href = "/app/questions.html";
    }
  }
});
