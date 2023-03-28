class Address {
  constructor(street, number, neighborhood, city, state) {
    this.street = street;
    this.number = number;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
  }

  fullAddress() {
    return `Rua: ${this.street}, Nº ${this.number}, bairro: ${this.city}/${this.state}`;
  }
}

module.exports = Address;