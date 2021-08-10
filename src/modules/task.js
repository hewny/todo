import {$taskName, $taskDesc, $taskDate, $user} from "./../index";
import { toggleAddTask } from "./ui";

class Task {
    constructor(title,description,date,status) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.status = status;
    }

    updateStatus() {
        if (this.status === false) {
            this.status = true
        } else {
            this.status = false
        }
    }
}

function addTask() {
    if ($taskName.value === "") {
        alert('Task Name is required')
    } else {
        var tempTask = new Task($taskName.value, $taskDesc.value, $taskDate.value, false)
        $user.addTask(tempTask)
        
        $taskName.value = "";
        $taskDesc.value = "";
        $taskDate.value = "2021-07-31"
        toggleAddTask()
    }
}

export {Task, addTask}