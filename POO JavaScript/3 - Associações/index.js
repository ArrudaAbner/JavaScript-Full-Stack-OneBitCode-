const Address = require("./Adress");
const Person = require("./Person");

const addr = new Address("14 de julho", 231, "centro", "Ijui", "RS");
const abner = new Person("Abner Arruda", addr);

console.log(abner);
console.log(abner.address.fullAddress());
 