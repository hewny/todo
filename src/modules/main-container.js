import { $container, createElement, createIcon, createInput, $user, $addTaskOverlay, $addTaskContainer, $taskListContainer} from "..";

function renderTasks() {
    var mainContainer = createElement('div','main-container',null,null,null)

    mainContainer.appendChild(createMainHeader())
    mainContainer.appendChild(createAddTaskOverlay())
    mainContainer.appendChild(createAddTaskContainer())
    mainContainer.appendChild(createTaskListContainer())

    $container.appendChild(mainContainer)
}

function createMainHeader() {
    var mainHeader = createElement('div','main-header',null,null,null)
    mainHeader.appendChild(createElement('h3',null,null,null,'Inbox'))
    mainHeader.appendChild(createElement('button',null,'add-new-task','add','Add new task'))

    return mainHeader
}

function createAddTaskOverlay() {
    var addTaskOverlay = createElement('div','add-task-overlay','add-task-overlay',null,null)
    return addTaskOverlay
}

function createAddTaskContainer() {
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

function createTaskListContainer() {
    var taskListContainer = createElement('div','task-list-container','task-list-container',null,null)

    return taskListContainer
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
    console.log($user.tasks[index].status)
    renderTasks()
}


export {renderTasks, renderTaskList, toggleAddTask, toggleTaskDescription}