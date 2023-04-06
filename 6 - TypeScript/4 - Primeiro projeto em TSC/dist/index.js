function sendSpaceship(name, captain) {
    var spaceShip = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: [],
    };
    alert("A nave ".concat(spaceShip.name, " comandado pelo capit\u00E3o ").concat(spaceShip.captain, " foi enviada em uma miss\u00E3o!"));
    return spaceShip;
}
function accelerate(targetSpeed, spaceShip) {
    if (spaceShip.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceShip.name, " para ").concat(spaceShip.speed));
    }
    else if (spaceShip.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceShip.name, " para ").concat(spaceShip.speed));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceShip.name));
    }
}
var spaceShipName = prompt("Insira o nome da nave a ser enviada: ");
var spaceShipCaptain = prompt("Insira o nome do capitão da nave");
var currentShip = sendSpaceship(spaceShipName, spaceShipCaptain);
var speed = Number(prompt("Insira a velocidade para qual deseja acelerar: "));
accelerate(speed, currentShip);
