import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { getCurrency, calculateCurrency } from "./main";



function printCurrency(apiResponse, iso) {
  document.querySelector('input-response').innerHTML = null;
  let inputResponse = document.querySelector('input-response');
  let response = apiResponse['conversion_rates'];
  
}

const handleForm = () => {
  const inputIso = document.querySelector('#input-iso').value;
  const exchangeIso = document.querySelector('#exchange-iso').value;
  getConversion(inputIso, exchangeIso)
}


window.addEventListener('load', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleForm();
  })
})