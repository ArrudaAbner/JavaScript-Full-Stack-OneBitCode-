const Character = require("./Character");

class Thief extends Character {
  atackMove(character) {
    character.healthPoints = character.defensePoints - 2 * this.atackPoints;

    console.log(
      `Dano causado: ${this.atackPoints}\n: Vida restante do ${character.name}: ${character.healthPoints}`
    );
  }
}

module.exports = Thief;
