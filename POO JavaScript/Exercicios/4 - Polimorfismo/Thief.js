const Character = require("./Character");

class Thief extends Character {

  atackMove(character) {
    character.healthPoints = 2 * this.atackPoints - character.defensePoints;

    console.log(
      `Dano causado: ${this.atackPoints}\n: Vida restante do ${character.name}: ${character.healthPoints}`
    );
  }
}

module.exports = Thief;
