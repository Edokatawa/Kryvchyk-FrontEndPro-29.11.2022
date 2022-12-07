console.log(`Дано два різних числа. Виявити яке з них більше, а яке менше.`);
const numb1 = +prompt('(1 Завдання) Введіть перше число:', 0);
const numb2 = +prompt('(1 Завдання) Введіть друге число:', 0);

if (numb1 < numb2) {
    console.log(`Число ${numb1} менше ${numb2}`);
} else if (numb1 > numb2) {
    console.log(`Число ${numb1} більше ${numb2}`);
} else {
    console.log(`Число ${numb1} дорівнює ${numb2}`);
}

// console.log(`Відомо дві дистанції. Одне в кілометрах, інше в футах(1 фут - 0,305м). Яка дистанція менша?`);

// let numbKilometers = +prompt('(2 Завдання)Дистанція в кілометрах:', 0);
// let numbFoot = +prompt('(2 Завдання) Дистанція в футах:', 0);

// numbKilometers *= 1000;
// numbFoot *= 0.305;