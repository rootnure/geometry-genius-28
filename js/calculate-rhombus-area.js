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
        const angleToRadian = angle * Math.PI / 180;
        area = Math.pow(side, 2) * Math.sin(angleToRadian);
    }
    else if (rhombusAreaBy === 'diagonals') {
        const d1 = getInputValueById("rhombus-diagonal-1");
        const d2 = getInputValueById("rhombus-diagonal-2");
        if (isNaN(d1) || isNaN(d2)) {
            emptyOrStringMsg();
            return;
        }
        area = 0.5 * d1 * d2;
    }
    else if (rhombusAreaBy === 'base-height') {
        const base = getInputValueById("rhombus-base");
        const height = getInputValueById("rhombus-height");
        if (isNaN(base) || isNaN(height)) {
            emptyOrStringMsg();
            return;
        }
        area = base * height;
    }
    setElementInnerTextById('rhombus-area', parseFloat(area.toFixed(2)));

    addToCalculationEntry('Rhombus', area);
}

function toggleRhombusCardElements() {
    const selection = document.querySelector('#rhombus-area-by').value;
    const calculateBtn = document.querySelector('#calculate-rhombus-area');
    setElementInnerTextById('rhombus-area', '...');

    if (selection === 'select') {
        calculateBtn.setAttribute('disabled', true);
        const toggleElements = {
            'area-formula-side-angle': true,
            'area-formula-diagonals': true,
            'area-formula-base-height': true,
            'user-input-side-angle': true,
            'user-input-diagonals': true,
            'user-input-base-height': true,
        }
        for(const element in toggleElements) {
            toggleElementById(element, toggleElements[element]);
        }
    }
    else if (selection === 'side-angle') {
        calculateBtn.removeAttribute('disabled');
        const toggleElements = {
            'area-formula-side-angle': false,
            'area-formula-diagonals': true,
            'area-formula-base-height': true,
            'user-input-side-angle': false,
            'user-input-diagonals': true,
            'user-input-base-height': true,
        }
        for(const element in toggleElements) {
            toggleElementById(element, toggleElements[element]);
        }
    }
    else if (selection === 'diagonals') {
        calculateBtn.removeAttribute('disabled');
        const toggleElements = {
            'area-formula-side-angle': true,
            'area-formula-diagonals': false,
            'area-formula-base-height': true,
            'user-input-side-angle': true,
            'user-input-diagonals': false,
            'user-input-base-height': true,
        }
        for(const element in toggleElements) {
            toggleElementById(element, toggleElements[element]);
        }
    }
    else if (selection === 'base-height') {
        calculateBtn.removeAttribute('disabled');
        const toggleElements = {
            'area-formula-side-angle': true,
            'area-formula-diagonals': true,
            'area-formula-base-height': false,
            'user-input-side-angle': true,
            'user-input-diagonals': true,
            'user-input-base-height': false,
        }
        for(const element in toggleElements) {
            toggleElementById(element, toggleElements[element]);
        }
    }
}