const rhombusAngleInputField = document.querySelector('#rhombus-angle');
rhombusAngleInputField.addEventListener('keyup', rhombusAngleValidation);
rhombusAngleInputField.addEventListener('change', rhombusAngleValidation);
function rhombusAngleValidation() {
    const angleValue = getInputValueById('rhombus-angle');
    if (angleValue < 0 || angleValue > 90 || isNaN(angleValue)) {
        rhombusAngleInputField.classList.remove('bg-gray-100');
        rhombusAngleInputField.classList.add('bg-red-200');
    }
    else {
        rhombusAngleInputField.classList.remove('bg-red-200');
        rhombusAngleInputField.classList.add('bg-gray-100');
    }
}
function calculateRhombusArea() {
    const rhombusAreaBy = document.querySelector('#rhombus-area-by').value;
    let area = 0;
    if (rhombusAreaBy === 'side-angle') {
        const side = getInputValueById("rhombus-side");
        const angle = getInputValueById("rhombus-angle");
        if (isNaN(side) || isNaN(angle)) {
            emptyOrStringMsg();
            return;
        }
        else if (side <= 0) {
            negativeNotAllowed();
            return;
        }
        else if (angle < 0 || angle > 90) {
            alert('θ value must be between 0 90');
            return;
        }
        const angleToRadian = angle * Math.PI / 180;
        area = Math.pow(side, 2) * Math.sin(angleToRadian);
        addToCalculationEntry('Rhombus(S-θ)', area);
    }
    else if (rhombusAreaBy === 'diagonals') {
        const d1 = getInputValueById("rhombus-diagonal-1");
        const d2 = getInputValueById("rhombus-diagonal-2");
        if (isNaN(d1) || isNaN(d2)) {
            emptyOrStringMsg();
            return;
        }
        else if (d1 <= 0 || d2 <= 0) {
            negativeNotAllowed();
            return;
        }
        area = 0.5 * d1 * d2;
        addToCalculationEntry('Rhombus(d1-d2)', area);
    }
    else if (rhombusAreaBy === 'base-height') {
        const base = getInputValueById("rhombus-base");
        const height = getInputValueById("rhombus-height");
        if (isNaN(base) || isNaN(height)) {
            emptyOrStringMsg();
            return;
        }
        else if (base <= 0 || height <= 0) {
            negativeNotAllowed();
            return;
        }
        area = base * height;
        addToCalculationEntry('Rhombus(B-H)', area);
    }
    setElementInnerTextById('rhombus-area', parseFloat(area.toFixed(2)));

}

function toggleRhombusCardElements() {
    setElementInnerTextById('rhombus-area', '...');

    const selection = document.querySelector('#rhombus-area-by').value;
    const calculateBtn = document.querySelector('#calculate-rhombus-area');

    if (selection === 'select') {
        calculateBtn.setAttribute('disabled', true);
    } else {
        calculateBtn.removeAttribute('disabled');
    }

    const willElementsVisible = {
        'select': {
            'area-formula-side-angle': true,
            'area-formula-diagonals': true,
            'area-formula-base-height': true,
            'user-input-side-angle': true,
            'user-input-diagonals': true,
            'user-input-base-height': true,
        },
        'side-angle': {
            'area-formula-side-angle': false,
            'area-formula-diagonals': true,
            'area-formula-base-height': true,
            'user-input-side-angle': false,
            'user-input-diagonals': true,
            'user-input-base-height': true,
        },
        'diagonals': {
            'area-formula-side-angle': true,
            'area-formula-diagonals': false,
            'area-formula-base-height': true,
            'user-input-side-angle': true,
            'user-input-diagonals': false,
            'user-input-base-height': true,
        },
        'base-height': {
            'area-formula-side-angle': true,
            'area-formula-diagonals': true,
            'area-formula-base-height': false,
            'user-input-side-angle': true,
            'user-input-diagonals': true,
            'user-input-base-height': false,
        }
    }

    const toggleElements = willElementsVisible[selection];

    for (const elementId in toggleElements) {
        toggleElementById(elementId, toggleElements[elementId]);
    }
}