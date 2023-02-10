import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { Currency } from "./api-calls/exchangerate-api";

async function getCurrency(iso, value) {
  const response = await Currency.getCurrency(iso);
  if (response.conversion_rates) {
    printCurrency(response, value);
  } else {
    printError(response, iso);
  }
}

function calculateCurrency(rate, value) {
  return (rate * value).toFixed(2);
}

function printError(error, inputIso) {
  const errorMessage = `There was a problem accessing the currency conversion data from ExchangeRate-API for ${inputIso}: ${error["error-type"]}`;
  document.getElementById("error").innerText = errorMessage;
}

function printCurrency(value) {
  const result = response.conversion_rates;
  const exchangeResult = calculateCurrency(result, value);
  document.querySelector("#input-response").innerText = exchangeResult;
}

const handleForm = () => {
  const inputValue = document.querySelector("input").value;
  const inputIso = document.querySelector("#input-iso").value;
  const exchangeIso = document.querySelector("#exchange-iso").value;
  getCurrency(inputIso, inputValue);
};

window.addEventListener("load", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleForm();
  });
});
