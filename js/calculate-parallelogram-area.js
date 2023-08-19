function calculateParallelogramArea() {
    const base = getInputValueById("parallelogram-base");
    const height = getInputValueById("parallelogram-height");
    if(isNaN(base) || isNaN(height)) {
        emptyOrStringMsg();
        return;
    }
    const area = base * height;

    setElementInnerTextById('parallelogram-area', parseFloat(area.toFixed(2)));

    addToCalculationEntry('Parallelogram(B-H)', area);
}