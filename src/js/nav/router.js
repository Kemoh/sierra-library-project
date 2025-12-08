import { createElement} from "../components/utils";

import Indexpage from "../pages/page1";
import Exampal from "../pages/page2";
import Liblocate from "../pages/page3";
import ContactUs from "./contactPage";
import AboutUs from "./aboutPage";


export function initRouter(mainView) {
    function updateView(newView) {
        mainView.innerHTML = "";
        try {
             mainView.appendChild(newView);
        } catch {
             mainView.appendChild(createElement("h3", { textContent: "Error loading view" }));
             console.error(err);
        }
       
    }

    function hashToRoute(hash) {
        switch (hash) {
            case "":
            case "#":
            case "#/pages/page1": updateView(Indexpage());
                break;

            case "#/pages/page2": updateView(Exampal());
                break;

            case "#/pages/page3": updateView(Liblocate());
                break;

            
        
            default: updateView(createElement("h3", { textContent: "404 Page Not Found"}));
                break;
        }
    }

    const defaultHash = window.location.hash || "#/pages/page1";
    hashToRoute(defaultHash);

    window.addEventListener("hashchange", (event) => {
        const newURL = new URL(event.newURL);
        const hash = newURL.hash;

        hashToRoute(hash);
    });
}

