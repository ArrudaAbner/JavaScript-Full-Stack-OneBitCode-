class Product {
  //função construtora
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  //métodos dentro do objeto
  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(percentage) {
    this.price = this.price - (percentage * this.price) / 100;
  }
}

const livro = new Product("Assassin's creed", "fantasy", 100);
livro.calculateDiscount(10);
console.log(livro.price);
