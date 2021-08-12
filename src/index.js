import css from './style.css';
import { $user, addProj, addTask, updateCurrentProject, updateLocalStorage} from './modules/storage';
import { initContainers, updateProjects, updateHeader, updateTaskList, renderAddProject, toggleAddTask, removeTask, toggleTaskStatus, toggleTaskDescription } from './modules/ui';

var createContainer = document.createElement('div');
createContainer.id = 'container';
document.body.appendChild(createContainer);

const $container = document.getElementById('container');

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

initContainers();

window.addEventListener('click', (e) => {
    console.log(e.target.id)
    if (e.target.id === 'add-new-task' || e.target.id === 'add-task-overlay') {
        toggleAddTask()
    }
    if (e.target.id === 'add-new-project') {
        renderAddProject()
    }
    if (e.target.id === 'proj-btn-add') {
        addProj()
    }
    if (e.target.id === 'proj-btn-cancel') {
        updateProjects()
    }
    if (e.target.id === 'add-task') {
        addTask()
        updateTaskList()
    }
    if (e.target.id === 'inbox') {
        updateCurrentProject('inbox')
        updateHeader()
        updateTaskList()
    }
    if (e.target.id.substring(0,8) === 'projname') {
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
            removeTask(e.target.id)
        }
        else if (e.target.tagName === 'I' && (e.target.innerText === 'radio_button_unchecked'||e.target.innerText === 'check_circle')) {
            toggleTaskStatus(e.target.id)
        }
        else {
            toggleTaskDescription(e.target.id)
        }
    }
})

const $sideBarContainer = document.getElementById('sidebar-container')
const $addTaskOverlay = document.getElementsByClassName('add-task-overlay')
const $addTaskContainer = document.getElementsByClassName('add-task-container')
const $headerContainer = document.getElementById('main-header')
const $taskListContainer = document.getElementById('task-list-container')
const $taskName = document.getElementById('task-name')
const $taskDesc = document.getElementById('task-desc')
const $taskDate = document.getElementById('task-date')

updateProjects()
updateHeader()
updateTaskList()

export {$container, createIcon, createElement, createInput, $sideBarContainer, $addTaskOverlay, $addTaskContainer, $taskListContainer, $headerContainer, $taskName, $taskDesc, $taskDate}