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
    if(rhombusAreaBy === 'side-angle') {
        const side = getInputValueById("rhombus-side");
        const angle = getInputValueById("rhombus-angle");
        if(isNaN(side) || isNaN(angle)) {
            alert('Please provide values in numbers format only');
            return;
        }
        const angleToRadian = angle * Math.PI / 180;
        area = Math.pow(side, 2) * Math.sin(angleToRadian);
    }
    else if(rhombusAreaBy === 'diagonals') {
        const d1 = getInputValueById("rhombus-diagonal-1");
        const d2 = getInputValueById("rhombus-diagonal-2");
        if(isNaN(d1) || isNaN(d2)) {
            alert('Please provide values in numbers format only');
            return;
        }
        area = 0.5 * d1 * d2;
    }
    else if(rhombusAreaBy === 'base-height') {
        const base = getInputValueById("rhombus-base");
        const height = getInputValueById("rhombus-height");
        if(isNaN(base) || isNaN(height)) {
            alert('Please provide values in numbers format only');
            return;
        }
        area = base * height;
    }
    
    setElementInnerTextById('rhombus-area', area.toFixed(2));
}



/* reuseable function --> reduce duplicate code */

// reusable get input value field in number
function getInputValueById(fieldId) {
    const field = document.querySelector('#'+fieldId);
    const fieldString = field.value;
    const value = parseFloat(fieldString);
    return value;
}

// reusable set span, p, div etc. text
function setElementInnerTextById(elementId, area) {
    const element = document.querySelector('#'+elementId);
    element.innerText = area;
}

// toggle element function
function toggleElementById(elementId, isHidden) {
    const element = document.querySelector('#'+elementId);
    if(isHidden) {
        element.classList.remove('block');
        element.classList.add('hidden');
    }
    else {
        element.classList.remove('hidden');
        element.classList.add('block');
    }
}

function toggleRhombusAreas() {
    const selection = document.querySelector('#rhombus-area-by').value;
    const calculateBtn = document.querySelector('#calculate-rhombus-area');

    if(selection === 'select') {
        calculateBtn.setAttribute('disabled', true);
        setElementInnerTextById('rhombus-area', '...');
        toggleElementById('area-formula-side-angle', true);
        toggleElementById('area-formula-diagonals', true);
        toggleElementById('area-formula-base-height', true);
        toggleElementById('user-input-side-angle', true);
        toggleElementById('user-input-diagonals', true);
        toggleElementById('user-input-base-height', true);
    }
    else if(selection === 'side-angle') {
        calculateBtn.removeAttribute('disabled');
        setElementInnerTextById('rhombus-area', '...');
        toggleElementById('area-formula-side-angle', false);
        toggleElementById('area-formula-diagonals', true);
        toggleElementById('area-formula-base-height', true);
        toggleElementById('user-input-side-angle', false);
        toggleElementById('user-input-diagonals', true);
        toggleElementById('user-input-base-height', true);
    }
    else if(selection === 'diagonals') {
        calculateBtn.removeAttribute('disabled');
        setElementInnerTextById('rhombus-area', '...');
        toggleElementById('area-formula-side-angle', true);
        toggleElementById('area-formula-diagonals', false);
        toggleElementById('area-formula-base-height', true);
        toggleElementById('user-input-side-angle', true);
        toggleElementById('user-input-diagonals', false);
        toggleElementById('user-input-base-height', true);
    }
    else if(selection === 'base-height') {
        calculateBtn.removeAttribute('disabled');
        setElementInnerTextById('rhombus-area', '...');
        toggleElementById('area-formula-side-angle', true);
        toggleElementById('area-formula-diagonals', true);
        toggleElementById('area-formula-base-height', false);
        toggleElementById('user-input-side-angle', true);
        toggleElementById('user-input-diagonals', true);
        toggleElementById('user-input-base-height', false);
    }
}