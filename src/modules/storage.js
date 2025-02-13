import Project from "../classes/project.js"

const Storage = (() => {
    const saveProjects = (projects) => {
        if (storageAvailable("localStorage")) {
            localStorage.setItem("projects", JSON.stringify(projects));
        } 
    }

    const loadProjects = () => {
        if (storageAvailable("localStorage")) {
            const projects = JSON.parse(localStorage.getItem("projects"));
            return projects ? projects : [];
        } 
    }

    return { saveProjects, loadProjects};
})();

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            e.name === "QuotaExceededError" &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

export default Storage;
