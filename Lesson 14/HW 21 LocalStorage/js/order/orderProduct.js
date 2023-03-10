"use strict";

const orderProduct = product => {
    clearElements(["error-message"]);

    const showTableOrderElem = document.querySelector(".order-successful");
    const errorMessageElem = document.querySelector(".error-message");
    const formValues = getFormValues();

    if (isFormValid(formValues, errorMessageElem)) {
        const order = Object.fromEntries(
            Object.entries({orderDate: new Date().getTime(), ...product, ...formValues}).filter(([key]) => key !== "description")
        );
        clearElements(["products", "details", "order-successful"]);

        createElement("h2", {className: "title"}, null, "Замовлення успішно оформлене!", showTableOrderElem);
        showOrderTable(order, showTableOrderElem);
        addOrderToOrdersList(order);
    }
};
