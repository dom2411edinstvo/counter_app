const counterEl = document.getElementById("counter-text");
const addOnePoolBtn = document.getElementById("addOnePoolBtn");
const addTwoPoolsBtn = document.getElementById("addTwoPoolsBtn");
const resetBtn = document.getElementById("resetBtn");

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
counterEl.innerText = counter;

addOnePoolBtn.addEventListener('click', function () {
    counter++;
    counterEl.innerText = counter;
});

addTwoPoolsBtn.addEventListener('click', function () {
    counter = counter +2;
    counterEl.innerText = counter;
});

resetBtn.addEventListener('click', function () {
    counter = COUNTER_INITIAL_VALUE;
    counterEl.innerText = counter;
});
