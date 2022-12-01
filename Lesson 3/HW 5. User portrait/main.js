const birthYear = parseInt(prompt('Ваш рік народження?'));
const city = prompt('В якому місті Ви зараз живете?');
const kindSport = prompt('Ваш улюблений вид спорту?');

let ageReturn,cityReturn,kindSportReturn;
const currentYear = 2022;

if ((!!birthYear !== false) && (birthYear <= currentYear)) {
    if (birthYear === currentYear) {
        ageReturn = `Ваш вік: ${currentYear - birthYear} р....Немовля??😳`;
    } else {
        ageReturn = `Ваш вік: ${currentYear - birthYear} р.`;
    }
} else {
    ageReturn = "Шкода, що Ви не захотіли ввести свій рік народження(";
}

if (!!city !== false) {
    if ((city === "Київ") || (city === "Вашингтон") || (city === "Лондон")) {
        cityReturn = `Ти живеш у столиці ${city}.`;
    } else {
        cityReturn = `Ти живеш у місті ${city}.`;
    }
} else {
    cityReturn = "Шкода, що Ви не захотіли ввести своє місто проживання(";
}

if (!!kindSport !== false) {
    if ((kindSport === "CS GO") || (kindSport === "cs go") || (kindSport === "Counter Strike Global Offensive")) {
        kindSportReturn = `Твій улюблений вид спорту ${kindSport}. Круто! Хочеш стати Олександром Костилєвим (s1mple)?`;
    } else if ((kindSport == "Футбол") || (kindSport === "футбол")) {
        kindSportReturn = `Твій улюблений вид спорту ${kindSport}. Круто! Хочеш стати Ліонелем Мессі?`;
    } else if ((kindSport === "Баскетбол") || (kindSport === "баскетбол")) {
        kindSportReturn = `Твій улюблений вид спорту ${kindSport}. Круто! Хочеш стати Леброн Джеймсом?`;
    } else {
        kindSportReturn = `Твій улюблений вид спорту ${kindSport}.`;
    }
} else {
    kindSportReturn = "Шкода, що Ви не захотіли ввести свій улюблений вид спорту(";
}

alert(ageReturn + '\n' + cityReturn + '\n' + kindSportReturn);
