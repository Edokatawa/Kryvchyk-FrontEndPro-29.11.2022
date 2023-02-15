"use strict";

const getPrompt = (title, errorMessage, validator) => {
    let promptValue = prompt(`${errorMessage}${title}`);

    if (promptValue === null) {
        return null;
    }
    if (promptValue.trim() === "") {
        return getPrompt(title, "Ви нічого не ввели! ", validator);
    }
    const {error, value} = validator(promptValue);
    if (error) {
        return getPrompt(title, error, validator);
    }

    return value;
};

const textValidator = value => ({error: "", value});

const textNameValidator = value => {
    if (/\d/.test(value)) {
        return {error: "Ім'я не повинно містити цифри! \n", value: null};
    }

    return {error: "", value};
};

const numberValidator = value => {
    value = +value;
    if (isNaN(value)) {
        return {error: "Ви ввели некоректне значення! \n", value: null};
    }

    return {error: "", value};
};

const numberAgeValidator = value => {
    value = +value;
    if (isNaN(value)) {
        return {error: "Ви ввели некоректне значення! \n", value: null};
    }
    if (!Number.isInteger(value)) {
        return {error: "Ви ввели не ціле число! \n", value: null};
    }
    if (value < 18) {
        return {error: "Вік людини повинен бути більше 18! \n", value: null};
    }

    return {error: "", value};
};

const createPerson = whoIsPeople => {
    const name = getPrompt(`(${whoIsPeople}) Введіть ім'я:`, "", textNameValidator);
    const age = getPrompt(`(${whoIsPeople}) Введіть вік:`, "", numberAgeValidator);

    return {whoIsPeople, name, age};
};

const createCar = () => {
    const brand = getPrompt("Введіть марку авто:", "", textValidator);
    const model = getPrompt("Введіть модель авто:", "", textValidator);
    const fuelType = getPrompt("Введіть тип палива авто:", "", textValidator);
    const maxSpeed = getPrompt("Введіть максимальну швидкість авто:", "", numberValidator);

    return {brand, model, fuelType, maxSpeed};
};

const getGarageCars = (countOfCarGarage, cars) => {
    if (cars.length > countOfCarGarage) {
        cars.splice(countOfCarGarage);

        return cars;
    }

    return cars;
};
