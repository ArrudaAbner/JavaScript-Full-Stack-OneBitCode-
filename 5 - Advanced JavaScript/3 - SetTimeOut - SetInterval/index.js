// ====== setTimeOut ======
console.log("Programa iniciado!\n");

const timeoutId = setTimeout(() => {
  console.log("3 segundos se passaram desde que o programa foi iniciado.");
}, 1000 * 3); //contabiliza em milisegundos, logo 1000 * 3 para dar 3 segundos

clearTimeout(timeoutId); //limpar o timeout, não vai deixar executar o timeout

// ====== setInterval ======
let seconds = 0;

const intervalId = setInterval(() => { //repete esse código até executar o clearInterval
  seconds += 3;
  console.log(`Se passaram ${seconds} segundos.`);
  if (seconds >= 9) {
    clearInterval(intervalId);
  }
}, 1000 * 3);
