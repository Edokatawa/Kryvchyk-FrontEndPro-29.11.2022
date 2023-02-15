"use strict";

const Person = function (dataPerson) {
    const {whoIsPeople, name, age} = dataPerson;

    this.name = name;
    this.age = age;
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
