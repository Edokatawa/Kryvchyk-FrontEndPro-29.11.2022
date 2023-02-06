const arithmeticMeanOnlyNumbElemArr = arr => {
    const arithmeticMean = arr
        .filter(elem => typeof elem === "number" && !isNaN(elem))
        .reduce((accumulator, currentValue, index, arr) => {
            if (index !== arr.length - 1) {
                return accumulator + currentValue;
            } else {
                return (accumulator + currentValue) / arr.length;
            }
        }, 0);

    console.log(
        `Середнє арифметичне лише числових елементів масиву дорівнює: ${arithmeticMean}`
    );
};

const getNumber = (title, errorMessage, lessThanZeroState) => {
    let numb = prompt(`${errorMessage}${title}`, 0);

    if (numb === null) {
        return null;
    }
    numb = +numb;
    if (isNaN(numb)) {
        return getNumber(
            title,
            "Ви ввели некоректне значення! \n",
            lessThanZeroState
        );
    }
    if (lessThanZeroState === false) {
        if (numb <= 0) {
            return getNumber(
                title,
                "Значення повинно бути більше нуля. \n",
                lessThanZeroState
            );
        }
    }

    return numb;
};

const getZnakArithmeticOperator = (firstNumb, errorMessage) => {
    if (typeof firstNumb === "number") {
        const znakArithmeticOperator = prompt(
            `${errorMessage}(Ex 2) Введіть символ арифметичної операції (+, -, *, /, %, ^):`
        );

        if (znakArithmeticOperator === null) {
            return null;
        }
        if (
            !ARR_ARITHMETIC_OPERATORS.some(
                elem => elem === znakArithmeticOperator
            )
        ) {
            return getZnakArithmeticOperator(
                firstNumb,
                "Такої арифметичної операції не існує! "
            );
        }

        return znakArithmeticOperator;
    }
};

const doMath = (x, znak, y) => {
    if (typeof x === "number" && znak !== null && typeof y === "number") {
        let mathResult;
        switch (znak) {
            case "+":
                mathResult = x + y;
                break;
            case "-":
                mathResult = x - y;
                break;
            case "*":
                mathResult = x * y;
                break;
            case "/":
                if (y === 0) {
                    return console.log(`На нуль ділити не можна!`);
                } else {
                    mathResult = x / y;
                }
                break;
            case "%":
                mathResult = x % y;
                break;
            case "^":
                mathResult = x ** y;
                break;
        }

        return console.log(`${x} ${znak} ${y} = ${mathResult}`);
    }

    console.log("Ви ввели не всі дані");
};

const get2DArrayEx3 = (lengthMainArr, lengthInternalArr) => {
    if (
        typeof lengthMainArr === "number" &&
        typeof lengthInternalArr === "number"
    ) {
        const arr2D = [];
        for (let i = 0; i < lengthMainArr; i++) {
            const row2DArr = [];
            for (let j = 0; j < lengthInternalArr; j++) {
                const elemInternalArr = prompt(
                    `Введіть ${j + 1} елемент ${i + 1} рядка:`
                );
                row2DArr.push(elemInternalArr);
            }

            arr2D.push(row2DArr);
        }

        return console.log(`Двовимірний масив: \n`, arr2D);
    }

    console.log("Ви ввели не всі дані");
};

const showClearenLine = (rowOfChar, charToDelete) => {
    if (typeof rowOfChar === "string" && typeof charToDelete === "string") {
        if (rowOfChar.trim() !== "" && charToDelete.trim() !== "") {
            const arrCharToDelete = charToDelete.split(" ");

            console.log(`Введений рядок: \n${rowOfChar}`);
            console.log(
                `Символи які потрібно видалити з рядку: \n${arrCharToDelete.join(
                    ", "
                )}`
            );

            const arrRowOfChar = rowOfChar.split("");
            const arrClearLine = arrRowOfChar.filter(elem => {
                if (arrCharToDelete.includes(elem)) {
                    return false;
                }

                return true;
            });
            return console.log(
                `Кінцевий результат: \n${arrClearLine.join("")}`
            );
        }
    }

    console.log("Ви ввели не всі дані");
};
