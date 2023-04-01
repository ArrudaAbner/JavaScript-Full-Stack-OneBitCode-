class Account {
  //# = atributo privado (não consegue alterar fora do escopo do objeto nem visualizar)
  #password;
  #balance = 0;

  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      return null;
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}

const userAbner = {
  email: "abnerarruda2@gmail.com",
  password: "123456",
};

const myAccount = new Account(userAbner);
console.log(myAccount);
console.log(myAccount.getBalance("abnerarruda2@gmail.com", "123456"));
