//Перше завдання
console.log(`Дано два різних числа. Виявити яке з них більше, а яке менше.`);
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
console.log(`\n\nВідомо дві дистанції. Одне в кілометрах, інше в футах(1 фут - 0,305м). Яка дистанція менша?`);
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
console.log(`\n\nВиявити чи деяке число а є дільником числа b ? І навпаки. (Дати 2 відповіді)`);
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
console.log(`\n\nВивести на сторінку в одну строку через зап’яту числа від 10 до 20`);
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
console.log(`\n\nВивести квадрати чисел від 10 до 20`);
let squareNumber = '';
for (let i = 10; i < 21; i++) {
    squareNumber += `${i}^2 = ${i ** 2}\n`;
}
console.log(`${squareNumber}`);