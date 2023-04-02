"use strict";

const showOrderListItem = (elem, idx, ordersContainerElem) => {
    const ordersItemElem = createElement("div", {className: "orders-item"}, null, null, ordersContainerElem);
    const orderBtnInfoElem = createElement(
        "div",
        {className: "btn-show-order-info", "data-order-id": idx},
        {
            click: event => {
                showOrderInfo(event, elem, idx);
            },
        },
        null,
        ordersItemElem
    );
    createElement("span", null, null, `Дата замовлення: ${getFormatDate(elem.orderDate)}`, orderBtnInfoElem);
    createElement("span", null, null, `Ціна замовлення: ${elem.price} грн`, orderBtnInfoElem);
    createElement("div", {className: "order-info"}, null, null, ordersItemElem);
};
