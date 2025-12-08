import { createElement } from "../components/utils";

// WELCOME MESSAGE
const welcomeMessage = createElement("h1", {
    className: "welcome-msg",
    textContent: "ExamPal",
  }, [createElement("p", {textContent: "Practice Makes Perfect!"})]);


// SUBJECT SELECT
const subjectSelect = createElement(
  "select",
  { id: "subject" },
  [
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
  ]
);

// YEAR SELECT
const yearSelect = createElement(
  "select",
  { id: "year" },
  [
    createElement("option", { value: "", textContent: "Select Year" }),
    ...[
      "2003","2004","2005","2006","2007","2008","2009",
      "2010","2011","2012","2013","2014","2015"
    ].map(year =>
      createElement("option", { value: year, textContent: year })
    )
  ]
);

// TYPE SELECT
const typeSelect = createElement(
  "select",
  { id: "type" },
  [
    createElement("option", { value: "", textContent: "Select Type" }),
    createElement("option", { value: "utme", textContent: "UTME" }),
    createElement("option", { value: "wassce", textContent: "WASSCE" }),
  ]
);

// MODE SELECT
const modeSelect = createElement(
  "select",
  { id: "mode" },
  [
    createElement("option", { value: "exam", textContent: "Exam Mode (Countdown)" }),
    createElement("option", { value: "practice", textContent: "Practice Mode (Count Up)" }),
  ]
);

// BUTTON
const fetchBtn = createElement("button", {
  id: "fetchBtn",
  textContent: "Fetch question"
});

// QUESTION DISPLAY
const questionDiv = createElement("div", {id: "question"}); 

// CONTROLS WRAPPER
export const controls = createElement(
  "div",
  { className: "controls" },
  [welcomeMessage, subjectSelect, yearSelect, typeSelect, modeSelect, fetchBtn, questionDiv]
);
