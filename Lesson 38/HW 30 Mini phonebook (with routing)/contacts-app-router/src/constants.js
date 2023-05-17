export const CONTACTS_KEY = "contactsList";

export const PORTAL_HOLDER_ID = "contacts-table-block";

export const FORM_VALIDATION = {
    firstName: {
        regex: /^[а-яa-z]+$/i,
        errorMessage: "Ви не ввели ім'я",
    },
    lastName: {
        regex: /^[а-яa-z]+$/i,
        errorMessage: "Ви не ввели прізвище",
    },
    phone: {
        regex: /^\+?([[x0-9().-\s]+)?\d+$/,
        errorMessage: "Ви не вказали номер телефону",
    },
};
