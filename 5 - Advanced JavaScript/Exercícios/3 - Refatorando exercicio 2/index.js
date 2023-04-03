function calcImc(weight, height) {
  if (typeof weight !== "number" || typeof height !== "number") {
    throw new Error("Arguments must be of type number!");
  } else {
    return weight / Math.pow(height, 2);
  }
}

async function execute(weight, height) {
  try {
    const result = calcImc(weight, height);
    const situacao =
      result < 18.5
        ? "Magreza"
        : result < 25
        ? "Normal"
        : result < 30
        ? "Sobrepeso"
        : result < 40
        ? "Obesidade"
        : "Obesidade grave";

    console.log(
      `O resultado do IMC para o peso ${weight} e altura ${height} foi de ${result}.`
    );
    console.log(`Situação: ${situacao} \n`);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Finalizando a aplicação!");
  }
}

execute(71, 1.74)
  .then(() => execute(48, 1.6))
  .then(() => execute(71, 1.6))
  .then(() => execute(82, 1.72))
  .then(() => execute(120, 1.8))
  .catch((error) => console.log(error.message));
