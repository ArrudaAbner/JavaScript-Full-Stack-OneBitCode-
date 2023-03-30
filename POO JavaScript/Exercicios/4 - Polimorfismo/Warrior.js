const Character = require("./Character");

class Warrior extends Character {
  //position = "atack && defense"
  constructor(name, healthPoints, atackPoints, defensePoints, shieldPoints, position) {
    super(name, healthPoints, atackPoints, defensePoints);
    this.shieldPoints = shieldPoints;
    this.position = position;

    if (this.position === "defense") {
      this.defensePoints += this.shieldPoints;
    }

    this.position =
      this.position === "defense"
        ? (this.defensePoints += this.shieldPoints)
        : "atack";
  }

  atackMove(character) {
    if (this.position === "atack") {
      character.healthPoints = this.atackPoints - character.defensePoints;
    } else {
      console.log("Posição de defesa, nenhum ataque efetuado!");
    }
  }

  changePosition() {
    this.position = this.position === "defense" ? "attack" : "defense";
  }
}

module.exports = Warrior;
