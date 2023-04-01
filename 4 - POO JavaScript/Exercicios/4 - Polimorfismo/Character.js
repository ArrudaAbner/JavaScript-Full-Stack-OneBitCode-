class Character {
  constructor(name, healthPoints, atackPoints, defensePoints) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.atackPoints = atackPoints;
    this.defensePoints = defensePoints;
  }

  atackMove(character) {
    character.healthPoints = this.atackPoints - character.defensePoints;

    console.log(
        `Dano causado: ${this.atackPoints}\n: Vida restante do ${character.name}: ${character.healthPoints}`
      );
  }
}

module.exports = Character;
