import { menuData } from "../data/menuData";

function createMenu() {
    const content = document.querySelector("#content");
    content.classList.add("menu");

    function displayItem(item) {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item");
        content.appendChild(itemDiv);

        const name = document.createElement("h2");
        name.textContent = item.name;
        itemDiv.appendChild(name);

        const image = document.createElement("img");
        image.src = item.image;
        itemDiv.appendChild(image);

        const description = document.createElement("p");
        description.textContent = item.description;
        itemDiv.appendChild(description);

        const price = document.createElement("p");
        price.textContent = item.price;
        itemDiv.appendChild(price);
    }
    menuData.forEach((item) => displayItem(item));
}

export { createMenu }