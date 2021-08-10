import { $container, createElement, createInput, createIcon, $user, $taskListContainer, $addTaskOverlay, $addTaskContainer } from "../index.js";

const defaultMenu = [
    {icon:"home", text:"Inbox", id:"inbox"},
    {icon:"event", text:"Today", id:"today"},
    {icon:"date_range", text:"This Week", id:"this-week"},
]

function renderNav() {
    var nav = createElement('div','topnav-container',null,'done_outline','To-Do List')
    $container.appendChild(nav)
}

function renderFooter() {
    var footer = createElement('div','footer',null,null,'Created by Hewny')
    $container.appendChild(footer)
}

function renderSidebar() {
    var sidebar = createElement('div','sidebar-container',null,null,null)

    defaultMenu.forEach ((menu) => {
        var tempMenu = createElement('button',null,menu.id,menu.icon,menu.text)
        sidebar.appendChild(tempMenu)
    })

    var tempBar = createElement('h2',null,null,null,'Projects')
    sidebar.appendChild(tempBar)

    var tempBar2 = createElement('button',null,'add-new-project','add','Add new Project')
    sidebar.appendChild(tempBar2)

    $container.appendChild(sidebar)
}

function renderTasks() {
    var mainContainer = createElement('div','main-container',null,null,null)

    mainContainer.appendChild(_createAddTaskOverlay())
    mainContainer.appendChild(_createAddTaskContainer())
    mainContainer.appendChild(_createMainHeader())
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

function _createTaskListContainer() {
    var taskListContainer = createElement('div','task-list-container','task-list-container',null,null)

    return taskListContainer
}

function _createMainHeader() {
    var mainHeader = createElement('div','main-header',null,null,null)
    mainHeader.appendChild(createElement('h3',null,null,null,'Inbox'))
    mainHeader.appendChild(createElement('button',null,'add-new-task','add','Add new task'))

    return mainHeader
}

function renderTaskList() {
    $taskListContainer.innerHTML = ""

    for (let i=0; i<$user.tasks.length; i++) {
        var task = createElement('div','task',i,null,null)
        var taskLeft = createElement('div','task-left',null,null,null)
        var taskRight = createElement('div','task-right',null,null,null)
        var taskDetails = createElement('div','task-details',null,null,null)

        if ($user.tasks[i].status === true) {
            taskLeft.appendChild(createIcon('check_circle',i))
        } else {
            taskLeft.appendChild(createIcon('radio_button_unchecked',i))
        }
        taskLeft.appendChild(createElement('p',null,i,null,$user.tasks[i].title))
        taskRight.appendChild(createElement('p',null,i,null,$user.tasks[i].date))
        taskRight.appendChild(createIcon('delete',i))
        taskDetails.appendChild(createElement('p',null,i,null,$user.tasks[i].description))
        
        task.appendChild(taskLeft)
        task.appendChild(taskRight)
        task.appendChild(taskDetails)

        $taskListContainer.appendChild(task)
    }
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

function toggleTaskDescription(index) {
    $user.tasks[index].updateStatus()
    renderTaskList()
}


export {renderNav, renderFooter, renderSidebar, renderTasks, renderTaskList, toggleAddTask, toggleTaskDescription}