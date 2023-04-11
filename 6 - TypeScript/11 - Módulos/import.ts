import { Spaceship } from "./export";
import * as lodash from "lodash";

interface battleSpaceShip extends Spaceship {
  weapons: number;
}

let nave: battleSpaceShip = {
  name: "X-wing",
  pilot: "Luke skywalker",
  speed: 50,
  weapons: 4,
};

console.log(lodash.camelCase(nave.pilot));