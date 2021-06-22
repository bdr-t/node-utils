const fs = require("fs");

function printContentFile(){
  fs.readFile("./nom.txt", "utf8", (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });
}

printContentFile()


