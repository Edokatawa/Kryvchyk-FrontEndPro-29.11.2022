console.log(
    `Реалізувати рекурсивну функцію, яка зводить число в ступінь.`,
    `\n- Число, яке треба піднести до ступеню, передається як перший аргумент у функції;`,
    `\n- Ступінь передається як другий аргумент у функціюpow (num, degree).\n\n`
);

const getNumber = (title) => {
    let number = prompt(`${title}`);
    if (number === null) {
        return null;
    }
    number = +number;
    if (isNaN(number)) {
        return getNumber(title);
    }

    return number;
}

const powRecursion = (num, degree) => {
    if (degree > 1) {
        return num * powRecursion(num, degree - 1);
    } else {
        return num;
    }
}


const number = getNumber('Введіть число яке потрібно піднести до ступеню:');
const degree = typeof number === 'number' ?  getNumber('Введіть ступінь:') : null;

console.log(`${number} ^ ${degree} = ${powRecursion(number, degree)}`);