//Modelo normal
function normalSum(a, b) {
  return a + b;
}

console.log(`Soma normal: ${normalSum(2, 2)}`);

//Modelo anonimo
const anonymousSum = function (a, b) {
  return a + b;
};
console.log(`Soma anonima: ${anonymousSum(2, 5)}`);

//Modelo arrow
const arrowSum = (a, b) => {
  return a + b;
};
console.log(`Soma arrow: ${arrowSum(3, 5)}`);

//Modelo arrow em uma linha
const arrowSub = (a, b) => a - b;
console.log(`Subtração arrow: ${arrowSub(10, 6)}`);

//Modelo arrow em uma linha com retorno em string
const arrowDouble = (n) => `O dobro de ${n} é ${n * 2}`;
console.log(arrowDouble(12));

const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

const startingWithP = towns.filter((town) => town[0] === "P");
console.log(startingWithP);
