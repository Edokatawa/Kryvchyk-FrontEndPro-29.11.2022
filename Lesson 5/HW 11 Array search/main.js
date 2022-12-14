let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(`Масив:\n${arr}\n\n`)

// Ex 1
console.log(`1. Знайти суму та кількість позитивних елементів.`);
let sumPositiveElem = 0, countPositiveElem = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sumPositiveElem += arr[i];
        countPositiveElem++;
    }
}
console.log(
    `Cума позитивних елементів: ${sumPositiveElem}`,
    `\nКількість позитивних елементів: ${countPositiveElem}`
);

// Ex 2
console.log(`\n\n2. Знайти мінімальний елемент масиву та його порядковий номер.`);
let minElemArr = 0, minElemArrIndex = 0;
for(i = 0; i < arr.length; i++) {
    if (arr[i] < minElemArr) {
        minElemArr = arr[i];
        minElemArrIndex = i;
    }
}
console.log(
    `Мінімальний елемент масиву: ${minElemArr}`,
    `\nПорядковий номер мінімального елемента масиву: ${minElemArrIndex}`
);

// Ex 3
console.log(`\n\n3. Знайти максимальний елемент масиву та його порядковий номер.`);
let maxElemArrEx3 = 0, maxElemArrIndex = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > maxElemArrEx3) {
        maxElemArrEx3 = arr[i];
        maxElemArrIndex = i;
    }
}
console.log(
    `Максимальний елемент масиву: ${maxElemArrEx3}`,
    `\nПорядковий номер максимального елемента масиву: ${maxElemArrIndex}`
);

// Ex 4
console.log(`\n\n4. Визначити кількість негативних елементів.`);
countNegativeElem = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        countNegativeElem++;
    }
}
console.log(`Масив має ${countNegativeElem} негативних елементів`);

// Ex 5
console.log(`\n\n5. Знайти кількість непарних позитивних елементів.`);
let countOddPositiveElem = 0;
for (i = 0; i < arr.length; i++) {
    if((arr[i] > 0)&&(arr[i] % 2 !== 0)){
        countOddPositiveElem++;
    }
}
console.log(`Кількість непарних позитивних елементів: ${countOddPositiveElem}`);

// Ex 6
console.log(`\n\n6. Знайти кількість парних позитивних елементів.`);
let countEvenPositiveElem = 0;
for (i = 0; i < arr.length; i++) {
    if ((arr[i] > 0)&&(arr[i] % 2 === 0)) {
        countEvenPositiveElem++;
    }
}
console.log(`Кількість парних позитивних елементів: ${countEvenPositiveElem}`);

// Ex 7
console.log(`\n\n7. Знайти суму парних позитивних елементів.`);
sumEvenPositiveElem = 0;
for (i = 0; i < arr.length; i++) {
    if ((arr[i] > 0)&&(arr[i] % 2 === 0)) {
        sumEvenPositiveElem += arr[i];
    }
}
console.log(`Сума парних позитивних елементів: ${sumEvenPositiveElem}`);

// Ex 8
console.log(`\n\n8. Знайти суму непарних позитивних елементів.`);
let sumOddPositiveElem = 0;
for (i = 0; i < arr.length; i++) {
    if((arr[i] > 0)&&(arr[i] % 2 !== 0)){
        sumOddPositiveElem += arr[i];
    }
}
console.log(`Сума непарних позитивних елементів: ${sumOddPositiveElem}`);

//Ex 9
console.log(`\n\n9. Знайти добуток позитивних елементів.`);
let productPositiveElem = 1;
for (i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        productPositiveElem *= arr[i];
    }
}
console.log(`Добуток позитивних елементів: ${productPositiveElem}`);

// Ex 10
console.log(`\n\n10. Знайти найбільший серед елементів масиву, остальні обнулити.`);
let maxElemArrEx10 = 0, maxElemArrEx10Index = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > maxElemArrEx10) {
        if (i > 0) {
            maxElemArrEx10 = arr[i];
            arr[maxElemArrEx10Index] = 0;
            maxElemArrEx10Index = i;
        } else {
            maxElemArrEx10 = arr[i];
        }
    } else {
        arr[i] = 0;
    }
}
console.log(
    `Найбільший серед елементів масиву: ${maxElemArrEx10}`,
    `\nКінцевий масив: ${arr}`
);