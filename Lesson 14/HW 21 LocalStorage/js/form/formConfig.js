"use strict";

const FORM_CONFIG = [
    {
        title: "Введіть ПІБ: *",
        tagName: "input",
        attributes: {
            type: "text",
            name: "fullName",
            placeholder: "ПІБ...",
        },
    },
    {
        title: "Місто доставки: *",
        tagName: "select",
        attributes: {name: "deliveryToCity"},
        options: [
            {attributes: {value: "--Виберіть місто доставки--"}, content: "--Виберіть місто доставки--"},
            {attributes: {value: "Київ"}, content: "Київ"},
            {attributes: {value: "Харків"}, content: "Харків"},
            {attributes: {value: "Львів"}, content: "Львів"},
            {attributes: {value: "Одеса"}, content: "Одеса"},
            {attributes: {value: "Дніпро"}, content: " Дніпро"},
        ],
    },
    {
        title: "Введіть номер відділення Нової пошти *",
        tagName: "input",
        attributes: {
            type: "number",
            name: "newPostWarehouse",
            placeholder: "Відділення Нової пошти",
            min: 1,
        },
    },
    {
        title: "Cпосіб оплати: *",
        tagName: "input",
        attributes: {
            id: "postpaid",
            type: "radio",
            name: "postpaidAndPaymentCard",
            value: "Післяплата",
        },
        radioLabel: {attributes: {className: "radio-label", for: "postpaid"}, textContent: "Післяплата"},
    },
    {
        tagName: "input",
        attributes: {
            id: "paymentCard",
            type: "radio",
            name: "postpaidAndPaymentCard",
            value: "Оплата банківською карткою",
        },
        radioLabel: {attributes: {className: "radio-label", for: "paymentCard"}, textContent: "Оплата банківською карткою"},
    },
    {
        title: "Введіть кількість продукції, що купуєте: *",
        tagName: "input",
        attributes: {
            type: "number",
            name: "countProducts",
            value: 1,
            min: 1,
        },
    },
    {
        title: "Коментар до замовлення:",
        tagName: "textarea",
        attributes: {
            name: "commentOrder",
            rows: "5",
        },
    },
];
