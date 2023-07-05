const steps = document.querySelectorAll('.startSteps__num');
const viewportHeight = window.innerHeight;

let activeStepIndex = -1;

function setActiveStep(index) {
    if (activeStepIndex !== index) {
        steps[activeStepIndex]?.classList.remove('startSteps__num_active');
        steps[index]?.classList.add('startSteps__num_active');
        activeStepIndex = index;
    }
}

function updateActiveStep() {
    const scrollPosition = window.scrollY;

    for (let i = 0; i < steps.length; i++) {
        const rect = steps[i].getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;

        if (scrollPosition >= 0 && elemTop <= viewportHeight / 2) {
            setActiveStep(i);
        } else if (scrollPosition <= 0 && elemBottom >= viewportHeight / 2) {
            setActiveStep(i);
        }
    }
}

window.addEventListener('scroll', updateActiveStep);
