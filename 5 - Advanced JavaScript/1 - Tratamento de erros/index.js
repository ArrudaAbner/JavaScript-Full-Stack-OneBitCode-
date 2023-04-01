function sum(a, b) {
  const firstNumber = Number(a);
  const secondNumber = Number(b);

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    throw new Error("Arguments must be two numbers");
  }

  return firstNumber + secondNumber;
}

//try catch não gera erro na aplicação, apenas cancela o processo e segue a linha de código
try {
  console.log(sum(2, 9)); //Ocorre normalmente
  console.log(sum(true, 14)); //lê o true como 1
  console.log(sum(undefined, 22)); //Ocorre erro pois undefined isNan
  console.log(sum(18, "0")); //Ocorre normalmente pois faz um toNumber de "0" para 0
  console.log(sum(39, null)); //Ocorre normalmente pois lê null como 0
  console.log(sum(13, "zero")); //Ocorre erro pois não consegue fazer toNumber de "zero"
} catch (error) {
  console.log("An error ocurred!");
  console.log(error.message); //é diferente de usar o alert no error pois o alert finaliza a aplicação
} finally {
  console.log("Finishing the file!");
}
