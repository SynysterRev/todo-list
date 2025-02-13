import Project from "../classes/project";
import Storage from "./storage";

const TodoController = (() => {
    let projects = Storage.loadProjects();

    const addTask = (projectName, task) => {
        const project = projects.find(p => p.name === projectName);
        if (project) {
            project.addTask(task);
            Storage.saveProjects(projects);
        }
    }

    const deleteTask = (projectName, task) => {
        const project = projects.find(p => p.name === projectName);
        if (project) {
            project.removeTask(task);
            Storage.saveProjects(projects);
        }
    }

    const createProject = (name) => {
        const newProject = new Project(name);
        if (newProject) {
            projects.push(newProject);
            Storage.saveProjects(projects);
            return newProject;
        }
    }

    const deleteProject = (name) => {
        if (project instanceof Project) {
            const index = projects.indexOf(project);
            if (index > -1) {
                projects.splice(index, 1);
                Storage.saveProjects(projects);
            }
        }
    }

    const doesProjectExist = (name) => {
        return projects.filter(p => p.name === name).length > 0;
    }

    return { addTask, deleteTask, createProject, deleteProject, doesProjectExist };
})();

export default TodoController;