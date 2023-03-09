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
    const ordersJSONFormat = localStorage.getItem("orders");
    if (ordersJSONFormat !== null) {
        const orders = JSON.parse(ordersJSONFormat);
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
    } else {
        const orders = [];
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
    }
};

const getFormatDate = milliseconds => {
    const date = new Date(milliseconds);

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let day = date.getDate();
    if (day < 10) day = "0" + day;

    let month = date.getMonth();
    if (month < 10) month = "0" + month;

    let year = date.getFullYear();
    if (year < 10) year = "0" + year;

    const result = `${hours}:${minutes} - ${day}.${month}.${year}`;

    return result;
};
