function calcImc(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight !== "number" || typeof height !== "number") {
      reject("arguments must be of type number");
    } else {
      resolve(weight / (height * height));
    }
  });
}

function showImc(weight, height) {
  calcImc(weight, height)
    .then((result) => {
      console.log(
        `O resultado do IMC para o peso ${weight} e altura ${height} foi de ${result}.`
      );

      let situacao;
      if (result < 18.5) situacao = "Magreza";
      else if (result < 25) situacao = "Normal";
      else if (result < 30) situacao = "Sobrepeso";
      else if (result < 40) situacao = "Obesidade";
      else situacao = "Obesidade grave";

      console.log(`Situação: ${situacao} \n`);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(`Calculando IMC para o peso ${weight} e altura ${height}`);
}

showImc(71, 1.74);
showImc(48, 1.6);
showImc(71, "texto");
showImc(82, 1.72);
showImc(120, 1.8);
