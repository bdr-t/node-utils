const zlib = require("zlib");
const fs = require("fs");
const child_process = require("child_process");

const zip = zlib.createGzip();
const read = fs.createReadStream("./nom.txt");
const write = fs.createWriteStream("./nom.txt.gz");
read.pipe(zip).pipe(write);
console.log("S'ha comprimit l'arxiu");

// ---------------------------------------------
const ls = child_process.spawn('ls')

ls.stdout.on('data', (data) => {
    console.log(`directori:\n${data}`);
  });

