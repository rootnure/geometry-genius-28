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
    // get triangle base value
    const heightField = document.querySelector('#rectangle-height');
    const height = parseFloat(heightField.value);
    
    // get rectangle height value
    const widthField = document.querySelector('#rectangle-width');
    const width = parseFloat(widthField.value);
    
    // calculate rectangle area
    const area = height * width;
    
    // show rectangle area
    const rectangleArea = document.querySelector("#rectangle-area");
    rectangleArea.innerText = area;
}