document.addEventListener("DOMContentLoaded", function () {
  const fullNameInput = document.getElementById("full-name");
  if (fullNameInput) {
    fullNameInput.focus();
  }
});

import {
  ERRORS,
  disableSubmitButton,
  enableSubmitButton,
  hideError,
  renderError,
} from "./src/lib";

const formEls = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#message"),
  document.querySelector("#submit-button"),
];
console.log(formEls);

formEls.forEach((el) => {
  el.addEventListener("blur", (e) => {
    const elError = ERRORS.find((error) => error.id === e.target.id);
    if (elError && !elError.validate(e.target.value)) {
      renderError(e.target, elError.msg);
    } else {
      hideError(e.target);
      enableSubmitButton();
    }
    disableSubmitButton();
  });
});

const submitBtn = document.querySelector("#submit-button");
submitBtn.addEventListener("click", function (event) {
  const formFieldValues = {
    fullName: document.getElementById("full-name").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  const isAnyFieldEmpty = Object.values(formFieldValues).some(
    (value) => value === "",
  );

  if (isAnyFieldEmpty) {
    event.preventDefault();
    alert("All fields must be filled out.");
  }
});
