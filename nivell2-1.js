const zlib = require("zlib");
const fs = require("fs");
const child_process = require("child_process");
const chalk = require("chalk");

function comprimirArxiu() {
  const zip = zlib.createGzip();
  const read = fs.createReadStream("./nom.txt");
  const write = fs.createWriteStream("./nom.txt.gz");
  read.pipe(zip).pipe(write);
  console.log(chalk.black.bgGreen("S'ha comprimit l'arxiu"));
}

// ---------------------------------------------

function imprimirDirectori(command = "ls", terminal = null) {
  let directory = process.env.pwd;
  process.chdir(process.env.HOME);
  const ls = child_process.spawn(command, terminal);
  ls.stdout.on("data", (data) => {
    console.log(chalk.black.bgBlueBright(`directori:\n${data}`));
  });
  process.chdir(directory);
}

module.exports = {
  comprimirArxiu,
  imprimirDirectori,
};
