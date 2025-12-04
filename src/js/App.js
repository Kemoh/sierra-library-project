import { createElement, hamburgerButton } from "../js/utils";
import { initRouter } from "./router";

// Use new URL() for Parcel to process SVG
const sierraLogo = new URL("../images/online-library-logo.svg", import.meta.url).href;

// Header 
function Header() {
  // Logo image
  const logoImage = createElement("img", {
    src: sierraLogo,
    alt: "Sierra Library Logo",
    className: "logo-img"
  });

  // Library first name
  const firstName = createElement("span", { textContent: "Sierra" });

  // Library second name
  const secondName = createElement("span", {
  textContent: "Library",
  className: "second-name"
  });

  // Wrap logo image and name in an <a> tag
  const logoNameLink = createElement("a", { href: "./index.html", 
  className: "logo-link" }, 
  [logoImage, firstName, secondName]
  );

  // Hamburger button
  const hamButton = createElement("button",{id: "ham-btn",
   className: "ham-menu", "aria-label": "Hamburger Button"
  });

  // Navigation list
  const navList = createElement("ul", { className: "nav-animate" }, 
  [createElement("li", {}, [createElement("a", { className: "active", href: "./index.html", textContent: "Home" })
    ]),
  createElement("li", {}, [createElement("a", { href: "/#/contactPage/", textContent: "Contact Us" })
    ]),
  createElement("li", {}, [createElement("a", { href: "/#/aboutPage", textContent: "About Us" })
    ])
  ]);

  // nav
  const nav = createElement("nav", { id: "animateme", className: "navigation" }, [navList]);

  // Header container
  return createElement("header", { className: "header-container" }, [logoNameLink, hamButton, nav,]);
}

// Main Content
// function mainContent() {
//   const page1 = createElement("a", { href: "/#/page1" });

//   const page2 = createElement("a", { href: "/#/page2" });
  
//   const page3 = createElement("a", { href: "/#/page3" });

//   const nav = createElement("nav", {}, [page1, page2, page3]);

//   return createElement("main", {}, [nav]);
// }

// Footer
function Footer() {
  const copyright = createElement("span",
  {textContent: `© ${new Date().getFullYear()}`, className: "copy-write" },       [createElement("span", {textContent: "🏛️WDD 330 | Final Project | BYU-Idaho🏛️", className: "final-project"
    })
    ]
  );

  return createElement("footer", {}, [copyright]);
}

// App
function App() {
  const main = createElement("main", {}, []);

  initRouter(main);

  const appContainer = createElement("div", {}, [Header(), main, Footer()]);

  // Attach hamburger toggle once header is in DOM
  requestAnimationFrame(() => {
    hamburgerButton();
  });

  return appContainer;
}

export default App;
