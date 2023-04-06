function sendSpaceship(name: string, captain: string) {
  const spaceShip = {
    name,
    captain,
    speed: 20,
    inMission: true,
    crew: [],
  };

  alert(
    `A nave ${spaceShip.name} comandado pelo capitão ${spaceShip.captain} foi enviada em uma missão!`
  );

  return spaceShip;
}

function accelerate(
  targetSpeed: number,
  spaceShip: { name: string; speed: number }
) {
  if (spaceShip.speed > targetSpeed) {
    alert(
      `Reduzindo a velocidade da ${spaceShip.name} para ${spaceShip.speed}`
    );
  } else if (spaceShip.speed < targetSpeed) {
    alert(
      `Aumentando a velocidade da ${spaceShip.name} para ${spaceShip.speed}`
    );
  } else {
    alert(`Mantendo a velocidade da ${spaceShip.name}`);
  }
}

const spaceShipName = prompt("Insira o nome da nave a ser enviada: ");
const spaceShipCaptain = prompt("Insira o nome do capitão da nave");

const currentShip = sendSpaceship(spaceShipName, spaceShipCaptain);

const speed = Number(prompt("Insira a velocidade para qual deseja acelerar: "));

accelerate(speed, currentShip);
