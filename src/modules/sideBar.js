import TodoController from "./todoController";

const handleNewProject = () => {
    const newProjectBtn = document.querySelector("#new-project-button")?.addEventListener("click", () => {
        document.querySelector("#new-project-name")?.classList.toggle("hidden");
        document.querySelector("#new-project-button")?.classList.toggle("hidden");
    });
    document.querySelector("#cancel-project-name")?.addEventListener("click", () => {
        document.querySelector("#new-project-name")?.classList.toggle("hidden");
        document.querySelector("#new-project-button")?.classList.toggle("hidden");
    });
    document.querySelector("#validate-project-name")?.addEventListener("click", () => {
        const projectName = document.querySelector("#project-name")?.value;
        if (!TodoController.doesProjectExist(projectName)) {
            const newProject = TodoController.createProject(projectName);
            // add project on the sidebar
            const projectsList = document.querySelector("#projects-list");
            const projectElement = document.createElement("h2");
            projectElement.textContent = newProject.name;
            projectsList.appendChild(projectElement);
            document.querySelector("#new-project-name")?.classList.toggle("hidden");
            document.querySelector("#new-project-button")?.classList.toggle("hidden");
        }
        else {
            alert("A project with this name already exists");
        }
    });
}

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

export default handleNewProject;