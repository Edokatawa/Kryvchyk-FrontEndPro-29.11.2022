"use strict";

const orderProduct = () => {
    clearElements(["error-message"]);
    const showTableOrderElem = document.querySelector(".order-list");
    const errorMessageElem = document.querySelector(".error-message");
    const {
        full_name: {value: full_name},
        delivery_to_city: {value: delivery_to_city},
        new_post_warehouse: {value: new_post_warehouse},
        postpaid_and_paymentCard: {value: postpaid_and_paymentCard},
        count_products: {value: count_products},
        comment_order: {value: comment_order},
    } = document.forms[0];

    if (
        isFormValid({full_name, delivery_to_city, new_post_warehouse, postpaid_and_paymentCard, count_products}, errorMessageElem)
    ) {
        orderProductData.full_name = full_name;
        orderProductData.delivery_to_city = delivery_to_city;
        orderProductData.new_post_warehouse = new_post_warehouse;
        orderProductData.postpaid_and_paymentCard = postpaid_and_paymentCard;
        orderProductData.count_products = count_products;
        orderProductData.comment_order = comment_order || "Користувач не залишив коментар(";

        clearElements(["products", "details", "order-list"]);
        createElement("h2", {className: "title"}, null, "Замовлення успішно оформлене!", showTableOrderElem);
        const orderTableElem = createElement("table", null, null, null, showTableOrderElem);
        const trHeadElem = createElement("tr", null, null, null, orderTableElem);
        for (let value of ORDER_TABLE_CONFIG) {
            createElement("th", null, null, value.thTitle, trHeadElem);
        }
        const trBodyElem = createElement("tr", null, null, null, orderTableElem);
        for (let key in orderProductData) {
            if (key === "imgUrlProduct") {
                const tdBodyElem = createElement("td", null, null, null, trBodyElem);
                createElement("img", {src: orderProductData[key], width: "100", height: "100"}, null, null, tdBodyElem);
            } else {
                createElement("td", null, null, orderProductData[key], trBodyElem);
            }
        }
    }
};
