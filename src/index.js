import css from './style.css';
import { User, Task, addTask } from './modules/storage';
import { renderNav, renderFooter, renderSidebar, renderTasks, renderTaskList, toggleAddTask, toggleTaskDescription } from './modules/ui';

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


const $user = new User

var tempTask = new Task('temp title','temp description','2021-07-23',false)
$user.addTask(tempTask)

renderNav();
renderSidebar();
renderTasks();
renderFooter();

window.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.id === 'add-new-task' || e.target.id === 'add-task-overlay') {
        toggleAddTask()
    }
    if (e.target.id === 'add-task') {
        addTask()
        renderTaskList()
    }
    if (Number.parseInt(e.target.id)!==NaN) {
        toggleTaskDescription(Number.parseInt(e.target.id))
    }
})

const $addTaskOverlay = document.getElementsByClassName('add-task-overlay')
const $addTaskContainer= document.getElementsByClassName('add-task-container')
const $taskListContainer = document.getElementById('task-list-container')
const $taskName = document.getElementById('task-name')
const $taskDesc = document.getElementById('task-desc')
const $taskDate = document.getElementById('task-date')

renderTaskList()

export {$container, createIcon, createElement, createInput, $user, $addTaskOverlay, $addTaskContainer, $taskListContainer, $taskName, $taskDesc, $taskDate}