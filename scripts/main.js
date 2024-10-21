"use strict";

//get html elements into variables
let daysInput = document.getElementById("daysInput");
let pickupDateInput = document.getElementById("pickupDateInput");
let tollCheckbox = document.getElementById("tollCheckbox");
let gpsCheckbox = document.getElementById("gpsCheckbox");
let assistCheckbox = document.getElementById("assistCheckbox");
let under25YesInput = document.getElementById("under25YesInput");
let over25NoInput = document.getElementById("over25NoInput");
let carRentalP = document.getElementById("carRentalP");
let optionsCostP = document.getElementById("optionsCostP");
let under25SurchargeP = document.getElementById("under25SurchargeP");
let totalCostSpan = document.getElementById("totalCostSpan");

// let daysInput = {
//   type: "number",
//   id: "daysInput",
//   min: 1,
//   value: "",
// };

function estimateCost() {
  //get values out of html input element
  let numberOfDays = daysInput.value;
  let pickupDate = pickupDateInput.value;
  let toll = tollCheckbox.checked;
  let gps = gpsCheckbox.checked;
  let assist = assistCheckbox.checked;
  let under25 = under25YesInput.checked;
  let over25 = over25NoInput.checked;

  console.log(numberOfDays);
  console.log(pickupDate);
  console.log(toll);
  console.log(gps);
  console.log(assist);
  console.log(under25);
  console.log(over25);
}
