// Import apps list
import { appslist } from "../data/appsdata.js";

// Function to load apps
export function loadapps() {
    // Create and inject HTML structure for apps
    document.querySelector("#sierralib-apps").innerHTML = `
      <section class="apps-section">
        <div id="show-app-cards" class="cards-grid"></div>

        <dialog id="app-dialog" class="app-dialog">
          <div class="dialog-header">
            <h3 id="app-title"></h3>
            <button id="close-btn" class="close-btn">&times;</button>
          </div>
          
          <p id="app-description"></p>
          <a id="streams-btn" href="#" target="_blank" class="open-btn">Open App</a>
        </dialog>
      </section>
    `;

    // Get modal and container elements
    const dialog = document.querySelector("#app-dialog");
    const title = document.querySelector("#app-title");
    const description = document.querySelector("#app-description");
    const streamsBtn = document.querySelector("#streams-btn");
    const closeBtn = document.querySelector("#close-btn");
    const cardsContainer = document.querySelector("#show-app-cards");

    // Close dialog
    closeBtn.addEventListener("click", () => dialog.close());

    // Loop through appslist and create cards
    appslist.forEach((app) => {
        const card = document.createElement("div");
        card.classList.add("app-card");

        // Set card background color from dataset
        card.style.backgroundColor = app.cardColor;

        // Image
        const img = document.createElement("img");
        img.src = app.appImage;
        img.alt = `${app.appName} logo`;
        img.classList.add("app-image");

        // Title
        const cardTitle = document.createElement("h2");
        cardTitle.textContent = app.appName;

        // Store app data in dataset
        card.dataset.appName = app.appName;
        card.dataset.appDescription = app.appDescription;
        card.dataset.streamLink = app.streamLink;

        // Card click handler
        card.addEventListener("click", () => {
            title.textContent = card.dataset.appName;
            description.textContent = card.dataset.appDescription;
            streamsBtn.href = card.dataset.streamLink; 
            dialog.showModal();
        });

        // Append elements
        card.appendChild(cardTitle);
        card.appendChild(img);
        cardsContainer.appendChild(card);
    });
}
