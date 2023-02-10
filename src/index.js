import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { getCurrency } from "./main";

function printError()

function printConversion(response, iso) {
  
}

const handleForm = () => {
  const inputIso = document.querySelector('#input-iso').value;
  const exchangeIso = document.querySelector('#exchange-iso').value;
}


window.addEventListener('load', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleForm();
  })
})