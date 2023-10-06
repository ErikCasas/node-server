const { ASCII_Text } = require("../../utils");
const chalk = require("chalk");


const listTodos = async (list = []) => {
  if (!list.length) {
    const message = await ASCII_Text("Nothing pendingg", "Pagga");
    console.log(chalk.blue(message));
  } else {
    const message = await ASCII_Text("Ur list : )", "Pagga");
    console.log(chalk.cyan(message), "\n");
    list.map((e) => {
      e.completed
        ? console.log(
            "✅",
            chalk.green(chalk.strikethrough(`${e.description}`))
          )
        : console.log(`❌`, chalk.redBright(`${e.description}`));
    });
  }
};

module.exports = listTodos;
