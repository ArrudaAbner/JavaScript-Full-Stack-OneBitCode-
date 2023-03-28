class Book {
  //função construtora
  constructor(title) {
    this.title = title;
    this.published = false;
  }

  //métodos dentro do objeto
  publish() {
    this.published = true;
  }
}

const eragon = new Book("Eragon");
const eldest = new Book("Eldest");

eragon.publish();

console.log(eragon, eldest);

console.log(eragon instanceof Book);
