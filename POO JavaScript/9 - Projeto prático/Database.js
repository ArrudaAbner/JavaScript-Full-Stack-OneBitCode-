module.exports = class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: [],
  };

  find(key) {
    //getter para o atributo #storage
    return this.#storage[key];
  }

  saveAuthor(author) {
    this.#storage.authors.push(author);
  }

  // ====== BOOKS ======

  findBookByName(bookName) {
    return this.#storage.books.find((b) => b.name === bookName);
  }

  saveBook(book) {
    const bookExists = this.findBookByName(book.name);
    if (!bookExists) {
      this.#storage.books.push(book);
    }
  }

  addBookToStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.addToStock(quantity);
  }

  removeBookFromStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.removeFromStock(quantity);
  }

  // ====== POSTERS ======

  findPosterByName(posterName) {
    return this.#storage.posters.find((p) => p.name === posterName);
  }

  savePoster(poster) {
    const posterExists = this.findBookByName(poster.name);
    if (!posterExists) {
      this.#storage.posters.push(poster);
    }
  }

  addPosterToStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName);
    poster?.addToStock(quantity);
  }

  removePosterFromStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName);
    poster?.removeFromStock(quantity);
  }

  // ====== USERS ======

  saveUser(user) {
    const userExists = this.#storage.users.find((u) => u.email === user.email);
    if (!userExists) {
      this.#storage.users.push(user);
    }
  }

  // ====== ORDER ======
  saveOrder(order) {
    this.#storage.orders.push(order);
  }

  showStorage() {
    console.table(this.#storage.authors);
    console.table(this.#storage.books);
    console.table(this.#storage.posters);
    console.table(this.#storage.orders);
    console.table(this.#storage.users.map((order) => order.data));
  }
};
