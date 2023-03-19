"use strict";

const clearElements = classList => {
    for (let className of classList) {
        const elem = document.querySelector(`.${className}`);

        elem.innerHTML = "";
    }
};

const createElement = (tagName, attributes, events, textContent, parentElem) => {
    const newElem = document.createElement(tagName);

    if (attributes) {
        for (let key in attributes) {
            if (key === "className") {
                newElem.setAttribute("class", attributes[key]);
            } else {
                newElem.setAttribute(key, attributes[key]);
            }
        }
    }

    if (events) {
        for (let event in events) {
            newElem.addEventListener(event, events[event]);
        }
    }

    newElem.textContent = textContent || "";
    parentElem.appendChild(newElem);

    return newElem;
};

const showElementsPostContainer = () => {
    const postContainerElem = document.querySelector(".container");
    const inputBlockElem = createElement("div", {className: "input-block"}, null, null, postContainerElem);
    createElement(
        "input",
        {type: "text", className: "input-id-user", placeholder: "Введіть id поста"},
        null,
        null,
        inputBlockElem
    );
    createElement("button", {className: "send-btn"}, {click: getPost}, "Відправити", inputBlockElem);
    createElement("div", {className: "error-message"}, null, null, postContainerElem);
    createElement("div", {className: "post"}, null, null, postContainerElem);
    createElement("div", {className: "comments"}, null, null, postContainerElem);
};

const validateInput = inputValue => {
    clearElements(["error-message", "post", "comments"]);
    const errorMessageElem = document.querySelector(".error-message");

    if (inputValue.trim() === "") {
        errorMessageElem.textContent = "Ви нічого не ввели!";
        return false;
    }

    if (isNaN(inputValue)) {
        errorMessageElem.textContent = "Введіть числове значення.";
        return false;
    }

    if (inputValue < 0 || inputValue > 100) {
        errorMessageElem.textContent = "Числове значення повинно бути в діапазоні від 1 до 100.";
        return false;
    }

    return true;
};

const showErrorFetch = (err, parentErrElem) => {
    const {status, statusText} = err;

    if (status) {
        createElement(
            "p",
            {className: "error-connect"},
            null,
            "Не вдалося виконати запит через внутрішню помилку!",
            parentErrElem
        );
        const statusHttpElem = createElement("div", {className: "status-http-block"}, null, null, parentErrElem);

        createElement("p", null, null, `Код статусу: ${status}`, statusHttpElem);
        createElement("p", null, null, `${statusText}`, statusHttpElem);
    } else {
        createElement(
            "p",
            {className: "error-connect"},
            null,
            "Не вдалося виконати запит, перевірте інтернет з'єднання.",
            parentErrElem
        );
    }
};
