const readline = require("readline");
require("colors");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const tasks = [];

function displayMenu() {
  console.log("\nMenu:");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Completar tarea");
  console.log("4. Salir");

  rl.question("Seleccione una opción: ", (option) => {
    switch (option) {
      case "1":
        addTask();
        break;
      case "2":
        deleteTask();
        break;
      case "3":
        completeTask();
        break;
      case "4":
        rl.close();
        break;
      default:
        console.log("Opción inválida.".red);
        displayMenu();
    }
  });

  function addTask() {
    rl.question("Indicador: ", (indicator) => {
      rl.question("Descripción: ", (description) => {
        tasks.push({
          indicator,
          description,
          completed: false,
        });
        console.log("Tarea agregada.".green);
        displayMenu();
      });
    });
  }

  function deleteTask() {
    if (tasks.length === 0) {
      console.log("No hay tareas para eliminar.".red);
      displayMenu();
      return;
    }

    console.log("Lista de tareas:");
    tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. [${task.completed ? "X".yellow : " "}] ${
          task.indicator
        } - ${task.description}`
      );
    });

    rl.question(
      "Ingrese el número de la tarea a eliminar: ".green,
      (answer) => {
        const taskIndex = parseInt(answer) - 1;
        if (taskIndex >= 0 && taskIndex < tasks.length) {
          tasks.splice(taskIndex, 1);
          console.log("Tarea eliminada.");
        } else {
          console.log("Número de tarea inválido.".red);
        }
        displayMenu();
      }
    );
  }

  function completeTask() {
    if (tasks.length === 0) {
      console.log("No hay tareas para completar.".red);
      displayMenu();
      return;
    }

    console.log("Lista de tareas:");
    tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. [${task.completed ? "X" : " "}] ${task.indicator} - ${
          task.description
        }`
      );
    });

    rl.question(
      "Ingrese el número de la tarea completada: ".green,
      (answer) => {
        const taskIndex = parseInt(answer) - 1;
        if (taskIndex >= 0 && taskIndex < tasks.length) {
          tasks[taskIndex].completed = true;
          console.log("Tarea completada.".green);
        } else {
          console.log("Número de tarea inválido.".red);
        }
        displayMenu();
      }
    );
  }

  
}

console.log("¡Bienvenido a la lista de tareas!");
// displayMenu(); No hace falta invocar en este punto la funcion si la vas a invocar en app
//                Esto genera esa doble visualización al inicio 

module.exports = {
    displayMenu,
};
