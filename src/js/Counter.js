import { createElement } from "../js/utils";

function Counter() {
    function updateCount(element, count) {
        element.textContent = count;
    }

    let count = 0;

    const label = createElement("label", {
        className: "counter-label",
        textContent: count,
    });

    const labelContainer = createElement("div", {}, [label]);

    const increButton = createElement("button", {
        className: "counter-button",
        textContent: "+",
    });

    const decreButton = createElement("button", {
        className: "counter-button",
        textContent: "-",
    });

    increButton.addEventListener("click", () => updateCount(label, ++count));
    decreButton.addEventListener("click", () => updateCount(label, --count));

    const footer = createElement("footer", {className: "counter-footer"}, [increButton, decreButton]);

    return createElement("div", { className: "counter"}, [labelContainer, footer]);
}

export default Counter;