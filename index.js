let inputEl = document.getElementById("input-el");

let convertBtn = document.getElementById("convert-btn");

let conversionTextLength = document.getElementById("Conversion--text--length");

let conversionTextVolume = document.getElementById("Conversion--text--volume");

let conversionTextMass = document.getElementById("Conversion--text--mass");

convertBtn.addEventListener("click", function () {
  let inputValue = Number(inputEl.value);

  conversionLength(inputValue);

  conversionVolume(inputValue);

  conversionMass(inputValue);
});

function conversionLength(number) {
  let feetConversion = number * 3.2808;
  let meterConversion = number / 3.2808;
  conversionTextLength.textContent = `${number} meter = ${feetConversion.toFixed(
    4
  )} | ${number} feet = ${meterConversion.toFixed(4)} meter`;
}

function conversionVolume(number) {
  let litersConversion = number * 3.78541;
  let gallonsConversion = number / 3.78541;
  conversionTextVolume.textContent = `${number} gallons = ${litersConversion.toFixed(
    4
  )} | ${number} liters = ${gallonsConversion.toFixed(4)} pounds`;
}

function conversionMass(number) {
  let kilogramsConversion = number * 2.2046;
  let poundsConversion = number / 2.2046;
  conversionTextMass.textContent = `${number} pounds = ${kilogramsConversion.toFixed(
    4
  )} | ${number} kilograms = ${poundsConversion.toFixed(4)} pounds`;
}
