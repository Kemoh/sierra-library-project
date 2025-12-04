// Wrapper function for querySelector
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// Create Element Helper
export function createElement(type, props = {}, children = []) {
  const element = document.createElement(type);

  for (const [key, value] of Object.entries(props)) {
    if (key === "textContent") element.textContent = value;
    else if (key === "innerHTML") element.innerHTML = value;
    else if (key === "className") element.className = value;
    else if (key === "dataset") {
      Object.entries(value).forEach(([dkey, dval]) => {
        element.dataset[dkey] = dval;
      });
    }
    else if (key.startsWith("on") && typeof value === "function") {
      element.addEventListener(key.substring(2).toLowerCase(), value);
    }
    else element.setAttribute(key, value);
  }

  children.forEach((child) => {
    element.appendChild(child);
  });

  return element;
}


// Function for Hamburger Button
export function hamburgerButton() {
  const hamButton = qs("#ham-btn");
  const navBar = qs("#animateme");

  if (hamButton && navBar) {
    hamButton.addEventListener("click", () => {
      hamButton.classList.toggle("show");
      navBar.classList.toggle("show");
    });
  }
}


// Apps Template
export function createItemTemplate(type) {
  // Title
  const title = createElement("h3", {
    id: `${type}-title`,
  });

  // Close Button
  const closeBtn = createElement("button", {
    id: `close-${type}-btn`,
    className: "close-btn",
    textContent: "x",
  });

  // Dialog Header
  const dialogHeader = createElement(
    "div",
    { className: "dialog-header" },
    [title, closeBtn]
  );

  // Description
  const description = createElement("p", {
    id: `${type}-description`,
  });

  // Navigation Button
  const link = createElement("a", {
    id: `${type}-link`,
    href: "#",
    className: "open-btn",
    textContent: `Open ${type}`,
  });

  // Dialog Container
  const dialog = createElement(
    "dialog",
    {
      id: `${type}-dialog`,
      className: `${type}-dialog`,
    },
    [dialogHeader, description, link]
  );

  // Cards container
  const cardsGrid = createElement("div", {
    id: `show-${type}-cards`,
    className: "cards-grid",
  });

  // Section container
  const section = createElement(
    "section",
    { className: `${type}-section` },
    [cardsGrid, dialog]
  );

  return section;
}


// Insert Item Template
export function insertItemTemplate(dataList, containerSelector, type = "apps") {
  const parent = qs(containerSelector);
  if (!parent) return; 
  
  console.warn(`Container ${containerSelector} not found.`);

  // Build the template section
  const section = createItemTemplate(type);
  parent.append(section);

  // Get dynamic elements
  const dialog = qs(`#${type}-dialog`);
  const title = qs(`#${type}-title`);
  const description = qs(`#${type}-description`);
  const openLink = qs(`#${type}-link`);
  const closeBtn = qs(`#close-${type}-btn`);
  const cardsContainer = qs(`#show-${type}-cards`);

  
  // Smooth CLOSE animation
  closeBtn.addEventListener("click", () => {
    dialog.classList.add("closing");
    dialog.classList.remove("open");

    setTimeout(() => {
      dialog.close();
      dialog.classList.remove("closing");
    }, 350);
  });

  // Generate card for each item
  dataList.forEach((item) => {
    const card = createElement("div", {
      className: `${type}-card`,
      style: `background-color: ${item.cardColor || "#efefef"};`,
      dataset: {
        title: item.appName || item.subjectName,
        description: item.appDescription || item.subjectDescription,
        link: item.streamLink || item.subjectLink,
      },
      onclick: () => {
        // Set dialog content
        title.textContent = card.dataset.title;
        description.textContent = card.dataset.description;
        openLink.href = card.dataset.link;

        // Smooth OPEN animation
        dialog.showModal();
        dialog.classList.add("open");
        dialog.classList.remove("closing");
      },
    });

    const img = createElement("img", {
      src: item.appImage || item.subjectImage || item.subjectIcon,
      alt: card.dataset.title,
      className: `${type}-image`,
    });

    const cardTitle = createElement("h2", {
      textContent: card.dataset.title,
    });

    card.append(cardTitle, img);
    cardsContainer.appendChild(card);
  });
}

// Function to trigger slideUp animation
export function triggerAnimation(className) {
  document.body.classList.add(className);
}

// Open Modal with Animation
export function openModal(params) {
  
}
