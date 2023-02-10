
export default class Currency {
  static async getCurrency(id) {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGERATE_API_KEY}/latest/${id}?`
      );
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}
        ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch (error) {
      return error;
    }
  }
}
