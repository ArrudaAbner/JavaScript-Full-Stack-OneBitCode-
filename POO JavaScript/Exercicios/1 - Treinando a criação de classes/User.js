class User {
  //função construtora
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  //métodos dentro do objeto
  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log(`Login bem sucedido para o usuário ${this.email}`);
    } else {
      console.log(`E-mail ou senha inválidos!`);
    }
  }
}

const abner = new User(
  "Abner Rodrigues de Arruda",
  "abnerarruda2@gmail.com",
  "123456"
);

abner.login("abnerarruda2@gmail.com", "123456");
