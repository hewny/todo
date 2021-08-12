import { $container, createElement, createInput, createIcon, $sideBarContainer, $taskListContainer, $addTaskOverlay, $addTaskContainer, $headerContainer } from "../index.js";
import { $user, $project, updateLocalStorage } from "./storage";

const defaultMenu = [
    {icon:"home", text:"Inbox", id:"inbox"},
    {icon:"event", text:"Today", id:"today"},
    {icon:"date_range", text:"This Week", id:"this-week"},
]

function initContainers() {
    _createNav()
    _createFooter()
    _createSidebar()
    _createMain()
}

function _createNav() {
    $container.appendChild(createElement('div','topnav-container',null,'done_outline','To-Do List'))
}
function _createFooter() {
    $container.appendChild(createElement('div','footer',null,null,'Created by Hewny'))
}
function _createSidebar() {
    $container.appendChild(createElement('div','sidebar-container','sidebar-container',null,null))
}
function _createMain() {
    var mainContainer = createElement('div','main-container','main-container',null,null)
    mainContainer.appendChild(_createAddTaskOverlay())
    mainContainer.appendChild(_createAddTaskContainer())
    mainContainer.appendChild(_createHeaderContainer())
    mainContainer.appendChild(_createTaskListContainer())
    $container.appendChild(mainContainer)
}

function _createAddTaskOverlay() {
    var addTaskOverlay = createElement('div','add-task-overlay','add-task-overlay',null,null)
    return addTaskOverlay
}

function _createAddTaskContainer() {
    var addTaskContainer = createElement('div','add-task-container',null,null,null)
    
    addTaskContainer.appendChild(createInput('label',null,null,null,null,null,'task-name','Name:*'))
    addTaskContainer.appendChild(createInput('input','text','task-name','task-name',"eg. Clean my room",null,null))
    addTaskContainer.appendChild(createInput('label',null,null,null,null,null,'task-desc','Details:'))
    addTaskContainer.appendChild(createInput('textarea','text','task-desc','task-desc',"eg. Vacuum floor and change bedsheets",null,null,null))
    addTaskContainer.appendChild(createInput('label',null,null,null,null,null,'task-date','Due Date:'))
    addTaskContainer.appendChild(createInput('input','date','task-date','task-date',null,"2021-07-31",null,null))
    addTaskContainer.appendChild(createElement('button',null,'add-task','add','Add Task'))
    return addTaskContainer
}

function _createHeaderContainer() {
    var mainHeader = createElement('div','main-header','main-header',null,null)
    return mainHeader
}

function _createTaskListContainer() {
    var taskListContainer = createElement('div','task-list-container','task-list-container',null,null)
    return taskListContainer
}

function updateProjects() {
    $sideBarContainer.innerHTML = ""

    defaultMenu.forEach ((menu) => {
        $sideBarContainer.appendChild(createElement('button',null,menu.id,menu.icon,menu.text))
     })

     $sideBarContainer.appendChild(createElement('h2',null,null,null,'Projects'))
     for (let i=0; i < $user.projects.length; i++) {
         $sideBarContainer.appendChild(createElement('button',null,`projname${i}`,'arrow_right',$user.projects[i]))
     }

     $sideBarContainer.appendChild(createElement('button',null,'add-new-project','add','Add new Project'))
}

function updateHeader() {
    $headerContainer.innerHTML = ""

    $headerContainer.appendChild(createElement('h3',null,null,null,$project))
    if ($project !== 'Inbox') {
        $headerContainer.appendChild(createIcon('clear',`projhead${$user.projects.indexOf($project)}`))
    }
    $headerContainer.appendChild(createElement('button',null,'add-new-task','add','Add new task'))
}

