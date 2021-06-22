const crypto = require("crypto");
const fs = require("fs");

function creaArxiusCodificats() {
  let data = fs.readFileSync("./nom.txt", "utf8", (err, data) => {
    if (err) console.log(err);
    else return data;
  });

  let base64 = Buffer.from(data).toString("base64");
  let hex = Buffer.from(data).toString("hex");

  fs.writeFile("nomHex.txt", hex, () => {
    console.log("L'arxiu s'ha create correctament");
  });

  fs.writeFile("nomBase64.txt", base64, () => {
    console.log("L'arxiu s'ha creat correctament");
  });
}

function encrypt(text) {
  const key = crypto.randomBytes(32);
  const iv = crypto.randomBytes(16);
  let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
  let encrypted = cipher.update(text);

  encrypted = cipher.final();

  return encrypted.toString("utf-8");
}

function creaArxiusEncriptats() {
  let dataHex = fs.readFileSync("./nomHex.txt", "utf8", (err, data) => {
    if (err) console.log(err);
    else return data;
  });

  let dataBase64 = fs.readFileSync("./nomBase64.txt", "utf8", (err, data) => {
    if (err) console.log(err);
    else return data;
  });

  // Displays output
  const hex = encrypt(dataHex);
  const base64 = encrypt(dataBase64);
  console.log(hex);

  fs.writeFileSync("nomHexEncriptat.txt", hex, () => {
    console.log("L'arxiu s'ha create correctament");
  });

  fs.writeFileSync("nomBase64Encriptat.txt", base64, () => {
    console.log("L'arxiu s'ha creat correctament");
  });

  fs.unlinkSync("./nomBase64.txt");
  fs.unlinkSync("./nomHex.txt");
}

function decrypt(text) {
  let iv = crypto.randomBytes(16);
  let encryptedText = Buffer.from(text.encryptedData, "hex");

  // Creating Decipher
  let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv);

  // Updating encrypted text
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  // returns data after decryption
  return decrypted.toString();
}

function desencriptaArxius() {
  let dataHex = fs.readFileSync(
    "./nomHexEncriptat.txt",
    "utf8",
    (err, data) => {
      if (err) console.log(err);
      else return data;
    }
  );

  let dataBase64 = fs.readFileSync(
    "./nomBase64Encriptat.txt",
    "utf8",
    (err, data) => {
      if (err) console.log(err);
      else return data;
    }
  );

  // Displays output
  let hexaaa = dataHex.toString('hex')
  const hex = decrypt('asdjaskdjas');
  // const base64 = decrypt(dataBase64.toString('base64'));
  console.log(hex);
}

// creaArxiusCodificats();
// creaArxiusEncriptats();
desencriptaArxius();
