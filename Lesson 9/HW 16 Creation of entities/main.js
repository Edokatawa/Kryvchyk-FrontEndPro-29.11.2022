"use strict";

const person1 = new Person("Перша людина");
const person2 = new Person("Друга людина");

const car1 = new Car();
const car2 = new Car();
const car3 = new Car();

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
