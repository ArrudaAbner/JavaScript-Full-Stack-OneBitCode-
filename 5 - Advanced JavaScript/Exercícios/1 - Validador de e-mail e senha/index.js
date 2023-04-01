function validateEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    const err = new Error("Invalid e-mail");
    err.input = "email";
    throw err;
  }
}

function validatePassword(password) {
  if (
    password.length < 8 ||
    !password.match(/[a-z]/) || //de a-z
    !password.match(/[A-Z]/) || //de A-Z
    !password.match(/[0-9]/) || //de 0-9
    !password.match(/[^a-zA-Z0-9\s]/) //caracteres que não sejam de aA-zZ, 0-9 pulando espaços
  ) {
    const err = new Error("Senha inválida.");
    err.input = "password";
    throw err;
  }
}

function resetFormStyles(inputs) {
  Object.entries(inputs).forEach(([key, value]) => {
    value.classList.remove("success", "error");
    document.querySelector(`#${key}-error`).textContent = "";
  });
}

const userInputs = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
};

const form = document.querySelector("form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  resetFormStyles(userInputs);

  try {
    userInputs.name.classList.add("success");
    validateEmail(userInputs.email.value);
    userInputs.email.classList.add("success");
    validatePassword(userInputs.password.value);
    userInputs.password.classList.add("success");
  } catch (err) {
    userInputs[err.input].classList.add("error");
    document.querySelector(`#${err.input}-error`).textContent = err.message;
  }
});
