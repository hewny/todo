import { $taskName, $taskDesc, $taskDate } from "./../index";
import { renderSidebarProjects, toggleAddTask, updateProjects } from "./ui";

var $project = 'Inbox'

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

class Task {
    constructor(title,description,date,status,project) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.status = status;
        this.project = project
        this.descriptionFlag = false;
    }

    updateStatus() {
        if (this.status === false) {
            this.status = true
        } else {
            this.status = false
        }
    }
    updateDescriptionFlag() {
        if (this.descriptionFlag === false) {
            this.descriptionFlag = true
        } else {
            this.descriptionFlag = false
        }
    }
}

function addProj() {
    if (document.getElementById('proj-input').value === "") {
        alert('Project Name is required')
    } else {
        $user.addProject(document.getElementById('proj-input').value)
        updateLocalStorage()
        updateProjects()
    }
}
function addTask() {
    if ($taskName.value === "") {
        alert('Task Name is required')
    } else {
        var tempTask = new Task($taskName.value, `Details: ${$taskDesc.value}`, $taskDate.value, false, $project)
        $user.addTask(tempTask)
        updateLocalStorage()
        
        $taskName.value = "";
        $taskDesc.value = "";
        $taskDate.value = "2021-07-31"
        toggleAddTask()
    }
}

function storageAvailable(type) {
	var storage;
	if (localStorage.length !== 0) {
		try {
			storage = window[type];
			var x = '__storage_test__';
			storage.setItem(x, x);
			storage.removeItem(x);
			return true;
		}
		catch(e) {
			return e instanceof DOMException && (
				// everything except Firefox
				e.code === 22 ||
				// Firefox
				e.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				e.name === 'QuotaExceededError' ||
				// Firefox
				e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
				// acknowledge QuotaExceededError only if there's something already stored
				(storage && storage.length !== 0);
		}
	}
}

var $user = new User

function updateLocalStorage() {
    if ($user.length === 0) {
        localStorage.removeItem('localTasks')
    } else {
        localStorage.setItem('localTasks', JSON.stringify($user))
    }
}

appInit()

function appInit() {
    if (storageAvailable('localStorage')) {
        let tempUser = JSON.parse(localStorage.getItem('localTasks'));

        tempUser.projects.forEach (project => {
            $user.addProject(project)
        })

        tempUser.tasks.forEach( task => {
            let newTask = new Task(task.title, task.description, task.date, task.status, task.project)
            $user.addTask(newTask)
        })
      } 
      else {
        $user = new User
      }
}

function updateCurrentProject(index) {
    if (index === 'inbox') {
        $project = 'Inbox'
    } else {
        $project = $user.projects[index]
    }
}

console.log($user)

export {User, Task, addProj, addTask, updateLocalStorage, updateCurrentProject, $user, $project}