const { combineFlagAndOptionalValue } = require("commander");
const program = require("commander");
const { prompt } = require("inquirer");
const chalk = require('chalk');

const timeoutRecursive = require("./nivell1-1");
const createFile = require("./nivell1-2");
const printContentFile = require("./nivell1-3")
const {comprimirArxiu, imprimirDirectori} = require("./nivell2-1");
const {creaArxiusCodificats, creaArxiusEncriptats } = require("./nivell3-1")

function promptExercicies() {
  program
    .command("exercicis")
    .alias("e")
    .description("exercicis")
    .action(() => {
      const exercicis = {
        "exercici 1 funcion-recursiva": () => timeoutRecursive(1),
        "exercici 1 crear arxiu": () => createFile(),
        "exercici 1 imprimir contingut arxiu": () => printContentFile(),
        "exercici 2 comprimir arxiu": () => comprimirArxiu(),
        "exercici 2 imprimir directori git bash": () => imprimirDirectori(),
        "exercici 2 imprimir directori terminal windows": () => imprimirDirectori('dir', {shell: true}),
        "exercici 3 codifica arxius": () => creaArxiusCodificats(),        
        "exercici 3 encripta arxius": () => creaArxiusEncriptats(),        
      };
      prompt([
        {
          type: "list",
          name: "selected",
          message: "selecciona exercici",
          choices: Object.keys(exercicis),
        },
      ])
        .then(({ selected }) => {
          const exercici = exercicis[selected];
          exercici();
          if(selected === "exercici 1 funcion-recursiva"){
            setTimeout(() => promptExercicies(),11000)
          } else{
            setTimeout(() => promptExercicies(),1000)
          }
        }).catch(e => {
          console.log(chalk.black.bgRed(e.message))
        })
    })
  program.parse(process.argv);
}

promptExercicies();


