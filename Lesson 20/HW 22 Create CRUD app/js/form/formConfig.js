"use strict";

const FORM_CONFIG = [
    {
        title: "Введіть ім'я: *",
        tagName: "input",
        attributes: {
            type: "text",
            name: "name",
            placeholder: "Ім'я...",
        },
    },
    {
        title: "Пароль: *",
        tagName: "input",
        attributes: {
            type: "text",
            name: "password",
            placeholder: "Пароль...",
        },
    },
    {
        title: "Вік: *",
        tagName: "input",
        attributes: {
            type: "number",
            name: "age",
            placeholder: "Вік",
            min: 1,
        },
    },
    {
        title: "Email: *",
        tagName: "input",
        attributes: {
            type: "text",
            name: "email",
            placeholder: "Email",
        },
    },
    {
        title: "Номер телефону: *",
        tagName: "input",
        attributes: {
            type: "tel",
            name: "phone",
            placeholder: "Номер телефону",
        },
    },
    {
        title: "Номер банківської карти: *",
        tagName: "input",
        attributes: {
            type: "number",
            name: "bankCardNumber",
            placeholder: "Номер банківської карти",
        },
    },
];
