"use strict";

function fahrenheitToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}
let fahrenheit = 100;
let celsius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`);


