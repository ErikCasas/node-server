const chalk = require("chalk");

const pause = async (opt) => {
  return new Promise((res) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    opt === "Exit"
      ? readline.question(chalk.red("\npress enter to Exit\n"), () => {
        console.clear()
          readline.close();
          process.exit();
        })
      : readline.question(chalk.cyan("\npress enter to continue\n"), () => {
          readline.close();
          res();
        });
  });
};

module.exports = pause;
