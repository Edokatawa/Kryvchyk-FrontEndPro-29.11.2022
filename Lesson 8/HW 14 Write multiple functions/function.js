const arithmeticMeanOnlyNumbElemArr = (arr) => {
    const arithmeticMean = arr
        .map((elem) => parseInt(elem, 10))
        .filter((elem) => !!elem)
        .reduce((firstElem, secondElem, index, arr) => {
            if(index !== arr.length - 1) {
                return firstElem + secondElem;
            } else {
                return (firstElem + secondElem) / arr.length;
            }
        });
        
    return console.log(`Середнє арифметичне лише числових елементів масиву дорівнює: ${arithmeticMean}`);
};

const getNumber = (title) => {
    let numb = prompt(`${title}`);

    if (numb === null) {
        return null;
    }
    numb = +numb;
    if (isNaN(numb)) {
        return getNumber(title);
    }

    return numb;
};

const getZnakArithmeticOperator = () => {
    const arrArithmeticOperators = ['+', '-', '*', '/', '%', '^'];
    let znakArithmeticOperator = prompt('(Ex 2) Введіть символ арифметичної операції (+, -, *, /, %, ^):');

    if (znakArithmeticOperator === null) {
        return null;
    } else if (arrArithmeticOperators.some(elem => elem === znakArithmeticOperator)) {
        return znakArithmeticOperator;
    } else {
        return getZnakArithmeticOperator();
    }
};

const doMath = (x, znak, y) => {
    if (typeof NumbX === 'number') {
        let mathResult;
        switch (znak) {
            case '+':
                mathResult = x + y;
            case '-':
                mathResult = x - y;
            case '*':
                mathResult = x * y;
            case '/':
                if (y === 0) {
                    return console.log(`На нуль ділити не можна!`);
                } else {
                    mathResult = x / y;
                }
            case '%':
                mathResult = x % y;
            case '^':
                mathResult = x ** y;
        
        }

        return console.log(`${x} ${znak} ${y} = ${mathResult}`);
    }
};

const getLengthForArray = (title) => {
    let numbX = prompt(`${title}`);

    if (numbX === null) {
        return null;
    }
    numbX = +numbX;
    if ((numbX <= 0) || (isNaN(numbX))) {
        return getLengthForArray(title);
    }

    return numbX;
};

const get2DArrayEx3 = (lengthMainArr, lengthInternalArr) => {
    if (typeof lengthMainArr === 'number') {
        const arr2D = [];
        for (let i = 0; i < lengthMainArr; i++) {
            const row2DArr = [];
            for(let j = 0; j < lengthInternalArr; j++) {
                const elemInternalArr = prompt(`Введіть ${j + 1} елемент ${i + 1} рядка:`);
                if (elemInternalArr === null) {
                    return null;
                }
                row2DArr.push(elemInternalArr);
            }

            arr2D.push(row2DArr);
        }

        return console.log(`Двовимірний масив: \n`, arr2D);
    }
};

const getArrCharToDelete = (countCharToDelete) => {
    const arrCharToDelete = [];
    for(let i = 0; i < countCharToDelete; i++) {
        const elemArrToDelete = prompt(`Введать ${i + 1} елемент який потрібно видалити з рядку:`);

        arrCharToDelete.push(elemArrToDelete);
    }

    return arrCharToDelete;
};

const showClearenLine = (rowOfChar, arrCharToDelete) => {
    if (typeof rowOfChar === 'string') {
        console.log(`Введений рядок: \n${rowOfChar}`);
        console.log(`Символи які потрібно видалити з рядку: \n${arrCharToDelete}`);
        const arrRowOfChar = [];
        for (i = 0; i < rowOfChar.length; i++) {
            arrRowOfChar.push(rowOfChar[i]);
        }
        arrClearLine = arrRowOfChar.filter((elem, index, arr) => {
            for(let i = 0; i < arr.length; i++) {
                if (arr[index] === arrCharToDelete[i]) {
                    return false;
                }

                return true;
            }
        });
        console.log(`Кінцевий результат: \n${arrClearLine.join('')}`);
    }
};