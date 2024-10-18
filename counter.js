const counterEl = document.querySelector('[data-find="counterValue"]');
const addOnePoolBtn = document.getElementById("addOnePoolBtn");
const addTwoPoolsBtn = document.getElementById("addTwoPoolsBtn");
const resetBtn = document.getElementById("resetBtn");

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
updateCounterDisplay();

function updateCounterDisplay() {
    counterEl.innerText = counter;
}

addOnePoolBtn.addEventListener('click', function () {
    const poolsToAdd = parseInt(addOnePoolBtn.dataset.pools) || 0;
    counter += poolsToAdd;
    updateCounterDisplay();
});

addTwoPoolsBtn.addEventListener('click', function () {
    const poolsToAdd = parseInt(addTwoPoolsBtn.dataset.pools) || 0;
    counter += poolsToAdd;
    updateCounterDisplay();
});

resetBtn.addEventListener('click', function () {
    counter = COUNTER_INITIAL_VALUE;
    updateCounterDisplay();
});
