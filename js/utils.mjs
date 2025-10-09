// ===============================
//  Hamburger Menu Setup
// ===============================
export function setupHamburgerMenu() {
    const hamButton = document.querySelector("#ham-btn");
    const navBar = document.querySelector("#animateme");

    if (hamButton && navBar) {
        hamButton.addEventListener('click', () => {
            hamButton.classList.toggle('show');
            navBar.classList.toggle('show');
        });
    }
}

// ===============================
//  Load HTML Template
// ===============================
export async function loadTemplate(path) {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Failed to load template: ${path}`);
    }
    return await response.text();
}

// ===============================
//  Render Template into DOM
// ===============================
export function renderTemplate(template, targetElement) {
    targetElement.innerHTML = template;
}

// ===============================
//  Load Header & Footer
// ===============================
export async function loadHeaderFooter() {
    try {
        // create path
        const basePath = window.location.origin + window.location.pathname.split("/").slice(0, -1).join("/") + "/";

        const headerUrl = basePath + "header.html";
        const footerUrl = basePath + "footer.html";

        // Fetch template content
        const headerTemplate = await loadTemplate(headerUrl);
        const footerTemplate = await loadTemplate(footerUrl);

        // Insert into DOM
        const headerElement = document.getElementById("main-header");
        const footerElement = document.getElementById("main-footer");

        if (headerElement && footerElement) {
            renderTemplate(headerTemplate, headerElement);
            renderTemplate(footerTemplate, footerElement);
            setupHamburgerMenu();
        }
    } catch (err) {
        console.error("Failed to load header/footer templates:", err);
    }
}
