const hours = +prompt('Введіть кількість годин:', 0);


if (!!hours) {
    const sec = hours * 3600;
    alert(`В ${hours} годинах - ${sec} секунд`);
} else {
    alert(`Ввведіть ціле числове значення!`);
}