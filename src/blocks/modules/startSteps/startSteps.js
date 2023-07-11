const steps = document.querySelectorAll('.startSteps__num');
const viewportHeight = window.innerHeight;

let activeStepIndexes = new Set();

function setActiveSteps(index) {
  const currentIndexes = Array.from(activeStepIndexes);
  const newIndexes = currentIndexes.filter(i => i <= index);
  newIndexes.push(index);
  activeStepIndexes = new Set(newIndexes);
}

function removeInactiveSteps() {
  const currentIndexes = Array.from(activeStepIndexes);
  currentIndexes.forEach(index => {
    const rect = steps[index].getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    if (elemTop > viewportHeight || elemBottom < 0) {
      activeStepIndexes.delete(index);
    }
  });
}

function updateActiveSteps() {
  const scrollPosition = window.scrollY;

  steps.forEach((step, index) => {
    const rect = step.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    if (scrollPosition >= 0 && elemTop <= viewportHeight / 2) {
      setActiveSteps(index);
    } else if (scrollPosition <= 0 && elemBottom >= viewportHeight / 2) {
      setActiveSteps(index);
    }
  });

  removeInactiveSteps();

  steps.forEach((step, index) => {
    if (activeStepIndexes.has(index)) {
      step.classList.add('startSteps__num_active');
    } else {
      step.classList.remove('startSteps__num_active');
    }
  });
}

window.addEventListener('scroll', updateActiveSteps);
