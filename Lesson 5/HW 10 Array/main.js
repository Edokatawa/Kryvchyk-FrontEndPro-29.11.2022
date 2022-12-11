let arr = [];
let lengthArr;

do {
    lengthArr = +prompt(`Введіть довжину масиву:`);
    if ((!!lengthArr) || (lengthArr === 0)) {
        if (lengthArr > 0) {
            for(let i = 0; i < lengthArr; i++) {
                let elementArr = +prompt(`Введіть ${i+1} елемент масиву:`);
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

console.log(`Відсортований за зростаням масив:\n ${arr.sort()}`);

arr.length < 4 ? console.log(`Ви не можете видалити елементи з масиву з 2 по 4(включно!), так як Ваш масив занадто маленький! :(`) : 
console.log(`Видалені елементи з масиву з 2 по 4 (включно!):\n ${arr.splice(1,3)}`)