const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
const counter = document.getElementById("counter");
let counterValue = Number(counter.textContent);

function defineColor() {
  if (counterValue > 0) {
    counter.style.color = "rgb(0, 255, 0)";
  } else if (counterValue < 0) {
    counter.style.color = "rgb(255, 0, 0)";
  } else {
    counter.style.color = "rgba(0, 0, 0, 0)";
  }
}
function confirmReset() {
  if (confirm("Are you sure you want to reset counter?") === true) {
    return true;
  } else {
    return false;
  }
}
decreaseBtn.addEventListener("click", function () {
  counterValue--;
  counter.textContent = counterValue;
  defineColor();
});
resetBtn.addEventListener("click", function () {
  if (counterValue !== 0 && confirmReset()) {
    counter.textContent = 0;
    counterValue = 0;
    defineColor();
  }
});
increaseBtn.addEventListener("click", function () {
  counterValue++;
  counter.textContent = counterValue;
  defineColor();
});
