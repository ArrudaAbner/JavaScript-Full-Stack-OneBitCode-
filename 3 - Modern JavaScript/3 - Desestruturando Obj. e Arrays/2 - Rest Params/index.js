//criando a função com rest Param
//uma função com diversos parâmetros sem especificar
//deve ser o último parâmetro pois pode ser infinito
function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0);
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sum(...arr));
