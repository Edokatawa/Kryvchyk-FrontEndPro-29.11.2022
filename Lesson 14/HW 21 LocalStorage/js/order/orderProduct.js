"use strict";

const orderProduct = product => {
    clearElements(["error-message"]);
    delete product.description;
    const showTableOrderElem = document.querySelector(".order-successful");
    const errorMessageElem = document.querySelector(".error-message");
    const formValues = getFormValues();

    if (isFormValid(formValues, errorMessageElem)) {
        const order = Object.assign({orderDate: new Date().getTime()}, product, formValues);
        clearElements(["products", "details", "order-successful"]);
        createElement("h2", {className: "title"}, null, "Замовлення успішно оформлене!", showTableOrderElem);

        showOrderTable(ORDER_TABLE_CONFIG, order, showTableOrderElem);

        addOrderToOrdersList(order);
    }
};
