// 

import { createElement} from "./utils.mjs";

const hello = createElement("h1", {textContent: "Hello World!"});
document.getElementById("root").appendChild(hello);
