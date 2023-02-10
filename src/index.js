import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { Currency } from "./api-calls/exchangerate-api";

async function getCurrency(value, iso) {
  const response = await Currency.getCurrency(value, iso);
  if (response.conversion_rates) {
    printCurrency(response, value, iso);
  } else {
    printError(response);
  }
}

function calculateCurrency(value, exchangeRate) {
  return (value * exchangeRate).toFixed(2);
}

function printError(error) {
  const errorMessage = `There was an error in this request ${error["error-type"]}`;
  document.querySelector("#response").innerText = errorMessage;
}

function printCurrency(response, inputValue, exchangeIso) {
  /* eslint-disable no-console */
  console.log(response);
  console.log(inputValue);
  const result = response.conversion_rates.exchangeIso;
  const exchangeResult = calculateCurrency(inputValue, result);
  document.querySelector("#response").innerText = exchangeResult;
  console.log(exchangeIso);
  /* eslint-enable no-console */
}

const handleForm = () => {
  const inputValue = document.querySelector("input").value;
  const inputIso = document.querySelector("#input-iso").value;
  const exchangeIso = document.querySelector("#exchange-iso").value;

  getCurrency(inputIso, inputValue, exchangeIso);
};

window.addEventListener("load", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleForm();
  });
});
