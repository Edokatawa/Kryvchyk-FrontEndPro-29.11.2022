"use strict";

const hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_SALAD);

console.log(hamburger);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log(`Калорії: ${hamburger.calculateCalories()}`);

console.log(`Ціна бургера: ${hamburger.calculatePrice()} тугриків`);

hamburger
    .addTopping(Hamburger.TOPPING_SAUCE)
    .addTopping(Hamburger.TOPPING_SAUCE)
    .addTopping("{naefeme: TOPPING_MAYO, price: 2, calories: 5}");

console.log(`Ціна з соусом: ${hamburger.calculatePrice()} тугриків`);

hamburger.removeTopping(Hamburger.TOPPING_SAUCE).removeTopping(Hamburger.TOPPING_SAUCE).showHamburgerInfo();

console.log(`Ціна без соуса: ${hamburger.calculatePrice()} тугриків`);
