function calculateParallelogramArea() {
    const base = getInputValueById("parallelogram-base");
    const height = getInputValueById("parallelogram-height");
    const area = base * height;

    setElementInnerTextById('parallelogram-area', parseFloat(area.toFixed(2)));
}