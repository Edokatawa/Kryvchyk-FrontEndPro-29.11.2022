"use strict";

const orderProductData = {};
const trHeadTitle = [
    {thTitle: "Зображення товару"},
    {thTitle: "Назва товару"},
    {thTitle: "Ціна товару"},
    {thTitle: "ПІБ замовника"},
    {thTitle: "Місто доставки"},
    {thTitle: "Відділення Нової пошти"},
    {thTitle: "Cпосіб оплати"},
    {thTitle: "Кількість продукції, що купуєте"},
    {thTitle: "Коментар до замовлення"},
];

const showCategories = dataProd => {
    clearElements(["categories", "products", "details"]);

    const categoriesElem = document.querySelector(".categories");
    createElement("h2", {className: "title"}, null, "Список категорій", categoriesElem);

    dataProd.forEach(({name}, id) => {
        createElement("div", {"data-category-id": id, className: "category-elem"}, {click: showProducts}, name, categoriesElem);
    });
};

const showProducts = ({target}) => {
    clearElements(["products", "details"]);

    const productsElem = document.querySelector(".products");
    const categoryId = +target.getAttribute("data-category-id");
    const products = DATA[categoryId].products;

    createElement("h2", {className: "title"}, null, "Список товарів", productsElem);
    const productListElem = createElement("div", {className: "product-list"}, null, null, productsElem);
    if (products.length) {
        products.forEach(({img, name}, id) => {
            const mainProductElem = createElement(
                "div",
                {
                    "data-category-id": categoryId,
                    "data-product-id": id,
                    className: "product-item",
                },
                {click: showDetails},
                null,
                productListElem
            );
            createElement("img", {src: img, alt: `img ${name}`}, null, null, mainProductElem);
            createElement("h4", null, null, name, mainProductElem);
        });
    } else {
        createElement("p", {className: "message"}, null, "Категорія не має товарів!", productsElem);
    }
};

const showDetails = event => {
    clearElements(["details"]);

    const detailsElem = document.querySelector(".details");
    const {categoryId, productId} = event
        .composedPath()
        .filter(elem => elem.className === "product-item")
        .map(elem => ({categoryId: +elem.dataset.categoryId[0], productId: +elem.dataset.productId[0]}))[0];
    const {img, name, price, description} = DATA[categoryId].products[productId];
    orderProductData.imgUrlProduct = img;
    orderProductData.nameProduct = name;
    orderProductData.priceProduct = price + " грн";

    createElement("h2", {className: "title"}, null, "Товар", detailsElem);
    const imgContainer = createElement("div", {className: "img-container"}, null, null, detailsElem);
    createElement("img", {src: img, alt: `img ${name}`}, null, null, imgContainer);
    const titleAndPriceContainer = createElement("div", {className: "title-price-container"}, null, null, imgContainer);
    createElement("h2", null, null, name, titleAndPriceContainer);
    createElement("p", {className: "price-product"}, null, `Ціна: ${price} грн`, titleAndPriceContainer);
    createElement("p", {className: "description-product"}, null, description, detailsElem);
    createElement(
        "button",
        {className: "btn-buy-product"},
        {
            click: () => {
                showForm(detailsElem);
            },
        },
        "Купити",
        detailsElem
    );
};

const showForm = parentForm => {
    parentForm.querySelector(".btn-buy-product").remove();

    createElement("h2", {className: "sub-title"}, null, "Оформити замовлення", parentForm);
    const orderForm = createElement("form", {className: "order-form", name: "mainForm"}, null, null, parentForm);
    for (let value of FORM_CONFIG) {
        if (value.title) {
            createElement("label", {for: value.attributes.name}, null, value.title, orderForm);
        }
        const textFieldBlockElem = createElement("div", {className: "text-field-block"}, null, null, orderForm);
        const currentElement = createElement(value.tagName, value.attributes, value.handlers, value.content, textFieldBlockElem);
        if (value.tagName === "select" && value.options.length > 0) {
            for (let option of value.options) {
                createElement("option", option.attributes, option.handlers, option.content, currentElement);
            }
        }
        if (value.radioLabel) {
            createElement("label", value.radioLabel.attributes, null, value.radioLabel.textContent, textFieldBlockElem);
        }
    }
    createElement("div", {className: "error-message"}, null, null, orderForm);
};

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
        createElement("h2", {className: "title"}, null, "Ваше замовлення", showTableOrderElem);
        const orderTableElem = createElement("table", null, null, null, showTableOrderElem);
        const trHeadElem = createElement("tr", null, null, null, orderTableElem);
        for (let value of trHeadTitle) {
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
