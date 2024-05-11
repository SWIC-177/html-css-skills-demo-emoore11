import { ERRORS, hideError, renderError } from "./src/lib";

const formEls = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#message"),
];

formEls.forEach((el) => {
  el.addEventListener("blur", (e) => {
    const elError = ERRORS.find((error) => error.id === e.target.id);
    if (!elError.validate(e.target.value)) renderError(e.target, elError.msg);
    else hideError(e.target);
  });
});

formEls.forEach((el) => {
  el.addEventListener("focus", (e) => {
    const elError = ERRORS.find((error) => error.id === e.target.id);
    elError.isTouched = true;
    hideError(e.target);
  });
});
