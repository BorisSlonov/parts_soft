const steps = document.querySelectorAll('.startSteps__num');
const viewportHeight = window.innerHeight;

let activeStepIndices = [];
let activeTimeout = null;

function setActiveSteps(indices) {
    activeStepIndices.forEach((index) => {
        steps[index]?.classList.remove('startSteps__num_active');
    });

    indices.forEach((index) => {
        steps[index]?.classList.add('startSteps__num_active');
    });

    activeStepIndices = indices;
}

function updateActiveSteps() {
    const scrollPosition = window.scrollY;
    const newActiveIndices = [];

    for (let i = 0; i < steps.length; i++) {
        const rect = steps[i].getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;

        if (
            (scrollPosition >= 0 && elemTop <= viewportHeight / 2) ||
            (scrollPosition <= 0 && elemBottom >= viewportHeight / 2)
        ) {
            newActiveIndices.push(i);
        }
    }

    if (newActiveIndices.length > 0) {
        if (activeTimeout !== null) {
            clearTimeout(activeTimeout);
            activeTimeout = null;
        }

        setActiveSteps(newActiveIndices);
    } else if (activeTimeout === null) {
        activeTimeout = setTimeout(() => {
            setActiveSteps([]);
            activeTimeout = null;
        }, 1000);
    }
}

let isThrottled = false;

function throttleScroll() {
    if (!isThrottled) {
        requestAnimationFrame(() => {
            updateActiveSteps();
            isThrottled = false;
        });
        isThrottled = true;
    }
}

window.addEventListener('scroll', throttleScroll);
