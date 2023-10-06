const chalk = require("chalk");
const { ASCII_Text } = require("../../utils");

const showIncompleteTasks = async (list = []) => {

  const message = await ASCII_Text("Incomplete tasks", "Pagga");
  console.log(chalk.redBright(message), "\n");
  if (!list.length) {
    const message = await ASCII_Text("Nothing pendingg", "Pagga");
    console.log(chalk.blue(message));
  } else {
    list.filter((e) => {
      !e.completed && console.log(`❌`, chalk.red(`${e.description}`));
    });
  }
};

module.exports = showIncompleteTasks;
