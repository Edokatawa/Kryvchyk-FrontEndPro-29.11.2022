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

const getFormValues = () => {
    const {
        fullName: {value: fullName},
        deliveryToCity: {value: deliveryToCity},
        newPostWarehouse: {value: newPostWarehouse},
        postpaidAndPaymentCard: {value: postpaidAndPaymentCard},
        countProducts: {value: countProducts},
        commentOrder: {value: commentOrder},
    } = document.forms[0];
    return {
        fullName,
        deliveryToCity,
        newPostWarehouse,
        postpaidAndPaymentCard,
        countProducts,
        commentOrder: commentOrder || "Користувач не залишив коментар(",
    };
};

const classListAndDisabledElem = (currentElem, pastElem) => {
    const pastBtnElem = document.querySelector(pastElem);
    currentElem.disabled = true;
    currentElem.classList.add("active");
    pastBtnElem.disabled = false;
    pastBtnElem.classList.remove("active");
};

const addOrderToOrdersList = order => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem("orders", JSON.stringify([...orders, order]));
};

const sortOrdersArr = orders => orders.sort((order1, order2) => order2.orderDate - order1.orderDate);

const getCorrectFormat = time => (time < 10 ? `0${time}` : time);

const getFormatDate = milliseconds => {
    const date = new Date(milliseconds);

    const minutes = getCorrectFormat(date.getMinutes());
    const hours = getCorrectFormat(date.getHours());
    const day = getCorrectFormat(date.getDate());
    const month = getCorrectFormat(date.getMonth());
    const year = getCorrectFormat(date.getFullYear());

    return `${hours}:${minutes} - ${day}.${month}.${year}`;
};
