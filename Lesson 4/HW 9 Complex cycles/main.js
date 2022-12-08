// Перше завдання
console.log(`1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).`);
let numbStep05 = '';
for (let i = 20; i <= 30; i+=0.5) {
    numbStep05 += `${i} `;
}
console.log(numbStep05);

// Друге завдання
console.log(`\n\n2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.`);
const dollar = 27;
let dollarCost = '';
for (let i = 10; i <= 100; i+=10) {
    dollarCost += `${i} доларів дорівнює ${i * dollar} гривень\n`;
}
console.log(dollarCost);

// Третє завдання
console.log(`\n\n3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.`);
let numbN3, listNumb = '';

do {
    numbN3 = +prompt('(3 Завдання) Введіть ціле число:', 0);
    if ((!!numbN3)&&(Number.isInteger(numbN3))) {
        for (let i = 0; i <= 100; i++) {
            if ( (i ** 2) <= numbN3) {
                listNumb += `${i} `;
            } else {
                break;
            }
        }
    } else {
        alert(`Помилка. Введіть ціле число!!`);
    }
} while ((!!!numbN3)||(Number.isInteger(numbN3)===false));

console.log(`Всі цілі числа від 1 до 100, квадрат яких не перевищує числа ${numbN3}:\n ${listNumb}`);


// Четверте завдання
console.log(`\n\n4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).`);
let numb4, primeNumber = true;

do {
    numb4 = +prompt('(4 Завдання) Введіть ціле число:', 0);
    if ((!!numb4)&&(Number.isInteger(numb4))) {
        if (numb4>1) {
            for(let i = 2; i < numb4; i++) {
                if(numb4 % i === 0) {
                    integerNumber = false;
                    break;
                }
            }
            if (primeNumber===true) {
                console.log(`Число ${numb4} є простим!`);
            } else {
                console.log(`Число ${numb4} не є простим, так як має більше двох дільників.`);
            }
        } else {
            console.log(`Число ${numb4} не є простим, так як менше або дорівнює 1.`);
        }
    } else {
        alert(`Помилка. Введіть ціле число!!`);
    }
} while ((!!!numb4)||(Number.isInteger(numb4)===false));


// П'яте завдання
console.log(`\n\n5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).`);
let numb5, numbThree;

do {
    numb5 = +prompt(`(5 Завдання) Введіть число:`, 0);
    if (!!numb5) {
        numbThree = numb5;
        while(numbThree % 3 === 0) {
            numbThree /= 3;
        }
        if (numbThree === 1) {
            console.log(`Число ${numb5} можливо отримати шляхом зведення числа 3 у деякий ступінь`);
        } else {
            console.log(`Число ${numb5} не можливо отримати шляхом зведення числа 3 у деякий ступінь`);
        }
    } else {
        alert(`Помилка. Введіть число!!`);
    }

} while ((!!!numb5)||(Number.isInteger(numb5)===false));
