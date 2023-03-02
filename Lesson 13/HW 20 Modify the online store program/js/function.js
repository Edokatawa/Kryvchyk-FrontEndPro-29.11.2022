"use strict";

const clearElements = classList => {
    for (let className of classList) {
        const elem = document.querySelector(`.${className}`);

        elem.innerHTML = "";
    }
};

const createElement = (tagName, attributes, events, textContent, parentElem) => {
    const newElem = document.createElement(tagName);

    if (attributes) {
        for (let key in attributes) {
            if (key === "className") {
                newElem.setAttribute("class", attributes[key]);
            } else {
                newElem.setAttribute(key, attributes[key]);
            }
        }
    }

    if (events) {
        for (let event in events) {
            newElem.addEventListener(event, events[event]);
        }
    }

    newElem.textContent = textContent || "";
    parentElem.appendChild(newElem);

    return newElem;
};

const isFormValid = (formValues, errorMessageElem) => {
    let isValid = true;

    for (const key in formValues) {
        const {regex, errorMessage} = FORM_VALIDATION[key];

        if (!regex.test(formValues[key])) {
            isValid = false;
            createElement("span", null, null, errorMessage, errorMessageElem);
        }
    }

    return isValid;
};
