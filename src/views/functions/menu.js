const { Select } = require("enquirer");

const showMenu = () => {
  const prompt = new Select({
    name: "question",
    message: "Select an option",
    choices: [
      "Create a task",
      "List to-dos",
      "List completed tasks",
      "List incomplete tasks",
      "Complete a task(s)",
      "Delete a task",
      "Exit",
    ],
  });
  return prompt.run();
};



module.exports = showMenu