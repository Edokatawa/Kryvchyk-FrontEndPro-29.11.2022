"use strict";

const showNavigationBtn = () => {
    const btnBlockElem = document.querySelector(".navigation-btn");

    createElement(
        "button",
        {className: "btn-navigation active product-catalog-btn", disabled: "disabled"},
        {click: showProductCatalog},
        "Каталог товарів",
        btnBlockElem
    );
    createElement("button", {className: "btn-navigation my-orders-btn"}, {click: showOrders}, "Мої замовлення", btnBlockElem);
};

const showProductCatalog = ({target}) => {
    classListAndDisabledElem(target, ".my-orders-btn");
    clearElements(["orders"]);
    showCategories(DATA);
};
const showOrders = ({target}) => {
    classListAndDisabledElem(target, ".product-catalog-btn");
    clearElements(["categories", "products", "details", "order-successful"]);
    showOrdersList();
};
