const spaceShip = {
  name: "X-wing",
  speed: 0,
};

function accelerate(spaceShip, speed) {
  //modelo normal sem inferência de tipo
  spaceShip.speed = speed;
}

function accelerate2( //modelo com inferência de tipo
  spaceShip: { name: string; speed: number },
  speed: number
) {
  spaceShip.speed = speed;
}

accelerate(spaceShip, 50);
accelerate2(spaceShip, 50);
