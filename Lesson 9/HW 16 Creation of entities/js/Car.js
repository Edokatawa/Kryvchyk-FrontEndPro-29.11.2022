"use strict";

const Car = function (dataCar) {
    const {brand, model, fuelType, maxSpeed} = dataCar;

    this.brand = brand;
    this.model = model;
    this.fuelType = fuelType;
    this.maxSpeed = maxSpeed;
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
        if (this.owner === null) {
            owner.cars.push(this);
            this.owner = owner;
            console.log(`Власником (${this.brand} ${this.model}) стає ${owner.name}.`);
        } else {
            if (!owner.cars.includes(this)) {
                console.log(
                    `${owner.name} не може стати власником (${this.brand} ${this.model}) так як цією машиною володіє ${this.owner.name}.`
                );
            } else {
                console.log(`${owner.name} вже володіє цим автомобілем (${this.brand} ${this.model})`);
            }
        }
    };
};
