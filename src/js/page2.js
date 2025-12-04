import { createElement } from "../js/utils";

function Page2() {
    const title = createElement("h2", { textContent: "Page 2"});

    const page3Link = createElement("a", {
        href: "/#/page3",
        textContent: "Link to Page 3"
    });

    return createElement("div", {}, [title, page3Link]);
}
export default Page2;