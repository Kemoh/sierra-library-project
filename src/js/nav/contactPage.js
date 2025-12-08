import { createElement } from "../components/utils.js";

function ContactUs() {
  const heading = createElement("h2", { textContent: "Contact Us" });
  const paragraph = createElement("p", {
    textContent: "You can reach us at support@sierralibrary.org or visit our campus office.",
  });

  return createElement("div", { className: "contact-page" }, [heading, paragraph]);
}

export default ContactUs;
