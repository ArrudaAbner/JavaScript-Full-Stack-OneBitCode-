function execute() {
  return new Promise((resolve, reject) => {
    console.log("A promisse está sendo executada.");
    setTimeout(() => {
      if (true) {
        reject("A promise foi rejeitada");
      } else {
        console.log("Resolvendo a promise...");
        resolve(42);
      }
    }, 1000 * 2);
  });
}

execute()
  .then((result) => {
    console.log(`A promisse foi resolvida. Resultado foi ${result}`);
  })
  .catch((err) => {
    console.log(`A promisse foi rejeitada. Motivo: ${err}`);
  })
  .finally(() => {
    console.log("A promise foi finalizada!");
  });
