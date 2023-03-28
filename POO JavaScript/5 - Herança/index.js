class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }

  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class Apartment extends Property {
  constructor(number, area, price) {
    /* this.area = area; -- ESSE CÓDIGO GERA ERRO --*/
    super(area, price);
    this.number = number;
  }

  getFloor() {
    return this.number.slice(0, -2);
  }
}

const land = new Property(200, 50000);
const apt = new Apartment("201", 100, 160000);

console.log(land);

console.log(apt);
console.log(apt.getFloor());
