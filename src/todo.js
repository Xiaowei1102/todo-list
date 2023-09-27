class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    setComplete(isComplete) {
        this.isComplete = isComplete;
    }
    changePriority(priority) {
        this.priority = priority;
    }
}

export {Todo};