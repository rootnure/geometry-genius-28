function calculateCircleArea() {
    const radius = getInputValueById('circle-radius');
    if(isNaN(radius)) {
        emptyOrStringMsg();
        return;
    }
    else if(radius <= 0) {
        negativeNotAllowed();
        return;
    }
    const area = Math.PI * Math.pow(radius, 2);

    setElementInnerTextById('circle-area', parseFloat(area.toFixed(2)));

    addToCalculationEntry('Circle(R)', area);
}