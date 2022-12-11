let arr = [];
let lengthArr;

do {
    lengthArr = +prompt(`Введіть довжину масиву:`);
    if (!!lengthArr || lengthArr === 0) {
        if (lengthArr > 0) {
            for (let i = 0; i < lengthArr; i++) {
                const elementArr = +prompt(`Введіть ${i + 1} елемент масиву:`);
                arr.push(elementArr);
            }
        } else {
            alert(`Помилка! Введіть значення більше нуля!`);
        }
    } else {
        alert(`Помилка! Введіть числове значення!`);
    }
} while (!!!lengthArr || lengthArr <= 0);

console.log(`Створений Вами масив:\n ${arr}`);

const sortedArr = arr.sort((firstElem, secondElem) => {
    if (firstElem <= secondElem) {
        return -1;
    } else {
        return 1;
    }
});
console.log(`Відсортований за зростаням масив:\n ${sortedArr}`);
const arrBeforeDeletion = sortedArr.map(elem => elem);

if (sortedArr.length < 4) {
    console.log(`Ви не можете видалити елементи з масиву з 2 по 4(включно!), так як Ваш масив занадто маленький! :(`);
} else {
    const deleteElementArr = sortedArr.splice(1,3);
    console.log(
        `Видалені елементи з масиву з 2 по 4 (включно!):\n ${deleteElementArr}\n`,
        `Масив з видалиними елементами:\n ${sortedArr}\n`,
        `Масив без видалиних елементів:\n ${arrBeforeDeletion}`
    );
}