"use strict";

const getPrompt = (title, errorMessage, isNumber, validateAgeNumber) => {
    let promptValue = prompt(`${errorMessage}${title}`);

    if (promptValue === null) {
        return "Відміна введення даних";
    }
    if (promptValue.trim() === "") {
        return getPrompt(title, "Ви нічого не ввели! ", isNumber, validateAgeNumber);
    }
    if (isNumber === true) {
        promptValue = +promptValue;
        if (isNaN(promptValue)) {
            return getPrompt(title, "Ви ввели некоректне значення! \n", isNumber, validateAgeNumber);
        }
        if (validateAgeNumber === true) {
            if (!Number.isInteger(promptValue)) {
                return getPrompt(title, "Ви ввели не ціле число! \n", isNumber, validateAgeNumber);
            }
            if (promptValue < 18) {
                return getPrompt(title, "Вік людини повинен бути більше 18! \n", isNumber, validateAgeNumber);
            }
        }
    }

    return promptValue;
};

const Person = function (whoIsPeople) {
    this.name = getPrompt(`(${whoIsPeople}) Введіть ім'я:`, "", false, false);
    this.age = getPrompt(`(${whoIsPeople}) Введіть вік:`, "", true, true);
    this.cars = [];

    this.showPersonInfo = function () {
        const {name, age} = this;

        console.log(`(${whoIsPeople}):`, `\nІм'я: ${name}`, `\nВік: ${age}\n\n`);
    };

    this.showPersonCarsInfo = function () {
        if (this.cars.length) {
            console.log(`(${whoIsPeople}) Має автомобіль:\n`);
            this.cars.forEach(car => {
                car.showCarInfo();
            });
        } else {
            console.log(`(${whoIsPeople}) Немає автомобіля.`);
        }
    };
};

const Car = function () {
    this.brand = getPrompt("Введіть марку авто:", "", false, false);
    this.model = getPrompt("Введіть модель авто:", "", false, false);
    this.fuelType = getPrompt("Введіть тип палива авто:", "", false, false);
    this.maxSpeed = getPrompt("Введіть максимальну швидкість авто:", "", true, false);
    this.owner = null;

    this.showCarInfo = function () {
        const {brand, model, fuelType, maxSpeed, owner} = this;

        console.log(
            `----------------------------\n`,
            `Дані авто:`,
            `| Марка: ${brand}`,
            `| Модель: ${model}`,
            `| Тип палива: ${fuelType}`,
            `| Максимальна швидкість: ${maxSpeed}`
        );
        if (owner) {
            console.log("Власник авто:");
            owner.showPersonInfo();
        } else {
            console.log("Авто не має власника.\n\n");
        }
    };

    this.addOwner = function (owner) {
        const car = this;

        if (car.owner === null) {
            owner.cars.push(car);
            this.owner = owner;
            console.log(`Власником (${car.brand} ${car.model}) стає ${owner.name}.`);
        } else {
            if (!owner.cars.includes(car)) {
                console.log(
                    `${owner.name} не може стати власником (${car.brand} ${car.model}) так як цією машиною володіє ${car.owner.name}.`
                );
            } else {
                console.log(`${owner.name} вже володіє цим автомобілем (${car.brand} ${car.model})`);
            }
        }
    };
};

const Garage = function (garageTitle, countOfCarGarage, owner, cars) {
    this.countOfCarGarage = countOfCarGarage;
    this.owner = owner;
    this.cars = (function (countOfCarGarage, cars) {
        if (cars.length > countOfCarGarage) {
            cars.splice(countOfCarGarage);

            return cars;
        }

        return cars;
    })(countOfCarGarage, cars);

    this.showGarageInfo = function () {
        console.log(
            `/----------------------------/\n`,
            `(${garageTitle}) Власник гаражу:\n`,
            `Кількість місць в гаражу: ${countOfCarGarage}`
        );
        this.owner.showPersonInfo();
        console.log("Список машин:");
        this.cars.forEach(car => {
            car.showCarInfo();
        });
        console.log(`/----------------------------/`);
    };
};
