//Array base
let towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

//Diferenças em spread vs no spread
console.log(towns);
console.log(...towns);
console.log(...towns[0]);

//Copiando um array porém mudando o conteúdo do array pai e do array filho
//JS trabalha com referência
let townsCopy = towns;

townsCopy.pop();
townsCopy.push("Juno");
console.log({ towns, townsCopy });

//Clonando um array sem alterar o conteúdo do array pai
let townsClone = [...towns];
townsClone.push("Alderaban");
console.log(towns, { townsCopy, townsClone });

//Desestruturando um objeto com spread
const townsObj = { ...towns };
const townsObjClone = {...townsObj}
console.log(townsObj, townsObjClone);
