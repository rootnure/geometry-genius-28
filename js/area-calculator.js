function calculateTriangleArea() {
    // get triangle base value
    const baseField = document.querySelector('#triangle-base');
    const base = parseFloat(baseField.value);

    // get triangle height value
    const heightField = document.querySelector('#triangle-height');
    const height = parseFloat(heightField.value);

    // calculate triangle area
    const area = 0.5 * base * height;

    // show triangle area
    const triangleArea = document.querySelector("#triangle-area");
    triangleArea.innerText = area;
}

function calculateRectangleArea() {
    // get rectangle height value
    const heightField = document.querySelector('#rectangle-height');
    const height = parseFloat(heightField.value);

    // get rectangle width value
    const widthField = document.querySelector('#rectangle-width');
    const width = parseFloat(widthField.value);

    // calculate rectangle area
    const area = height * width;

    // show rectangle area
    const rectangleArea = document.querySelector("#rectangle-area");
    rectangleArea.innerText = area;
}

function calculateParallelogramArea() {
    const base = getInputValueById("parallelogram-base");
    const height = getInputValueById("parallelogram-height");
    const area = base * height;

    setElementInnerTextById('parallelogram-area', area);
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
    setElementInnerTextById('rhombus-area', area.toFixed(2));
}



/* reuseable function --> reduce duplicate code */

// reusable get input value field in number
function getInputValueById(fieldId) {
    const field = document.querySelector('#' + fieldId);
    const fieldString = field.value;
    const value = parseFloat(fieldString);
    return value;
}

// reusable set span, p, div etc. text
function setElementInnerTextById(elementId, area) {
    const element = document.querySelector('#' + elementId);
    element.innerText = area;
}

// toggle element function
function toggleElementById(elementId, isHidden) {
    const element = document.querySelector('#' + elementId);
    if (isHidden) {
        element.classList.remove('block');
        element.classList.add('hidden');
    }
    else {
        element.classList.remove('hidden');
        element.classList.add('block');
    }
}

// empty or string value input message
function emptyOrStringMsg() {
    alert('Input fields cannot be empty or string');
}

function toggleRhombusAreas() {
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