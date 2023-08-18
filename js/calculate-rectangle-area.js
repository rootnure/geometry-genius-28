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
    setElementInnerTextById('rectangle-area', parseFloat(area.toFixed(2)));

    addToCalculationEntry('Rectangle(H-W)', area);
}