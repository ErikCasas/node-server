const figlet = require("figlet");
const ASCII_Text = (text, font) => {
  return new Promise((resolve) => {
    figlet.text(
      text,
      {
        font: font,
        width: 100,
      },
      function (_err, data) {
        resolve(data);
      }
    );
  });
};



module.exports = ASCII_Text