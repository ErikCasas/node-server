const chalk = require("chalk");
const { MultiSelect } = require("enquirer");
const ASCII_Text = require("./ascii");

const selecteTask = async (list = []) => {
  if (!list.length) {
    const message = await ASCII_Text("You don't have any pending to select", "Pagga");
    console.log(chalk.blue(message));
  } else {
    const message = await ASCII_Text("let's complete a task", "Pagga");
    console.log(chalk.cyan(message), "\n");
    const choices = list.map((e) => {
      if (e.completed) {
        const text = chalk.green(chalk.strikethrough(e.description));
        e.text = `✅ ${text}`;
      } else {
        const text = chalk.redBright(e.description);
        e.text = `❌ ${text}`;
      }

      return {
        value: e.id,
        name: e.text,
      };
    });

    const prompt = new MultiSelect({
      message: "Press the Space key to select a task",
      choices,
      result(selection) {
        return this.map(selection);
      },
    });

    return prompt.run();
  }
};

module.exports = selecteTask;
