function calculateSquareArea() {
    const squareSide = getInputValueById('square-side');
    if(isNaN(squareSide)) {
        emptyOrStringMsg();
        return;
    }
    const area = Math.pow(squareSide, 2);

    setElementInnerTextById('square-area', parseFloat(area.toFixed(2)));

    addToCalculationEntry('Square(S)', area);
}