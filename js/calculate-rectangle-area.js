function calculateRectangleArea() {
    // get rectangle height value
    const height = getInputValueById('rectangle-height');

    // get rectangle width value
    const width = getInputValueById('rectangle-width');

    // isNaN validation check
    if(isNaN(height) || isNaN(width)) {
        emptyOrStringMsg();
        return;
    }

    // calculate rectangle area
    const area = height * width;

    // show rectangle area
    setElementInnerTextById('rectangle-area', parseFloat(area.toFixed(2)));

    // add result to history container
    addToCalculationEntry('Rectangle(H-W)', area);
}