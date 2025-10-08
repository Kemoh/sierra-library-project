// Setup hamburger menu event listener after header is loaded
export function setupHamburgerMenu() {
    // Select the navigation DOM elements for output
    const hamButton = document.querySelector("#ham-btn");
    const navBar = document.querySelector("#animateme");
    // Toggle the hamButton and the navBar on and off
    if (hamButton && navBar) {
        hamButton.addEventListener('click', () => {
            hamButton.classList.toggle('show');
            navBar.classList.toggle('show');
        });
    }
}


// Loads the content of an HTML template file
export async function loadTemplate(path) {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Failed to load template: ${path}`);
    }
    return await response.text();
}

// Renders the template string into the target DOM element
export function renderTemplate(template, targetElement) {
    targetElement.innerHTML = template;
}

// Load Header and Footer Templates into DOM
export async function loadHeaderFooter() {
    try {
        // Resolve partial paths relative to this module so fetch works regardless of page location
        const headerUrl = new URL('/header.html', import.meta.url).href;
        const footerUrl = new URL('/footer.html', import.meta.url).href;

        const headerTemplate = await loadTemplate(headerUrl);
        const footerTemplate = await loadTemplate(footerUrl);

        // Select elements in the DOM for output
        const headerElement = document.getElementById("main-header");
        const footerElement = document.getElementById("main-footer");

        // Call the renderTemplate function to render the elements in the DOM
        if (headerElement && footerElement) {
            renderTemplate(headerTemplate, headerElement);
            renderTemplate(footerTemplate, footerElement);
            // Setup hamburger menu after header is rendered
            setupHamburgerMenu();
        }
    } catch (err) {
        console.error('Failed to load header/footer templates:', err);
    }
}


