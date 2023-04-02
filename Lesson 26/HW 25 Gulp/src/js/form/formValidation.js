"use strict";

const FORM_VALIDATION = {
    fullName: {
        regex: /^[а-я]+\s[а-я]+\s[а-я]+$/i,
        errorMessage: "Ви не ввели ПІБ",
    },
    deliveryToCity: {
        regex: /^(Київ|Харків|Львів|Одеса|Дніпро)$/,
        errorMessage: "Ви не вказали місто доставки",
    },
    newPostWarehouse: {
        regex: /^\d+$/,
        errorMessage: "Ви не вказали відділення Нової пошти",
    },
    postpaidAndPaymentCard: {
        regex: /^(Післяплата|Оплата банківською карткою)$/,
        errorMessage: "Ви не вказали спосіб оплати",
    },
    countProducts: {
        regex: /^\d+$/,
        errorMessage: "Ви не вказали кількість продукції, що купуєте",
    },
    commentOrder: {
        regex: /[а-я]{0,}/,
        errorMessage: "",
    },
};
