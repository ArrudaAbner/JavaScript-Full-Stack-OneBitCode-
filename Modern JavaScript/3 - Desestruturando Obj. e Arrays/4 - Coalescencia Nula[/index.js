//Retorna o seu operando do lado direito quando o seu operador do lado esquerdo
//é null ou undefined.
//caso contrário ele retorna o seu operando do lado esquerdo
const a = 0;
const b = null;
const c = "teste";

//modelo normal
console.log(a || b || c);

//modelo de coalescencia nula
console.log(a ?? b ?? c);

//Exemplo de uso da coalescencia nula
let num1 = 0;
let num2 = a || 42;

console.log({ num1, num2 });

//Quando queremos considerar um valor = 0 sem excluir ele da verificação do ||
num2 = a ?? 42;
console.log({ num1, num2 });

let num3 = null ?? 42;
console.log({ num3 });
