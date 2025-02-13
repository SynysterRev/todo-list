class Project {
    #name;
    #tasks;

    constructor(name) {
        this.#name = name;
        this.#tasks = [];
    }

    addTask(task) {
        if (task instanceof Task)
            this.#tasks.push(task);
    }

    removeTask(task) {
        if (task instanceof Task) {
            const index = this.#tasks.indexOf(task);
            if (index > -1) {
                this.#tasks.splice(index, 1);
            }
        }
    }

    getTasks() {
        return this.#tasks;
    }

    get name() {
        return this.#name;
    }
}

export default Project;