//Média Aritmética Simples
const avarage = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  return sum / numbers.length;
};

console.log(`Média aritmética simples: ${avarage(3, 6, 9, 10)}`);

//Média Ponderada
const weightedAvarage = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * (weight ?? 1),
    0
  );
  const weightSum = entries.reduce(
    (accum, entry) => accum + (entry.weight ?? 1),
    0
  );
  return sum / weightSum;
};

console.log(
  `Média Ponderada: ${weightedAvarage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 }
  )}`
);

//mediana
const median = (...numbers) => {
  //Ordernar o array de forma crescente
  const orderedNumbers = [...numbers].sort((a, b) => a - b);

  //pegando a metade do array
  const middle = Math.floor(orderedNumbers.length / 2);

  //verificação para saber a quantidade de meios
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  } else {
    // -- Pegar meios em array par --
    //Ex: 1, 2, 4, 5, 6, 9 -> {4, 5}
    const firstMedian = orderedNumbers[middle - 1];
    const secondMedian = orderedNumbers[middle];
    return avarage(firstMedian, secondMedian);
  }
};

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`);
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`);

//moda
const mode = (...numbers) => {
  // [ [numero, quantidade], [numero, quantidade] ]
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};

console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`);
