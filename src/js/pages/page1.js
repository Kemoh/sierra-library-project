import { createElement, insertItemTemplate, triggerAnimation } from "../components/utils";
import { appList } from "../../data/applist";

function IndexPage() {
  // Mission Statement
  const mission = createElement("p", {
    textContent:
      "Our mission is to provide learners with digital study tools and learning resources wherever they are!",
  });

  const missionContainer = createElement("div", {
    className: "mission-container"
  }, [mission]);

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
  const section = createElement("section", { className: "page1-container hero-section" }, [
    missionContainer,
    heading,
    appsContainer
  ]);

  // Render App Cards into appsContainer
  requestAnimationFrame(() => {
    insertItemTemplate(appList, "#library-apps", "app");
    triggerAnimation("animate-app");
  });

  return section;
}

export default IndexPage;
