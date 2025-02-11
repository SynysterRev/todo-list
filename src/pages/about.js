function createAbout () {
    const content = document.querySelector("#content");
    content.classList.add("about");
    const paragraphe = document.createElement("p");
    paragraphe.textContent = "If your little one is a bit hungry, drop by Titouan Restaurant!"
    content.appendChild(paragraphe);
}

export { createAbout }