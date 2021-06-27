const fs = require("fs");
const chalk = require('chalk');

module.exports = function printContentFile(){
  fs.readFile("./nom.txt", "utf8", (err, data) => {
    if (err) console.log(chalk.black.bgGreen(err));
    else console.log(chalk.black.bgGreen(data));
  });
}


