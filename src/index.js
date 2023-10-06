const chalk = require("chalk");
const Tasks = require("./model/Tasks");
const {
  showMenu,
  listTodos,
  showCompleteTasks,
  showIncompleteTasks,
} = require("./views/index");
const { ASCII_Text, selecteTask, pause, inputCreateTask } = require("./utils");

const main = (async () => {
  let tasks = new Tasks();
  const headerText = await ASCII_Text("Todo  App!", "Bloody");
  let opt;
  do {
    console.clear();
    console.log(chalk.red(headerText));
    opt = await showMenu();

    switch (opt) {
      case "Create a task":
        const { task } = await inputCreateTask();
        tasks.createTask(task);
        break;
      case "List to-dos":
        await listTodos(tasks.list);
        break;
      case "List completed tasks":
        await showCompleteTasks(tasks.list);
        break;
      case "List incomplete tasks":
        await showIncompleteTasks(tasks.list);
        break;
      case "Complete a task(s)":
        const selectedTask = await selecteTask(tasks.list);
        tasks.setTasks(selectedTask);
        break;
      case "Delete a task":
        const deletedTask = await selecteTask(tasks.list);
        tasks.deleteTasks(deletedTask);
        break;
    }
    await pause(opt);
  } while (opt !== "Exit");
})();
