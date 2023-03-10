const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const ageInYears = today.diff(birthday, "year");
  const nextBirthday = birthday.add(ageInYears + 1, "year");
  const daysNextBirthday = nextBirthday.diff(today, "day");

  console.log(`Idade: ${ageInYears}`);
  console.log(`Próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`);
  console.log(`Dias para o próximo aniversário: ${daysNextBirthday}`)
}

birthday("2002-12-30");
