"use strict";

const showOrderTable = (mainContentTableObj, parentElem) => {
    const orderTableElem = createElement("table", {className: "order-table"}, null, null, parentElem);
    const trHeadElem = createElement("tr", null, null, null, orderTableElem);

    ORDER_TABLE_CONFIG.forEach(elem => createElement("th", null, null, elem, trHeadElem));

    const trBodyElem = createElement("tr", null, null, null, orderTableElem);
    for (let key in mainContentTableObj) {
        if (key !== "orderDate") {
            if (key === "img") {
                const tdBodyElem = createElement("td", null, null, null, trBodyElem);
                createElement("img", {src: mainContentTableObj[key], className: "img-order-table"}, null, null, tdBodyElem);
            } else {
                createElement("td", null, null, mainContentTableObj[key], trBodyElem);
            }
        }
    }
};
