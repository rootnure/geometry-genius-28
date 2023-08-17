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
    const side = getInputValueById("rhombus-side");
    const angle = getInputValueById("rhombus-angle");
    const angleToRadian = angle * Math.PI / 180;
    const area = side * side * Math.sin(angleToRadian);
    
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