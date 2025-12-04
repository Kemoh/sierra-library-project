// Import WebP as URL
import testWebp from "./images/sierralibrary-lg.webp?url";
console.log("WebP import:", testWebp);


// Import SVG as URL
import testSvgUrl from "./images/online-library-logo.svg?url";

// Import SVG as raw XML
import testSvgRaw from "./images/online-library-logo.svg";

console.log("WebP import:", testWebp);
console.log("SVG URL import:", testSvgUrl);
console.log("SVG raw import:", testSvgRaw);

const app = document.getElementById("app");

// WebP image
const webpImg = document.createElement("img");
webpImg.src = testWebp;
webpImg.alt = "Test WebP";
app.appendChild(webpImg);

// SVG image (URL)
const svgImg = document.createElement("img");
svgImg.src = testSvgUrl;
svgImg.alt = "Test SVG URL";
app.appendChild(svgImg);

// Inline SVG (raw XML)
const svgInline = document.createElement("div");
svgInline.innerHTML = testSvgRaw;
app.appendChild(svgInline);