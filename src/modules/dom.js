import { $user, addProj, addTask, updateCurrentProject, updateLocalStorage } from "./storage";
import { updateProjects, updateHeader, updateTaskList, addNewProjectFields, toggleAddTaskContainer } from "./ui";

function createIcon(name, id) {
    var newIcon = document.createElement('i');
    newIcon.classList.add('material-icons-outlined');
    newIcon.textContent = name;

    if (id!==null) {
        newIcon.id = id
    }

    return newIcon
}

function createElement(type,classes,id,icon,text) {
    var tempElement = document.createElement(type)
    if (classes!==null) {
        tempElement.classList.add(classes)
    }
    if (id!==null) {
        tempElement.id = id
    }
    if (icon!==null) {
        var tempIcon = createIcon(icon)
        tempElement.append(tempIcon)
    }
    if (text!==null) {
        tempElement.innerHTML += text
    }

    return tempElement
}

function createInput(type, inputType, id, inputName, inputPlaceholder, inputValue, inputFor, text) {
    var tempInput = document.createElement(type)
    if (inputType!==null) {
        tempInput.setAttribute('type',inputType)
    }
    if (id!==null) {
        tempInput.id = id
    }
    if (inputName!==null) {
        tempInput.setAttribute("name",inputName)
    }
    if (inputPlaceholder!==null) {
        tempInput.setAttribute("placeholder", inputPlaceholder)
    }
    if (inputValue!==null) {
        tempInput.setAttribute("value", inputValue)
    }
    if (inputFor!==null) {
        tempInput.setAttribute("for", inputFor)
    }
    if (text!== null) {
        tempInput.innerHTML = text
    }

    return tempInput
}

window.addEventListener('click', (e) => {
    console.log(e.target.id)
    if (e.target.id === 'add-new-task' || e.target.id === 'add-task-overlay') {
        toggleAddTaskContainer()
    }
    if (e.target.id === 'add-new-project') {
        addNewProjectFields()
    }
    if (e.target.id === 'proj-btn-add') {
        addProj()
    }
    if (e.target.id === 'proj-btn-cancel') {
        updateProjects()
    }
    if (e.target.id === 'add-task') {
        addTask()
        $user.sortTasks()
        updateTaskList()
    }
    if (e.target.id === 'inbox') {
        updateCurrentProject('inbox')
        updateHeader()
        updateTaskList()
    }
    if (e.target.id === 'today') {
        updateCurrentProject('today')
        updateHeader()
        updateTaskList()
    }
    if (e.target.id === 'this-week') {
        updateCurrentProject('this-week')
        updateHeader()
        updateTaskList()
    }
    if (e.target.id.substring(0,8) === 'projname') {
        $user.sortTasks()
        updateCurrentProject(e.target.id.substring(8))
        updateHeader()
        updateTaskList()
    }
    if (e.target.id.substring(0,8) === 'projhead') {
        $user.removeProject(e.target.id.substring(8))
        updateLocalStorage()
        updateCurrentProject('inbox')
        updateProjects()
        updateHeader()
        updateTaskList()
    }
    if (!isNaN(Number.parseInt(e.target.id))) {
        if (e.target.tagName === 'I' && e.target.innerText === 'delete') {
            $user.removeTask(e.target.id);
        }
        else if (e.target.tagName === 'I' && (e.target.innerText === 'radio_button_unchecked'||e.target.innerText === 'check_circle')) {
            $user.tasks[e.target.id].updateStatus()
            $user.sortTasks()
            updateTaskList()
        }
        else {
            $user.tasks[e.target.id].updateDescriptionFlag()
        }
    }
})

export {
    createIcon, 
    createElement, 
    createInput,
}