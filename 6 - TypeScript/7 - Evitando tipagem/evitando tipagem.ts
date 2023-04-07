//1º forma de evitar tipagem = ? na declaração da varíavel
function sendSpaceShip(spaceship: { pilot: string; copilot?: string }) {
  //...
}

sendSpaceShip({ pilot: "Han Solo", copilot: "Chewbacca" });

sendSpaceShip({ pilot: "Luke" });

//2º forma de evitar tipagem = unknow e any
let input: any;
input = "Test";
input = 20;
input = [];

let text: string;

text = input;