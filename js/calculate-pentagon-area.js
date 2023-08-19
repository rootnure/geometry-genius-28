function calculatePentagonArea() {
    const perimeter = getInputValueById('pentagon-apothem');
    const apothem = getInputValueById('pentagon-apothem');
    if(isNaN(perimeter) || isNaN(apothem)) {
        emptyOrStringMsg();
        return;
    }
    else if(perimeter <= 0 || apothem <= 0) {
        negativeNotAllowed();
        return;
    }

    const area = 0.5 * perimeter * apothem;

    setElementInnerTextById('pentagon-area', parseFloat(area.toFixed(2)));

    addToCalculationEntry('Pentagon(P-A)', area);
}