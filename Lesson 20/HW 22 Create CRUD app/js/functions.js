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

const getFormValues = currentForm => {
    const {
        name: {value: name},
        password: {value: password},
        age: {value: age},
        email: {value: email},
        phone: {value: phone},
        bankCardNumber: {value: bankCardNumber},
    } = document.forms[currentForm];
    return {
        name,
        password,
        age: +age || "",
        email,
        phone,
        bankCardNumber: +bankCardNumber,
    };
};

const getCorrectFormat = time => (time < 10 ? `0${time}` : time);

const getFormatDate = milliseconds => {
    const date = new Date(milliseconds);

    const minutes = getCorrectFormat(date.getMinutes());
    const hours = getCorrectFormat(date.getHours());
    const day = getCorrectFormat(date.getDate());
    const month = getCorrectFormat(date.getMonth());
    const year = getCorrectFormat(date.getFullYear());

    return `${day}.${month}.${year} о ${hours}:${minutes}`;
};
