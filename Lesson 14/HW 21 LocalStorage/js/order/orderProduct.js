"use strict";

const orderProduct = product => {
    clearElements(["error-message"]);
    delete product.description;
    const showTableOrderElem = document.querySelector(".order-list");
    const errorMessageElem = document.querySelector(".error-message");
    const formValues = getFormValues();

    if (isFormValid(formValues, errorMessageElem)) {
        const order = Object.assign({}, product, formValues);
        clearElements(["products", "details", "order-list"]);
        createElement("h2", {className: "title"}, null, "Замовлення успішно оформлене!", showTableOrderElem);
        const orderTableElem = createElement("table", null, null, null, showTableOrderElem);
        const trHeadElem = createElement("tr", null, null, null, orderTableElem);
        for (let value of ORDER_TABLE_CONFIG) {
            createElement("th", null, null, value.thTitle, trHeadElem);
        }
        const trBodyElem = createElement("tr", null, null, null, orderTableElem);
        for (let key in order) {
            if (key === "img") {
                const tdBodyElem = createElement("td", null, null, null, trBodyElem);
                createElement("img", {src: order[key], width: "100", height: "100"}, null, null, tdBodyElem);
            } else {
                createElement("td", null, null, order[key], trBodyElem);
            }
        }
    }
};
