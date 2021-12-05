import {
  list,
  statuses,
  priorities,
  id,
  addTask,
  deleteTask,
  changeTask,
} from "./main.js";

const forms = document.querySelectorAll(".form-input");
const task_containers = document.querySelectorAll(".task_container");

forms.forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let task_name = event.target.firstElementChild.value.trim();
    if(task_name){
        let status = "To Do";
        let priority = event.target.parentElement.id;

    let task_Element = addTask(task_name, status, priority);

    form.reset();

    if (priority == "high") {
      createBlockTask(task_Element.id, task_Element.name, task_containers[0]);
    }

    if (priority == "low") {
      createBlockTask(task_Element.id, task_Element.name, task_containers[1]);
    }

    console.log(list);
}
  });
});

function createBlockTask(id_task, task_name, task_container) {
  let shellTask = document.createElement("div");
  shellTask.classList.add("task");

  let task_text = document.createElement("span");
  task_text.classList.add("task_text");
  task_text.textContent = task_name;
  task_text.setAttribute("id", id_task);


  let checkboxForTask = document.createElement("input");
  checkboxForTask.classList.add("checkbox");
  checkboxForTask.setAttribute("type", "checkbox");
  checkboxForTask.addEventListener("click", function (event) {
    changeStatusElement(event);
  });

  let buttonDeleteTask = document.createElement("input");
  buttonDeleteTask.classList.add("button_x");
  buttonDeleteTask.setAttribute("type", "button");
  buttonDeleteTask.setAttribute("value", "");
  buttonDeleteTask.addEventListener("click", function (event) {
    deleteTaskElement(event);
  });

  shellTask.prepend(task_text, checkboxForTask, buttonDeleteTask);

  task_container.append(shellTask);
}

function deleteTaskElement(event) {
  let id_task = +event.target.previousElementSibling.previousElementSibling.id;
  console.log(id_task);
  deleteTask(id_task);
  event.target.parentElement.remove();
  console.log(list);
}

function changeStatusElement(event) {
  let id_task = +event.target.previousElementSibling.id;
  let task_status;
  console.log(id_task);

  if (event.target.checked) {
    event.target.previousElementSibling.style.background = "#F4F4F4";
    task_status = "Done";
  } else {
    event.target.previousElementSibling.style.background = "";
    task_status = "To Do";
  }
  changeTask(id_task, task_status);
  console.log(list);
}
