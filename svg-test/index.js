import logoUrl from "./logo.svg?url";
console.log("Logo import value:", logoUrl);


const img = document.createElement("img");
img.src = logoUrl.default || logoUrl;

img.alt = "Test Logo";
img.style.width = "150px";

document.body.appendChild(img);
