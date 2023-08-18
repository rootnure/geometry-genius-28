/* reuseable function --> reduce duplicate code */

// reusable get input value field in number
function getInputValueById(fieldId) {
    const field = document.querySelector('#' + fieldId);
    const fieldString = field.value;
    const value = parseFloat(fieldString);
    return value;
}

// reusable set span, p, div etc. text
function setElementInnerTextById(elementId, area) {
    const element = document.querySelector('#' + elementId);
    element.innerText = area;
}

// toggle element function
function toggleElementById(elementId, isHidden) {
    const element = document.querySelector('#' + elementId);
    if (isHidden) {
        element.classList.remove('block');
        element.classList.add('hidden');
    }
    else {
        element.classList.remove('hidden');
        element.classList.add('block');
    }
}

// empty or string value input message
function emptyOrStringMsg() {
    alert('Input fields cannot be empty or string');
}


/* Data Validation */
/**
 * 1. set the proper type of the input field. (number, text, email)
 * 2. check type using typeof
 * 3. NaN (Not A Number): isNaN is checking whether the input is not a number or not
 */

/* add to calculation entry */
/**
 * 1. get the element where you want to add the dynamic HTML
 * 2. create an element you want to add
 * 3. if needed add some class
 * 4. set innerHTML. it could be dynamic Template string
 * 5. append the created element as a child of the parent
 */
function addToCalculationEntry(areaType, area) {
    const calculationEntry = document.querySelector('#calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('flex', 'justify-between', 'w-full', 'items-center', 'py-2');
    p.innerHTML = `
        <span>${count + 1}. ${areaType}</span>
        <span>Area: <span id="area-${count}">${parseFloat(area.toFixed(2))}cm<sup>2</sup></span></span>
        <span><button onclick="convertToMeterSquare(${area}, 'area-${count}', this)" class="btn btn-success btn-sm">Convert m<sup>2</sup></span>`;

    calculationEntry.appendChild(p);
}

function convertToMeterSquare(valueToConvert, areaId, target) {
    target.setAttribute('disabled', true);
    const toMeterSquare = valueToConvert / 10000;
    const element = document.querySelector('#' + areaId);
    element.innerHTML = `${parseFloat(toMeterSquare.toFixed(5))}m<sup>2</sup>`;
}