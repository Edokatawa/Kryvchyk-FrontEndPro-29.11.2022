"use strict";

const viewUser = (userId, users) => {
    clearElements(["user-information-block"]);
    const {id, name, password, age, email, phone, bankCardNumber, timeOfCreation, editTime} = users.find(
        elem => elem.id === userId
    );
    const userInformationElem = document.querySelector(".user-information-block");
    const userInfoElem = createElement("div", {className: "user-info-block"}, null, null, userInformationElem);

    createElement("h2", {className: "user-title"}, null, `#${id} - ${name}`, userInfoElem);
    createElement("span", {className: "info-item"}, null, `Вік: ${age}`, userInfoElem);
    createElement("span", {className: "info-item"}, null, `Пароль: ${password}`, userInfoElem);
    createElement("span", {className: "info-item"}, null, `Email: ${email}`, userInfoElem);
    createElement("span", {className: "info-item"}, null, `Час створення: ${getFormatDate(timeOfCreation)}`, userInfoElem);
    createElement("span", {className: "info-item"}, null, `Номер телефону: ${phone}`, userInfoElem);
    createElement("span", {className: "info-item"}, null, `Час останнього редагування: ${getFormatDate(editTime)}`, userInfoElem);
    createElement("span", {className: "info-item"}, null, `Номер банківської карти: ${bankCardNumber}`, userInfoElem);
};
