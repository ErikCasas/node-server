require ("colors");
const { displayMenu } = require("./task");


// console.clear();

// const main = async() => {    No hace falta que sea de tipo asicronica

//   displayMenu()
// }

// main()==> Te faltó esto para que se viera el menú


//en task.js tenias ya invocada la funcion displayMenu, lo cual al volver a hacer el llamado
// de esta funcion en al archivo app.js generaba la dible visualizacion del menu, me parecio muy recursivo 
// que usaras "console.clear();" pero este generó que al ejecutar por primera vez, no se vea el menú
//junto el echo de que generabas una funcion para hacer el llamado de la funcion "displayMenu", pero la funcion main 
//fue declarada pero nunca usada 


  displayMenu()
