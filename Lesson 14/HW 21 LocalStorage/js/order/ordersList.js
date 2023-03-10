"use strict";

const showOrdersList = () => {
    clearElements(["orders"]);

    const ordersBlockElem = document.querySelector(".orders");
    createElement("h1", {className: "title-orders-page"}, null, "Список моїх замовленнь", ordersBlockElem);

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    if (orders.length) {
        const ordersContainerElem = createElement("div", {className: "orders-container"}, null, null, ordersBlockElem);
        sortOrdersArr(orders).forEach((elem, idx) => showOrderListItem(elem, idx, ordersContainerElem));
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

const showOrderInfo = ({target}, currentOrder, orderId) => {
    const targetBtn = target.closest(".btn-show-order-info");
    const orderInfoBlock = targetBtn.nextSibling;

    if (orderInfoBlock.innerHTML === "") {
        orderInfoBlock.innerHTML = "";
        targetBtn.classList.add("active");

        showOrderTable(currentOrder, orderInfoBlock);

        createElement(
            "button",
            {className: "delete-order"},
            {
                click: () => {
                    deleteOrder(orderId);
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

const deleteOrder = orderId => {
    const deleteThisOrder = confirm("Ви дійсно хочете видалити це замовлення?");
    if (deleteThisOrder) {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        sortOrdersArr(orders);

        orders.splice(orderId, 1);

        localStorage.setItem("orders", JSON.stringify(orders));
        showOrdersList();
    }
};
