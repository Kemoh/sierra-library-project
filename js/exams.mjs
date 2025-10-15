// Load subjects
import { examlist } from "../data/exams.js";
import { loadItems } from "./utils.mjs";

export function examsPage() {
    loadItems(examlist, "#exam-type", "exam");
}
examsPage();
