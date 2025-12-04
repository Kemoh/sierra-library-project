import { createElement, insertItemTemplate, triggerAnimation } from "../js/utils";
import { appslist } from "../data/apps-data";

function page1Content() {
  // Import Image Using Parcel method
  const heroSmall = new URL("../images/sierralibrary-sm.webp", import.meta.url).href;
  const heroLarge = new URL("../images/sierralibrary-lg.webp", import.meta.url).href;

  // Hero Image
  const heroImage = createElement("img", {
    src: heroSmall,
    srcset: `${heroSmall} 500w, ${heroLarge}`,
    alt: "Library learners",
    className: "hero-image"
  });

  // Mission Statement
  const mission = createElement("p", {
    textContent:
      "Our mission is to provide learners with digital study tools and learning resources wherever they are!",
  });

  // Insert Mission Statement 
  const missionContainer = createElement("div", {
    className: "mission-container"
  }, [mission]);

  // Insert heroImage inside heroContainer
  const heroContainer = createElement(
    "div",
    { className: "hero-container" },
    [heroImage, missionContainer]
  );

  // Heading
  const heading = createElement("h1", {
    className: "heading",
    textContent: "Library Apps",
  });

  // Placeholder For Apps
  const appsContainer = createElement("div", {
    className: "apps-container",
    id: "library-apps",
  });

  // Section Container 
  const section = createElement(
    "section",
    { className: "hero-section" },
    [heroContainer, heading, appsContainer]
  );

  // Render App Cards into appsContainer
  requestAnimationFrame(() => {
    insertItemTemplate(appslist, "#library-apps", "app");

    triggerAnimation("animate-app");
  });

  return section;
  
}

export default page1Content;
