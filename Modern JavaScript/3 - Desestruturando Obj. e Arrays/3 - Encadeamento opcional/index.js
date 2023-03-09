//Operador que permite ler propriedades internas de uma cadeia de objetos
//sem que a validação de cada referências de cadeia seja realizada.

//Objeto teste
const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [
    {
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89,
      },
    },
  ],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "9999-9999",
  },
};

//modelo antigo
/* console.log(user.friends[0].phone.ddd); */

//modelo encadeamento opcional
console.log(user?.friends[0]?.phone?.ddd);
