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
