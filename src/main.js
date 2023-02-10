import { Currency } from "./api-calls/exchangerate-api";

export async function getCurrency(iso, value) {
  const response = await Currency.getCurrency(iso, value);
  if (response.success === true) {
    printCurrency(response);
  } else {
    printerror(response);
  }
}

export async function calculateCurrency(rate, value) {
  return (rate * value).toFixed(2);
}