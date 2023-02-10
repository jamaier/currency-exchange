import { Currency } from "./api-calls/exchangerate-api";

export async function getCurrency(id) {
  const response = await Currency.getCurrency(id);
  if (response.main) {
    printNews(response, id);
  } else {
    printError(response, id);
  }
}
