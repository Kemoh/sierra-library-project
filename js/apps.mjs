// Import apps list
import { appslist } from "../data/appsdata.js";

// Function to load apps
export function loadapps() {
    // Create and inject HTML template for apps
    document.querySelector("#sierralib-apps").innerHTML = `
      <section class="min-h-screen bg-gray-950 text-white px-6 py-10">
        
      <div id="show-app-cards" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"></div>

        <dialog id="app-dialog" class="rounded-2xl p-6 bg-gray-900 text-gray-100 shadow-2xl w-11/12 max-w-md">
          <div class="flex justify-between items-center mb-4">
            <h2 id="app-title" class="text-xl font-semibold"></h2>
            <button id="close-btn" class="text-gray-400 hover:text-white text-lg font-bold">&times;</button>
          </div>
          
          <p id="app-description" class="text-sm text-gray-300 mb-6"></p>
          
          <a id="streams-btn" href="#" target="_blank"
            class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium text-white">
              Open App
          </a>
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
    appslist.forEach((app, index) => {
         // Add class to the card for styling
        const colorClass = app.cardColor; 

        const card = document.createElement("div");
        
        // Create rounded borders and animation
        card.className =
            `${colorClass} rounded-2xl p-4 flex flex-col items-center shadow-lg hover:shadow-blue-500/30 transition duration-300 cursor-pointer h-full
             opacity-0 animate-fade-in`;
        
        // Apply animation
        card.style.animationDelay = `${index * 0.1}s`;

        // Image
        const img = document.createElement("img");
        img.src = app.appImage;
        img.alt = `${app.appName} logo`;
        img.className = "rounded-lg mb-3 w-52 h-52 object-cover";

        // Title
        const modalTitle = document.createElement("h2");
        modalTitle.textContent = app.appName;
        modalTitle.className = "text-lg font-semibold mb-2 text-center mt-auto";

        // Store app data in dataset on the CARD
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
        card.appendChild(modalTitle);
        card.appendChild(img);
        cardsContainer.appendChild(card);
    });
}