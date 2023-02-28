"use strict";

const showCategories = dataProd => {
    clearElements(["categories", "products", "details"]);

    const categoriesElem = document.querySelector(".categories");

    dataProd.forEach(({name}, id) => {
        const categoryElem = document.createElement("div");

        categoryElem.setAttribute("data-category-id", id);
        categoryElem.setAttribute("class", "category-elem");
        categoryElem.textContent = name;
        categoryElem.onclick = showProducts;

        categoriesElem.appendChild(categoryElem);
    });
};

const showProducts = ({target}) => {
    clearElements(["products", "details"]);

    const productsElem = document.querySelector(".products");
    const categoryId = +target.getAttribute("data-category-id");
    const products = DATA[categoryId].products;

    products.forEach(({img, name}, id) => {
        const mainProductElem = document.createElement("div");
        const imgProductElem = document.createElement("img");
        const titleProductElem = document.createElement("h4");
        mainProductElem.setAttribute("data-category-id", categoryId);
        mainProductElem.setAttribute("data-product-id", id);
        mainProductElem.setAttribute("class", "product-item");
        imgProductElem.setAttribute("src", img);
        titleProductElem.textContent = name;
        mainProductElem.onclick = showDetails;

        mainProductElem.appendChild(imgProductElem);
        mainProductElem.appendChild(titleProductElem);
        productsElem.appendChild(mainProductElem);
    });
};

const showDetails = event => {
    clearElements(["details"]);

    const detailsElem = document.querySelector(".details");
    const {categoryId, productId} = event
        .composedPath()
        .filter(elem => elem.className === "product-item")
        .map(elem => ({categoryId: +elem.dataset.categoryId[0], productId: +elem.dataset.productId[0]}))[0];

    const imgContainer = document.createElement("div");
    const titleAndPriceContainer = document.createElement("div");
    const imgProductElem = document.createElement("img");
    const titleProductElem = document.createElement("h2");
    const priceProductElem = document.createElement("p");
    const descriptionProductElem = document.createElement("p");
    const makeOrderButtonElem = document.createElement("button");

    const {img, name, price, description} = DATA[categoryId].products[productId];

    imgContainer.setAttribute("class", "img-container");
    titleAndPriceContainer.setAttribute("class", "title-price-container");
    imgProductElem.setAttribute("src", img);
    titleProductElem.textContent = name;
    priceProductElem.setAttribute("class", "price-product");
    priceProductElem.textContent = `Ціна: ${price} грн`;
    descriptionProductElem.setAttribute("class", "description-product");
    descriptionProductElem.textContent = `${description}`;
    makeOrderButtonElem.setAttribute("class", "btn-buy-product");
    makeOrderButtonElem.textContent = "Купити";

    imgContainer.appendChild(imgProductElem);
    titleAndPriceContainer.appendChild(titleProductElem);
    titleAndPriceContainer.appendChild(priceProductElem);
    imgContainer.appendChild(titleAndPriceContainer);
    detailsElem.appendChild(imgContainer);
    detailsElem.appendChild(descriptionProductElem);
    detailsElem.appendChild(makeOrderButtonElem);

    makeOrderButtonElem.addEventListener("click", () => {
        alert(`Ви купили ${name} за ${price} грн`);
        clearElements(["products", "details"]);
    });
};
