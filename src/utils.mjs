// Helper function for creating element and appending it
export function createElement(type, props = {}, children = []) {
// create elemnt
const element = document.createElement(type);

// props: {textContent : "Hello World!", id: "header1", "data-productId": 123, ...}
object.entries(props).forEach(([key, value]) => {
if(~key.indexOf("-")) {
element.setAttribute(key, value); // data attributes
} else {element[key] = value;
}
});

// loop the children elements
children.forEach(child) =>  {
element.appendChild(child);
});

return element;
}
