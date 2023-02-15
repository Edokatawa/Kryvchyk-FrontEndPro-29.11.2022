"use strict";

const Garage = function (garageTitle, countOfCarGarage, owner, cars) {
    this.countOfCarGarage = countOfCarGarage;
    this.owner = owner;
    this.cars = getGarageCars(countOfCarGarage, cars);

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
