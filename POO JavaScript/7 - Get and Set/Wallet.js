class Wallet {
  //atributos privados
  #amount;
  #username;

  constructor() {
    this.#amount = 100.99 * 100; //10099 para salvar como inteiro e não float
  }

  get getAmount() {
    //Não necessita de () na chamada do Getter
    return this.#amount / 100;
  }

  get username() {
    return this.#username;
  }

  set username(newUserName) {
    if (typeof newUserName === "string") {
      this.#username = newUserName;
    } else {
      console.log("user name must be of type String");
    }
  }
}

const myWallet = new Wallet("abner");

console.log(myWallet.getAmount);
myWallet.username = "Abner";
console.log(myWallet.username);

/* myWallet.username = true;
 */
