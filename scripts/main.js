toll = document.getElementById("toll");
console.log(toll.value);

gps = document.getElementById("gps");
console.log(gps.value);

assist = document.getElementById("assist");
console.log(assist.value);

toll.addEventListener("click", () => {
  console.log(toll.value);
});

gps.addEventListener("click", () => {
  console.log(gps.value);
});

assist.addEventListener("click", () => {
  console.log(assist.value);
});
