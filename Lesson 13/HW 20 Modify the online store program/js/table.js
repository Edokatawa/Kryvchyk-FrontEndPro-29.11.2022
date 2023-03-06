"use strict";

const orderProductData = {};

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
