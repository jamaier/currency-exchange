import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { Currency } from "./api-calls/exchangerate-api";

async function getCurrency(iso, value) {
  const response = await Currency.getCurrency(iso);
  if (response.conversion_rates) {
    printCurrency(response, value);
  } else {
    printError(response);
  }
}

function calculateCurrency(value, exchangeRate) {
  return (value * exchangeRate).toFixed(2);
}

function printError(error) {
  const errorMessage = `There was an error in this request ${error["error-type"]}`;
  document.querySelector("#response-display").innerText = errorMessage;
}

function printCurrency(response, value) {
  /* eslint-disable no-console */
  console.log(response);
  console.log(value);
  let result = response['conversion_rates'];
  const responseDisplay = document.querySelector('#response-display');
  let exchangeOutput = document.querySelector('#exchange-iso').value;
  responseDisplay.value = calculateCurrency(value, result[exchangeOutput]);
  console.log(responseDisplay.value);
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
