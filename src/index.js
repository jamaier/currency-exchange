import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { Currency } from "./api-calls/exchangerate-api";

async function getCurrency(iso, value, exchangeIso) {
  const response = await Currency.getCurrency(iso);
  if (response.conversion_rates) {
    printCurrency(response, value, exchangeIso);
  } else {
    printError(response, iso);
  }
}

async function calculateCurrency(response, inputResponse, value) {
  return (response[inputResponse] * value).toFixed(2);
}

function printError(error, inputIso) {
  const errorMessage = `There was a problem accessing the currency conversion data from ExchangeRate-API for ${inputIso}: ${error["error-type"]}`;
  document.getElementById("error").innerText = errorMessage;
}

function printCurrency(apiResponse, value, exchangeIso) {
  const response = apiResponse["conversion_rates"];
  const result = calculateCurrency(response[exchangeIso], value);
  document.getElementById("response-container").innerText = result;
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
