"use strict";

const showAddUserForm = () => {
    clearElements(["form-parent"]);
    const parentForm = document.querySelector(".form-parent");
    const orderForm = createElement("form", {className: "user-form", name: "addUserForm"}, null, null, parentForm);

    showForm(orderForm);

    createElement(
        "input",
        {type: "button", value: "Додати користувача"},
        {
            click: () => {
                addUser(orderForm);
            },
        },
        null,
        orderForm
    );
    createElement("div", {className: "error-message"}, null, null, orderForm);
};