function updateTaskList() {
    $taskListContainer.innerHTML = ""

    if ($project === 'Inbox') {
        for (let i=0; i<$user.tasks.length; i++) {
            var task = createElement('div','task',i,null,null)
            var taskLeft = createElement('div','task-left',null,null,null)
            var taskRight = createElement('div','task-right',null,null,null)
            var taskDetails = createElement('div','task-details',null,null,null)
    
            if ($user.tasks[i].status === true) {
                taskLeft.appendChild(createIcon('check_circle',i))
                task.classList.add('task-completed')
                taskLeft.appendChild(createElement('p','line-through',i,null,$user.tasks[i].title))
                taskRight.appendChild(createElement('p','line-through',i,null,$user.tasks[i].date))
            } else {
                taskLeft.appendChild(createIcon('radio_button_unchecked',i))
                taskLeft.appendChild(createElement('p',null,i,null,$user.tasks[i].title))
                taskRight.appendChild(createElement('p',null,i,null,$user.tasks[i].date))
            }
            taskRight.appendChild(createIcon('delete',i))
            taskDetails.appendChild(createElement('p',null,i,null,$user.tasks[i].description))
    
            if ($user.tasks[i].descriptionFlag === true) {
                taskDetails.classList.add('show-div')
            }
            
            task.appendChild(taskLeft)
            task.appendChild(taskRight)
            task.appendChild(taskDetails)
    
            $taskListContainer.appendChild(task)
        }
    }

    for (let i=0; i<$user.tasks.length; i++) {
        if ($user.tasks[i].project === $project) {
            var task = createElement('div','task',i,null,null)
            var taskLeft = createElement('div','task-left',null,null,null)
            var taskRight = createElement('div','task-right',null,null,null)
            var taskDetails = createElement('div','task-details',null,null,null)
    
            if ($user.tasks[i].status === true) {
                taskLeft.appendChild(createIcon('check_circle',i))
                task.classList.add('task-completed')
                taskLeft.appendChild(createElement('p','line-through',i,null,$user.tasks[i].title))
                taskRight.appendChild(createElement('p','line-through',i,null,$user.tasks[i].date))
            } else {
                taskLeft.appendChild(createIcon('radio_button_unchecked',i))
                taskLeft.appendChild(createElement('p',null,i,null,$user.tasks[i].title))
                taskRight.appendChild(createElement('p',null,i,null,$user.tasks[i].date))
            }
            taskRight.appendChild(createIcon('delete',i))
            taskDetails.appendChild(createElement('p',null,i,null,$user.tasks[i].description))
    
            if ($user.tasks[i].descriptionFlag === true) {
                taskDetails.classList.add('show-div')
            }
            
            task.appendChild(taskLeft)
            task.appendChild(taskRight)
            task.appendChild(taskDetails)
    
            $taskListContainer.appendChild(task)
        }
    }
}

function renderAddProject() {
    $sideBarContainer.removeChild($sideBarContainer.lastChild)
    $sideBarContainer.appendChild(createInput('input','text','proj-input',null,"eg. Work",null,null))
    $sideBarContainer.appendChild(createElement('button','proj-btn-add','proj-btn-add',null,'Add'))
    $sideBarContainer.appendChild(createElement('button','proj-btn-cancel','proj-btn-cancel',null,'Cancel'))
}

function toggleAddTask() {
    if ($addTaskOverlay[0].classList.contains('show-div')) {
        $addTaskOverlay[0].classList.remove('show-div')
        $addTaskContainer[0].classList.remove('show-div')
    } else {
        $addTaskOverlay[0].classList.add('show-div')
        $addTaskContainer[0].classList.add('show-div')
    }
}

function removeTask(index) {
    $user.removeTask(index);
    updateLocalStorage()
    updateTaskList()
}

function toggleTaskStatus(index) {
    $user.tasks[index].updateStatus()
    updateLocalStorage()
    updateTaskList()
}

function toggleTaskDescription(index) {
    $user.tasks[index].updateDescriptionFlag()
    updateLocalStorage()
    updateTaskList()
}


export {initContainers, updateProjects, updateHeader, updateTaskList, renderAddProject, toggleAddTask, removeTask, toggleTaskStatus, toggleTaskDescription}