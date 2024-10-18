// function calculateTotal() {
//   const dailyRate = 29.99;
//   const under25Fee = 40;
//   const days = document.getElementById("days").value || 0;

//   const options = ["tollTag", "gps", "roadsideAssistance"].reduce((total, id) => {
//     // return total + (document.getElementById(id).checked ? document.getElementById(id).value : 0);
//     console.log(total + (document.getElementById(id).checked ? document.getElementById(id).value : 0));
//   });

//   const under25 = document.querySelector('input[name="under25"]:checked').value === "yes" ? under25Fee : 0;

//   const carRentalCost = dailyRate * days;
//   const optionsCost = options * days;
//   const under25Surcharge = under25 * days;
//   const totalCost = carRentalCost + optionsCost + under25Surcharge;

//   //   document.getElementById("carRental").textContent = carRentalCost.toFixed(2);
// //   document.getElementById("optionsCost").textContent = optionsCost.toFixed(2);
// //   document.getElementById("under25Surcharge").textContent = under25Surcharge.toFixed(2);
// //   document.getElementById("totalDue").textContent = totalCost.toFixed(2);
// // }
