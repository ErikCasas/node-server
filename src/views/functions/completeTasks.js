const { ASCII_Text } = require("../../utils");
const chalk = require("chalk");

const showCompleteTasks = async (list = []) => {

  const message = await ASCII_Text("Complete tasks", "Pagga");
  console.log(chalk.greenBright(message), "\n");
  if (!list.length) {
    const message = await ASCII_Text("Nothing completed", "Pagga");
    console.log(chalk.blue(message));
  } else {
    list.filter((e) => {
      e.completed &&
        console.log("✅", chalk.green(chalk.strikethrough(`${e.description}`)));
    });
  }
};

module.exports = showCompleteTasks;
