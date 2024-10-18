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

function animateCounter(target, duration = 700) {
    // Блокируем кнопки перед началом анимации
    addOnePoolBtn.disabled = true;
    addTwoPoolsBtn.disabled = true;
    resetBtn.disabled = true;

    const start = counter;
    const change = target - start;
    const startTime = performance.now();

    const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        counter = Math.floor(start + change * progress);
        updateCounterDisplay();

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
        //Отменяем блокировку кнопок по окончании анимации
        addOnePoolBtn.disabled = false;
        addTwoPoolsBtn.disabled = false;
        resetBtn.disabled = false;
        }
    };

    requestAnimationFrame(animate);
}

addOnePoolBtn.addEventListener('click', function () {
    const poolsToAdd = parseInt(addOnePoolBtn.dataset.pools) || 0;
    animateCounter(counter + poolsToAdd);
});

addTwoPoolsBtn.addEventListener('click', function () {
    const poolsToAdd = parseInt(addTwoPoolsBtn.dataset.pools) || 0;
    animateCounter(counter + poolsToAdd);
});

resetBtn.addEventListener('click', function () {
    animateCounter(COUNTER_INITIAL_VALUE);
});
