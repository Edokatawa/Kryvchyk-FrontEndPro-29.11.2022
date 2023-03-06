"use strict";

const FORM_VALIDATION = {
    full_name: {
        regex: /^[а-я]+\s[а-я]+\s[а-я]+$/i,
        errorMessage: "Ви не ввели ПІБ",
    },
    delivery_to_city: {
        regex: /^(Київ|Харків|Львів|Одеса|Дніпро)$/,
        errorMessage: "Ви не вказали місто доставки",
    },
    new_post_warehouse: {
        regex: /^\d+$/,
        errorMessage: "Ви не вказали відділення Нової пошти",
    },
    postpaid_and_paymentCard: {
        regex: /^(Післяплата|Оплата банківською карткою)$/,
        errorMessage: "Ви не вказали спосіб оплати",
    },
    count_products: {
        regex: /^\d+$/,
        errorMessage: "Ви не вказали кількість продукції, що купуєте",
    },
};
