export const CONTACTS_KEY = "contactsList";

export const FORM_VALIDATION = {
    firstName: {
        regex: /^[а-яa-z]+$/i,
        errorMessage: "Ви не ввели ім'я",
    },
    lastName: {
        regex: /^[а-яa-z]+$/i,
        errorMessage: "Ви не ввели ім'я",
    },
    phone: {
        regex: /^\+?([[x0-9().-\s]+)?\d+$/,
        errorMessage: "Ви не вказали номер телефону",
    },
};
