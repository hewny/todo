class User {
    constructor() {
        this.tasks = []
        this.projects = []
    }

    addTask(obj) {
        this.tasks.push(obj)
    }

    removeTask(index) {
        this.tasks.splice(index,1)
    }

    addProject(name) {
        this.projects.push(name)
    }

    removeProject(index) {
        this.projects.splice(index,1)
    }
}

export {User}