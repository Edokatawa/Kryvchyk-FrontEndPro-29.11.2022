"use strict";

const FORM_CONFIG = [
    {
        title: "Введіть ПІБ: *",
        tagName: "input",
        attributes: {
            type: "text",
            name: "full_name",
            placeholder: "ПІБ...",
        },
    },
    {
        title: "Місто доставки: *",
        tagName: "select",
        attributes: {name: "delivery_to_city"},
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
            name: "new_post_warehouse",
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
            name: "postpaid_and_paymentCard",
            value: "Післяплата",
        },
        radioLabel: {attributes: {className: "radio-label", for: "postpaid"}, textContent: "Післяплата"},
    },
    {
        tagName: "input",
        attributes: {
            id: "paymentCard",
            type: "radio",
            name: "postpaid_and_paymentCard",
            value: "Оплата банківською карткою",
        },
        radioLabel: {attributes: {className: "radio-label", for: "paymentCard"}, textContent: "Оплата банківською карткою"},
    },
    {
        title: "Введіть кількість продукції, що купуєте: *",
        tagName: "input",
        attributes: {
            type: "number",
            name: "count_products",
            value: 1,
            min: 1,
        },
    },
    {
        title: "Коментар до замовлення:",
        tagName: "textarea",
        attributes: {
            name: "comment_order",
            rows: "5",
        },
    },
    {
        tagName: "input",
        attributes: {type: "button", value: "Оформити замовлення"},
        handlers: {click: orderProduct},
    },
];
