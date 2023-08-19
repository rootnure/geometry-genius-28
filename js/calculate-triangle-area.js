function calculateTriangleArea() {
    // get triangle base value
    const base = getInputValueById('triangle-base');

    // get triangle height value
    const height = getInputValueById('triangle-height');
    if(isNaN(base) || isNaN(height)) {
        emptyOrStringMsg();
        return;
    }
    else if(base <= 0 || height <= 0) {
        negativeNotAllowed();
        return;
    }

    // calculate triangle area
    const area = 0.5 * base * height;

    // show triangle area
    setElementInnerTextById('triangle-area', parseFloat(area.toFixed(2)));

    addToCalculationEntry('Triangle(B-H)', area);
}