"use strict";

const FORM_VALIDATION = {
    name: {
        regex: /^[а-я]+$/i,
        errorMessage: "Ви не ввели ім'я",
    },
    password: {
        regex: /^.{8,}$/i,
        errorMessage: "Ви не вказали пароль. (Пароль повинен містити не менше 8 символів)",
    },
    age: {
        regex: /^\d\d?\d?$/,
        errorMessage: "Ви не вказали вік. (Значення має бути більше 0)",
    },
    email: {
        regex: /\w([\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)?\w@[a-z]+\.[a-z]+/,
        errorMessage: "Ви не вказали email",
    },
    phone: {
        regex: /^\+?\d+$/,
        errorMessage: "Ви не вказали номер телефону",
    },
    bankCardNumber: {
        regex: /^\d{16}$/,
        errorMessage: "Ви не вказали номер банківської карти (Значення повинно містити 16 цифр)",
    },
};
