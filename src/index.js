import "./styles.css";
import { createHome } from "./pages/home";
import { createAbout } from "./pages/about";
import { createMenu } from "./pages/menu";

function cleanContent() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.classList = [];
}

function displayNewPage(pageFunction) {
    cleanContent();
    pageFunction();
}

createHome();

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homeBtn.addEventListener("click", () => {
    displayNewPage(createHome);
});

aboutBtn.addEventListener("click", () => {
    displayNewPage(createAbout);
});

menuBtn.addEventListener("click", () => {
    displayNewPage(createMenu);
})