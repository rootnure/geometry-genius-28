function calculateEllipseArea() {
    const majorRadius = getInputValueById('ellipse-major-radius');
    const minorRadius = getInputValueById('ellipse-minor-radius');
    if(isNaN(majorRadius) || isNaN(minorRadius)) {
        emptyOrStringMsg();
        return;
    }
    const area = Math.PI * majorRadius * minorRadius;
    setElementInnerTextById('ellipse-area', parseFloat(area.toFixed(2)));
    addToCalculationEntry('Ellipse(A-B)', area);
}