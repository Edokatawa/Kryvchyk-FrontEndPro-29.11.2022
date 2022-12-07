//Перше завдання
console.log(`1. Дано два різних числа. Виявити яке з них більше, а яке менше.`);
const numb1 = +prompt('(1 Завдання) Введіть перше число:', 0);
const numb2 = +prompt('(1 Завдання) Введіть друге число:', 0);

console.log(`Ви ввели ${numb1} і ${numb2}`);
if (numb1 < numb2) {
    console.log(`Число ${numb1} менше ${numb2}`);
} else if (numb1 > numb2) {
    console.log(`Число ${numb1} більше ${numb2}`);
} else {
    console.log(`Число ${numb1} дорівнює ${numb2}`);
}

//Друге завдання
console.log(`\n\n2. Відомо дві дистанції. Одне в кілометрах, інше в футах(1 фут - 0,305м). Яка дистанція менша?`);
let numbKilometers = +prompt('(2 Завдання)Дистанція в кілометрах:', 0);
let numbFoot = +prompt('(2 Завдання) Дистанція в футах:', 0);

console.log(`Ви ввели ${numbKilometers} кілометрів і ${numbFoot} футів`);
numbKilometers *= 1000;
numbFoot *= 0.305;
if (numbKilometers < numbFoot) {
    console.log(`Дистанція в кілометрах менша`);
} else if (numbKilometers > numbFoot) {
    console.log(`Дистанція в футах менша`);
} else {
    console.log(`Вони однакові!`);
}

//Трете завдання
console.log(`\n\n3. Виявити чи деяке число а є дільником числа b ? І навпаки. (Дати 2 відповіді)`);
const numbA = +prompt('(3 Завдання) Число a:', 0);
const numbB = +prompt('(3 Завдання) Число b:', 0);

if ((numbA%numbB === 0)&&(numbB%numbA === 0)) {
    console.log(`Число A(${numbA}) є дільником числа B(${numbB})`);
    console.log(`Число B(${numbB}) є дільником числа A(${numbA})`);
} else if ((numbA%numbB === 0)&&(numbB%numbA !== 0)) {
    console.log(`Число A(${numbA}) не є дільником числа B(${numbB})`);
    console.log(`Число B(${numbB}) є дільником числа A(${numbA})`);
} else if ((numbA%numbB !== 0)&&(numbB%numbA === 0)){
    console.log(`Число A(${numbA}) є дільником числа B(${numbB})`);
    console.log(`Число B(${numbB}) не є дільником числа A(${numbA})`);
} else {
    console.log(`Число A(${numbA}) не є дільником числа B(${numbB})`);
    console.log(`Число B(${numbB}) не є дільником числа A(${numbA})`);
}

//Четверте завдання
console.log(`\n\n4. Вивести на сторінку в одну строку через зап’яту числа від 10 до 20`);
let numbFrom10To20 = '';
for(let i = 10; i < 21; i++) {
    if (i < 20) {
        numbFrom10To20 += `${i}, `;
    } else {
        numbFrom10To20 += `${i}`;
    }
}
console.log(`${numbFrom10To20}`);

//П'яте завдання
console.log(`\n\n5. Вивести квадрати чисел від 10 до 20`);
let squareNumber = '';
for (let i = 10; i < 21; i++) {
    squareNumber += `${i}^2 = ${i ** 2}\n`;
}
console.log(`${squareNumber}`);

//Шосте завдання
console.log(`\n\n6. Вивести таблицю множення на 7`);
let multiplicationTable = '';
for (let i = 1; i < 11; i++) {
    multiplicationTable += `7 * ${i} = ${7 * i}\n`;
}
console.log(`${multiplicationTable}`);

//Сьоме завдання
console.log(`\n\n7. Знайти середнє арифметичне всіх цілих чисел від 1 до 500`);
let arithmeticMean = 0;
for (let i = 1; i < 501; i++) {
    if (i < 500) {
        arithmeticMean += i;
    } else {
        arithmeticMean = (arithmeticMean + i) / i;
    }
}
console.log(`Середнє арифметичне всіх цілих чисел від 1 до 500 дорівнює ${arithmeticMean}`);

//Восьме завдання
console.log(`\n\n8. Знайти добуток усіх цілих чисел від 15 до 35`);
let productOfAllIntegers = 1;
for (let i = 15; i < 36; i++) {
    productOfAllIntegers *= i;
}
console.log(`Добуток усіх цілих чисел від 15 до 35 дорівнює ${productOfAllIntegers}`);

//Дев'яте завдання
console.log(`\n\n9. Вивести суму тільки парних чисел в діапазоні від 30 до 80`);
let sumOfEvenNumbers = 0;
for (let i = 30; i < 81; i++) {
    if(i % 2 === 0) {
        sumOfEvenNumbers += i;
    } else {
        continue;
    }
}
console.log(`Суму тільки парних чисел в діапазоні від 30 до 80 дорівнює ${sumOfEvenNumbers}`);

//Десяте завдання
console.log(`\n\n10. Вивести всі числа в діапазоні від 100 до 200 кратні 3`);
let multiplesOfThree = '';
for (let i = 100; i < 201; i++) {
    if(i % 3 === 0) {
        multiplesOfThree += `${i} `;
    } else {
        continue;
    }
}
console.log(`Всі числа в діапазоні від 100 до 200 кратні 3:\n ${multiplesOfThree}`);