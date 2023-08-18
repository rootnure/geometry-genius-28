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