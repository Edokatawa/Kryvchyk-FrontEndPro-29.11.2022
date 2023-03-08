"use strict";

const showForm = (parentForm, product) => {
    parentForm.querySelector(".btn-buy-product").remove();

    createElement("h2", {className: "sub-title"}, null, "Оформити замовлення", parentForm);
    const orderForm = createElement("form", {className: "order-form", name: "mainForm"}, null, null, parentForm);
    for (let value of FORM_CONFIG) {
        if (value.title) {
            createElement("label", {for: value.attributes.name}, null, value.title, orderForm);
        }
        const textFieldBlockElem = createElement("div", {className: "text-field-block"}, null, null, orderForm);
        const currentElement = createElement(value.tagName, value.attributes, value.handlers, value.content, textFieldBlockElem);
        if (value.tagName === "select" && value.options.length > 0) {
            for (let option of value.options) {
                createElement("option", option.attributes, option.handlers, option.content, currentElement);
            }
        }
        if (value.radioLabel) {
            createElement("label", value.radioLabel.attributes, null, value.radioLabel.textContent, textFieldBlockElem);
        }
    }
    createElement(
        "input",
        {type: "button", value: "Оформити замовлення"},
        {
            click: () => {
                orderProduct(product);
            },
        },
        null,
        orderForm
    );
    createElement("div", {className: "error-message"}, null, null, orderForm);
};
