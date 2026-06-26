export function calculatePrice(basePrice, currencyRate, yearly) {

  let price = basePrice * currencyRate;

  if (yearly) {
    price = price * 12 * 0.8;
  }

  return Math.round(price);

}