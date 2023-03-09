"use strict";

const showOrdersList = () => {
    clearElements(["orders"]);

    const ordersBlockElem = document.querySelector(".orders");
    createElement("h1", {className: "title-orders-page"}, null, "Список моїх замовленнь", ordersBlockElem);

    const ordersJSONFormat = localStorage.getItem("orders");
    if (ordersJSONFormat !== null) {
        const orders = JSON.parse(ordersJSONFormat);
        if (orders.length) {
            const ordersContainerElem = createElement("div", {className: "orders-container"}, null, null, ordersBlockElem);
            orders
                .sort((firstElem, secondElem) => {
                    if (firstElem.orderDate <= secondElem.orderDate) return 1;
                    if (firstElem.orderDate > secondElem.orderDate) return -1;
                })
                .forEach((elem, id, arr) => {
                    const ordersItemElem = createElement("div", {className: "orders-item"}, null, null, ordersContainerElem);
                    const orderBtnInfoElem = createElement(
                        "div",
                        {className: "btn-show-order-info", "data-order-id": id},
                        {
                            click: event => {
                                showOrderInfo(event, arr);
                            },
                        },
                        null,
                        ordersItemElem
                    );
                    createElement("span", null, null, `Дата замовлення: ${getFormatDate(elem.orderDate)}`, orderBtnInfoElem);
                    createElement("span", null, null, `Ціна замовлення: ${elem.price} грн`, orderBtnInfoElem);
                    createElement("div", {className: "order-info"}, null, null, ordersItemElem);
                });
        } else {
            createElement(
                "h4",
                {className: "sub-title-orders-page"},
                null,
                "Список порожній, оскільки ви не оформили жодного замовлення!",
                ordersBlockElem
            );
        }
    } else {
        createElement(
            "h4",
            {className: "sub-title-orders-page"},
            null,
            "Список порожній, оскільки ви не оформили жодного замовлення!",
            ordersBlockElem
        );
    }
};

const showOrderInfo = ({target}, arrOrders) => {
    const targetBtn = target.closest(".btn-show-order-info");
    const orderInfoBlock = targetBtn.nextSibling;

    if (orderInfoBlock.innerHTML === "") {
        orderInfoBlock.innerHTML = "";
        targetBtn.classList.add("active");
        const orderId = +targetBtn.getAttribute("data-order-id");
        const currentOrder = arrOrders[orderId];

        showOrderTable(ORDER_TABLE_CONFIG, currentOrder, orderInfoBlock);

        createElement(
            "button",
            {className: "delete-order", "data-order-id": orderId},
            {
                click: () => {
                    deleteOrder(orderId, arrOrders);
                },
            },
            "Видалити замавлення",
            orderInfoBlock
        );
    } else {
        orderInfoBlock.innerHTML = "";
        targetBtn.classList.remove("active");
    }
};

const deleteOrder = (orderId, arrOrders) => {
    const deleteThisOrder = confirm("Ви дійсно хочете видалити це замовлення?");
    if (deleteThisOrder) {
        arrOrders.splice(orderId, 1);
        localStorage.setItem("orders", JSON.stringify(arrOrders));
        showOrdersList();
    }
};
