function PhoneNumber(phoneNumberString) {
  const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "");
  //s - espaços, a-z-A-Z todos de A à z Maisculo e minisculo, g de global, "" para o que irá substituir
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];
  //?<= é o lookBehind, \+ para adicionar o mais no inicio, d{1,3} para os dígitos
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0];
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "");
}

console.log(new PhoneNumber("+55 (22) 9 9876-5432"));
console.log(new PhoneNumber("+1 (999) as 555-999-8888"));
