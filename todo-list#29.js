const list = [];
const statuses = ["To Do", "In Progress", "Done"];
const priorities = ["low", "high"];
let id = 0;

function isCheckingExistenceTask(id) {
  let isExist = false;

  list.forEach(function (item) {
    if (item.id == id) {
      isExist = true;
    }
  });

  if (!isExist) {
    console.log("Такой задачи нет");
  }

  return isExist;
}

function isCheckingExistenceStatus(status) {
  return statuses.includes(status) ? true : console.log("Такого статуса нет");
}

function addTask(taskName, status = "To Do", priority = "low") {
  const task = {
    id: ++id,
    name: taskName,
    status: status,
    priority: priority,
  };

  list.push(task);
}

function changeTask(id, status, priority) {
  let isExistTask = isCheckingExistenceTask(id);
  let isExistStatus = isCheckingExistenceStatus(status);

  if (isExistTask && isExistStatus) {
    list.forEach(function (item) {
      if (item.id == id) {
        item.status = status;
        item.priority = priority;
      }
    });
  }
}

function deleteTask(id) {
  let isExistTask = isCheckingExistenceTask(id);

  if (isExistTask) {
    list.forEach(function (item, i, arr) {
      if (item.id == id) {
        arr.splice(i, 1);
      }
    });
  }
}

function showList(sortBy) {
  let arraySort = [];

  if (sortBy == "status") {
    arraySort = statuses;
    keyObj = "status";
  }

  if (sortBy == "priority") {
    arraySort = priorities;
    keyObj = "priority";
  }

  for (let key of arraySort) {
    let count = 0;

    console.log(`${key}`);

    list.forEach(function (item) {
      if (item[keyObj] == `${key}`) {
        console.log(`-"${item.name}",`);
        count++;
      }
    });

    if (count == 0) {
      console.log("-");
    }
  }
}

addTask("задача 1");
changeTask("1", "Done", "high");
addTask("задача 2");
addTask("задача 3");
deleteTask("2");
deleteTask("1");
addTask("задача 4");
changeTask("3", "In Progress");
showList("status");
