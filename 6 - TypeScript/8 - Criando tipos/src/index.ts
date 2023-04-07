let literal: "Hello, world";
let pi: 3.14159;

let option: "Yes" | "No";

let option2: number | boolean;

type Planet =
  | "Mercúrio"
  | "Vênus"
  | "Terra"
  | "Marte"
  | "Júpiter"
  | "Saturno"
  | "Urano"
  | "Netuno"
  | "Plutão";

let planet: Planet;

if (planet === "Terra") {
  console.log("Estamos na terra!");
}

let homePlanet: Planet;

type greetingCallback = (name: string) => void;

function greet(callbackfn: greetingCallback) {
  let name = "abner";
  callbackfn(name);
}
