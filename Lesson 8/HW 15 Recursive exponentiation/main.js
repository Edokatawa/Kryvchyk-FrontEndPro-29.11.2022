console.log(
    `Реалізувати рекурсивну функцію, яка зводить число в ступінь.`,
    `\n- Число, яке треба піднести до ступеню, передається як перший аргумент у функції;`,
    `\n- Ступінь передається як другий аргумент у функціюpow (num, degree).\n\n`
);

const getNumber = (
    title,
    errorMessage = "Ви ввели некоректне значення! ",
    errorState = false
) => {
    let number = prompt(`${errorState ? errorMessage : ""} ${title}`);
    if (number === null) {
        return null;
    }
    number = +number;
    if (isNaN(number)) {
        return getNumber(title, errorMessage, true);
    }

    return number;
};

const powRecursion = (num, degree) => {
    if (typeof num === "number" && typeof degree === "number") {
        if (degree > 1) {
            return num * powRecursion(num, degree - 1);
        } else {
            return num;
        }
    }
};

const number = getNumber("Введіть число яке потрібно піднести до ступеню:");
const degree =
    typeof number === "number" ? getNumber("Введіть ступінь:") : null;

const pow = powRecursion(number, degree);

if (typeof pow === "number") {
    console.log(`${number} ^ ${degree} = ${pow}`);
}
