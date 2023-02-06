const ARR_ARITHMETIC_OPERATORS = ["+", "-", "*", "/", "%", "^"];

// Ex 1
console.log(
    `(Ex1) Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.\n\n`
);

const arrExercise1 = [
    null,
    23,
    "футбол",
    "4.25",
    NaN,
    "34",
    5,
    "",
    18.5,
    undefined,
    "пес",
    ,
    0,
    "43",
    12,
];

console.log(arrExercise1);
arithmeticMeanOnlyNumbElemArr(arrExercise1);

// Ex 2
console.log(
    `\n\n(Ex2) Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.\n\n`
);

const numbX = getNumber("(Ex 2) Введіть перше число", "", true);
const znakArithmeticOperator = getZnakArithmeticOperator(numbX, "");
const numbY =
    typeof numbX === "number"
        ? getNumber("(Ex 2) Введіть друге число", "", true)
        : null;

doMath(numbX, znakArithmeticOperator, numbY);

// Ex 3
console.log(
    `\n\n(Ex3) Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.\n\n`
);

const lengthMainArr = getNumber(
    "(Ex 3) Введіть довжину основного масиву:",
    "",
    false
);
const lengthInternalArr = getNumber(
    "(Ex 3) Введіть довжину внутрішніх масивів:",
    "",
    false
);

get2DArrayEx3(lengthMainArr, lengthInternalArr);

// Ex 4

console.log(
    `\n\n(Ex4) Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.\n\n`
);

const rowOfChar = prompt("Введіть рядок сивволів", "");
const charToDelete = prompt(
    "(Ex 4) Введіть через пробіл символи, які потрібно видалити:",
    ""
);

showClearenLine(rowOfChar, charToDelete);
