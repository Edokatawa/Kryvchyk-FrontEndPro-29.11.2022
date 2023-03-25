"use strict";

class Hamburger {
    constructor(size, stuffing) {
        this.size = Hamburger.getSizeBurger(size);
        this.stuffing = Hamburger.getStuffingBurger(stuffing);
        this.toppings = [];
    }

    static getSizeBurger(value) {
        const sizeBurgerMenu = [Hamburger.SIZE_SMALL, Hamburger.SIZE_BIG];

        if (Hamburger.findHamburger(sizeBurgerMenu, value)) {
            return value;
        } else {
            throw new Error("Даного розміру бургера немає в меню.");
        }
    }

    static getStuffingBurger(value) {
        const stuffingBurgerMenu = [Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_SALAD, Hamburger.STUFFING_POTATO];

        if (Hamburger.findHamburger(stuffingBurgerMenu, value)) {
            return value;
        } else {
            throw new Error("Цієї начинки немає в меню.");
        }
    }

    static get SIZE_SMALL() {
        return {name: "SIZE_SMALL", price: 50, calories: 20};
    }
    static get SIZE_BIG() {
        return {name: "SIZE_BIG", price: 100, calories: 40};
    }
    static get STUFFING_CHEESE() {
        return {name: "STUFFING_CHEESE", price: 10, calories: 20};
    }
    static get STUFFING_SALAD() {
        return {name: "STUFFING_SALAD", price: 20, calories: 5};
    }
    static get STUFFING_POTATO() {
        return {name: "STUFFING_POTATO", price: 15, calories: 10};
    }
    static get TOPPING_SAUCE() {
        return {name: "TOPPING_SAUCE", price: 15, calories: 0};
    }
    static get TOPPING_MAYO() {
        return {name: "TOPPING_MAYO", price: 20, calories: 5};
    }

    static findHamburger(arrMenu, value) {
        return arrMenu.find(
            ({name, price, calories}) => name === value.name && price === value.price && calories === value.calories
        );
    }

    showHamburgerInfo() {
        const {
            size: {name: size},
            stuffing: {name: stuffing},
            toppings,
        } = this;

        console.log(`-----------------\nВаш бургер:\nРозмір: ${size}\nНачинка: ${stuffing}`);
        if (toppings.length) {
            toppings.forEach(({name}, i) => console.log(`Добавка ${i + 1}: ${name}`));
            console.log(`-----------------`);
        } else {
            console.log(`-----------------`);
        }

        return this;
    }

    addTopping(topping) {
        const {toppings} = this;
        const toppingsMenu = [Hamburger.TOPPING_SAUCE, Hamburger.TOPPING_MAYO];

        if (!toppings.length) {
            console.log(`В бургер додана добавка ${topping.name}`);
            toppings.push(topping);
            return this;
        }

        if (Hamburger.findHamburger(toppingsMenu, topping)) {
            if (!Hamburger.findHamburger(toppings, topping)) {
                console.log(`В бургер додана добавка ${topping.name}`);
                toppings.push(topping);
            } else {
                console.log(`Ця добавка вже додана в бургер! (${topping.name})`);
            }
        } else {
            console.log(`Цієї добавки немає в меню!`);
        }

        return this;
    }

    removeTopping(topping) {
        const indexDeleteTopping = this.toppings.findIndex(
            ({name, price, calories}) => name === topping.name && price === topping.price && calories === topping.calories
        );

        if (indexDeleteTopping !== -1) {
            this.toppings.splice(indexDeleteTopping, 1);
            console.log(`З бургера видалена добавка ${topping.name}`);
            return this;
        } else {
            console.log(`Цієї добавки немає в бургері!`);
        }

        return this;
    }

    calculatePrice() {
        const {
            size: {price: size},
            stuffing: {price: stuffing},
            toppings,
        } = this;

        let allPrice = size + stuffing;

        if (toppings.length) {
            allPrice += toppings.reduce((acc, {price}) => acc + price, 0);
        }

        return allPrice;
    }

    calculateCalories() {
        const {
            size: {calories: size},
            stuffing: {calories: stuffing},
            toppings,
        } = this;

        let allCalories = size + stuffing;

        if (toppings.length) {
            allCalories += toppings.reduce((acc, {calories}) => acc + calories, 0);
        }

        return allCalories;
    }
}
