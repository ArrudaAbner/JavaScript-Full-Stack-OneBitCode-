const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const thief = new Thief("Bilbo", 50, 75, 15);
const mage = new Mage("Gandalf", 60, 10, 20, 120);
const warrior = new Warrior("Aragorn", 100, 100, 75, 30, "atack");

/* console.table({ thief, mage, warrior });
thief.atackMove(mage); */

mage.atackMove(thief);
