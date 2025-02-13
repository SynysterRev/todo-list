const Priority = Object.freeze({
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high"
});

class Task {

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isCompleted = false;
    }

    get title() {
        return this.title;
    }

    get description() {
        return this.description;
    }

    get dueDate() {
        return this.dueDate;
    }

    get priority() {
        return this.priority;
    }

    changeCompletion() {
        this.isCompleted = !this.isCompleted;
    }
}