import titouanImage from "../../assets/titouan.png"

function createHome () {
    const content = document.querySelector("#content");
    content.classList.add("home");
    
    const title = document.createElement("h1");
    title.classList.add("restaurant-name", "fredoka-base");
    title.textContent = "Titouan restaurant";
    content.appendChild(title);

    const image = document.createElement("img");
    image.src = titouanImage;
    image.alt = "bear image";
    image.classList.add("home-image");
    content.appendChild(image);

    const paragraphe = document.createElement("p");
    paragraphe.textContent = "At Titouan, we live life in pink!";
    content.appendChild(paragraphe);
};

export { createHome };