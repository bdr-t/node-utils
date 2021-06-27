const fs = require("fs");
const chalk = require('chalk');

module.exports = function createFile() {
  fs.writeFile("nom.txt", "Bader", () => {
    console.log(chalk.black.bgGreen("L'arxiu s'ha creat correctament"));
  });
};


