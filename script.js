const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
const counter = document.getElementById("counter");
let counterValue = Number(counter.textContent);

decreaseBtn.addEventListener("click", function () {
  counterValue--;
  counter.textContent = counterValue;
});
resetBtn.addEventListener("click", function () {
  counter.textContent = 0;
  counterValue = 0;
});
increaseBtn.addEventListener("click", function () {
  counterValue++;
  counter.textContent = counterValue;
});
