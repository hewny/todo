import css from './style.css';
import { $user } from './modules/storage';
import { initContainers, updateProjects, updateHeader, updateTaskList } from './modules/ui';

initContainers();

const $sideBarContainer = document.getElementById('sidebar-container')
const $addTaskOverlay = document.getElementsByClassName('add-task-overlay')
const $addTaskContainer = document.getElementsByClassName('add-task-container')
const $headerContainer = document.getElementById('main-header')
const $taskListContainer = document.getElementById('task-list-container')
const $taskName = document.getElementById('task-name')
const $taskDesc = document.getElementById('task-desc')
const $taskDate = document.getElementById('task-date')

$user.sortTasks()
updateProjects()
updateHeader()
updateTaskList()

export {
    $sideBarContainer, 
    $addTaskOverlay, 
    $addTaskContainer, 
    $headerContainer, 
    $taskListContainer, 
    $taskName, 
    $taskDesc, 
    $taskDate,
}