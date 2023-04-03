//função assync
/* async function asyncSum(a, b) {
  return a + b;
}

function asyncSubtract(a, b) {
  return a - b;
}

const sumResult = asyncSum(50, 33);
const subtractResult = asyncSubtract(50, 33);

Promise.all([sumResult, subtractResult])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });
 */

const numbers = [4, 5, 9, 13, 77];

 function asyncSquare(x) {
  return Math.pow(x, 2);
}

Promise.all(numbers.map((number) => asyncSquare(number)))
  .then((squares) => {
    console.log(squares);
  })
  .catch((err) => {
    console.log(err);
  });
