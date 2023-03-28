/* const book = {
  title: "Assassin's creed revelations",
  pages: 354,
  published: true,
  inStock: 20,
  tags: ["fantasy", "adventure"],
  author: {
    name: "Oliver Bowden",
  },
  addOnStock(quantity) {
    this.inStock += quantity;
  },
}; */

//função construtora
function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.plushed = false;
  this.inStock = 0;
  this.addOnStock = function (quantity) {
    this.inStock += quantity;
  };
  this.save = function () {
    //salva no DB
  };
}

const author = {
  name: "Oliver Bowden",
};

const tags = ["fantasy", "adventure"];

const assassins = new Book("Assassin's creed revelations", 354, tags, author);

console.log(assassins);

const assassins2 = new Book("Assassin's creed black unity", 224, tags, author);

console.log(assassins2);