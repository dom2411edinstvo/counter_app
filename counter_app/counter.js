const counterEl = document.querySelector('[data-find="counterValue"]');
const addOnePoolBtn = document.getElementById("addOnePoolBtn");
const addTwoPoolsBtn = document.getElementById("addTwoPoolsBtn");
const resetBtn = document.getElementById("resetBtn");
// counterEl = 1

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
counterEl.innerText = counter;

addOnePoolBtn.addEventListener('click', function () {
    counter = counter + parseInt(addOnePoolBtn.dataset.pools);
    counterEl.innerText = counter;
});

addTwoPoolsBtn.addEventListener('click', function () {
    counter = counter + parseInt(addTwoPoolsBtn.dataset.pools);
    counterEl.innerText = counter;
});

resetBtn.addEventListener('click', function () {
    counter = COUNTER_INITIAL_VALUE;
    counterEl.innerText = counter;
});
