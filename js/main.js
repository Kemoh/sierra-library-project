// Main entry file
import { loadHeaderFooter } from "./utils.mjs";
import { loadapps } from "./apps.mjs";

// Wait for the DOM to be ready before injecting content
document.addEventListener("DOMContentLoaded", () => {
  loadHeaderFooter();
  loadapps();
});
