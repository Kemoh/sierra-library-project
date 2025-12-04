import { createElement} from "../js/utils";

import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Counter from "./Counter";

export function initRouter(mainView) {
    function updateView(newView) {
        mainView.innerHTML = "";
        mainView.appendChild(newView);
    }

    function hashToRoute(hash) {
        switch (hash) {
            case "#/page1": updateView(Page1());
                break;

            case "#/page2": updateView(Counter());
                break;

            case "#/page3": updateView(Page3());
                break;
        
            default: updateView(createElement("h3", { textContent: "404 Page Not Found"}));
                break;
        }
    }

    const defaultHash = window.location.hash || "#/page1";
    hashToRoute(defaultHash);

    window.addEventListener("hashchange", (event) => {
        const newURL = new URL(event.newURL);
        const hash = newURL.hash;

        hashToRoute(hash);
    });
}

