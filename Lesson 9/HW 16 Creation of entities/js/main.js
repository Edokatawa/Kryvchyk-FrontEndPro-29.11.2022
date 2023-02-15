"use strict";

const dataPerson1 = createPerson("Перша людина");
const dataPerson2 = createPerson("Друга людина");

const dataCar1 = createCar();
const dataCar2 = createCar();
const dataCar3 = createCar();

const person1 = new Person(dataPerson1);
const person2 = new Person(dataPerson2);

const car1 = new Car(dataCar1);
const car2 = new Car(dataCar2);
const car3 = new Car(dataCar3);

person1.showPersonInfo();
person2.showPersonInfo();

car1.addOwner(person1);
car1.addOwner(person2);
car1.addOwner(person1);
car2.addOwner(person2);
car3.addOwner(person2);

car1.showCarInfo();
car2.showCarInfo();
car3.showCarInfo();

const garage1 = new Garage("Перший гараж", 3, person1, [car1]);
const garage2 = new Garage("Другий гараж", 1, person2, [car2, car3]);

garage1.showGarageInfo();
garage2.showGarageInfo();
