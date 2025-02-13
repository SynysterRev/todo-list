import TodoController from "./todoController";

function createTest() {
    const content = document.querySelector("#content");
    const btn = document.createElement("button");
    btn.addEventListener("click", () => {
        if (!TodoController.doesProjectExist("test"))
            TodoController.createProject("test")
        else
            alert("A project with this name already exists");
    });
    btn.textContent = "Click me";
    content.appendChild(btn);
}

export default createTest;