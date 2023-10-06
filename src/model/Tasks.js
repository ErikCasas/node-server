const Task = require("./Task");

class Tasks {
  constructor() {
    this.list = [
      {
        id: "1",
        description: "Salir a corre",
        completed: true,
      },
      {
        id: "2",
        description: "la wea la fome",
        completed: false,
      },
    ];
  }

  createTask(desc = "") {
    const task = new Task(desc);
    this.list.push(task);
  }

  deleteTasks(tasks = {}) {
    for (const task in tasks) {
      const id = tasks[task];
      const index = this.list.findIndex((e) => e.id == id);
      this.list.splice(index, 1);
    }
  }

  setTasks(tasks = {}) {
    for (const task in tasks) {
      const id = tasks[task];
      //no hace falta una validación de si el index es -1
      const index = this.list.findIndex((e) => e.id == id);
      const element = this.list.find((e) => e.id == id);
      element.completed = !element.completed;
      this.list.splice(index, 1, element);
    }
  }
}

module.exports = Tasks;
