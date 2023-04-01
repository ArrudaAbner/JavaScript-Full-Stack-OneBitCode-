//pending
//resolved
//rejected
//finished

// ====== APRENDENDO O USO DAS PROMISE ======
/* const p = new Promise((resolve, reject) => {
  console.log("A promisse está sendo executada.");
  setTimeout(() => {
    if (true) {
      reject(false);
    }
    console.log("Resolvendo a promisse");
    resolve(true); //resolver a promisse e encerrar ela
  }, 1000 * 2);
});

console.log(p);

setTimeout(() => {
  console.log(p);
}, 1000 * 4); */

//====== USO REAL DAS PROMISSE ======
function execute() {
  // faz alguma coisa
  return new Promise((resolve, reject) => {
    console.log("A promisse está sendo executada.");
    setTimeout(() => {
      console.log("Resolvendo a promise...");
      resolve("Resultado");
    });
  });
}

const p = execute();
console.log(p);

setTimeout(() => {
  console.log(p);
}, 1000 * 2);
