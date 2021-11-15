const list = [];
const task = {};
const statuses = ["To Do", "In Progress", "Done"];
const priority = ["low", "high"];
let id = 0;

function addTask(taskName, status = "To Do") {
  task[taskName] = status;
  id++;
  task["id"] = id;
  list.push(task);
  console.log(list);
}

function changeTask(taskName, status) {
  for (let i = 0; i < list.length; i++) {
    if (list[i][taskName] === undefined) {
      console.log("Такой задачи нет для изменений");
    } else if (statuses.includes(status)) {
      list[i][taskName] = status;
    } else {
      console.log("loh");
    }
  }
  console.log(list);
}

function deleteTask(taskName) {
  for (let i = 0; i < list.length; i++) {
    if (list[i][taskName] === undefined) {
      console.log("Такой задачи нет для удаления");
    } else {
      delete list[i];
      console.log(list);
    }
  }
}

function showList() {
  for (let status of statuses) {
    let count = 0;
    console.log(`${status}`);

    for (let i = 0; i < list.length; i++) {

      for (let task in list[i]) {

        if (list[i][task] == `${status}`) {
          console.log(`-"${task}",`);
          count++;
        }
        
      }
      if (count == 0) {
        console.log("-");
      }
    }
  }
}

addTask("сварить борщ");
// addTask("сделать салат фунчоза");
// addTask("поцеловать Игорешку");
changeTask("сварить борщ", "Done");
// changeTask("сделать салат фунчоза", "Done");
// changeTask("поцеловать Игорешку", "In Progress");
showList();
// changeTask('сделать задачку','')
// deleteTask('сварить борщ')
