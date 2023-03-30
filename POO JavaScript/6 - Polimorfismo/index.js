class Vehicle {
  move() {
    console.log("O veículo está se movendo!\n");
  }
}

class Car extends Vehicle {
  move() {
    console.log("O carro está se movendo!\n");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("O návio está se movendo!\n");
  }
}

class Plane extends Vehicle {
  move(speed) {
    console.log(`O avião está se movendo a ${speed} km/h!\n`);
  }
}

const delorean = new Car();
const blackPearl = new Ship();
const epoch = new Plane();

/* delorean.move();
blackPearl.move();
epoch.move(); */

function start(Vehicle, speed) {
  console.log("Iniciando um veículo...");
  Vehicle.move();

  if (Vehicle instanceof Plane) {
    Vehicle.move(speed);
  }
}

start(delorean);
start(blackPearl);
start(epoch, 80);
