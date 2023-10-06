const { prompt } = require("enquirer");

const inputCreateTask = async () => {
  const response = await prompt({
    type: "input",
    name: "task",
    message: "What task r u going to perform?",
    validate: function (value) {
      //por algún motivo que desconozco no me permite usar un ternario
      if (value.length <= 3) {
        return "insert a task";
      }
      return true;
    },
  });

  return response;
};


module.exports = inputCreateTask