const fs = require("fs");

fs.appendFile("test.txt", "Olá NodeJS", (err) => {
  console.log(err);
});

fs.rename("test.txt", "teste2.txt", (err) => {
  console.log(err);
});

fs.unlink("teste2.txt", (err) => {
  console.log(err);
});
