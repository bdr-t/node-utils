const fs = require("fs");

function createFile() {
  fs.writeFile("nom.txt", "Bader", () => {
    console.log("L'arxiu s'ha creat correctament");
  });
};

createFile()
