"use strict";

const USERS_KEY = "users";

const showCRUD = () => {
    clearElements(["main-container"]);

    const users = Storage.get(USERS_KEY) || [...DEFAULT_USERS];

    const mainContainer = document.querySelector(".main-container");
    createElement("h1", {className: "title-page"}, null, "CRUD-додаток", mainContainer);

    const addUserContainerElem = createElement("div", {className: "add-user-container"}, null, null, mainContainer);
    createElement("h4", {className: "sub-title-page"}, null, "Список користувачів", addUserContainerElem);
    createElement("button", {className: "add-user"}, {click: showAddUserForm}, "Додати нового користувача", addUserContainerElem);
    createElement("div", {className: "form-parent add-form-parent"}, null, null, mainContainer);

    const usersListMainContainer = createElement("div", {className: "users-list-container"}, null, null, mainContainer);
    const usersListElem = createElement(
        "div",
        {className: "users-list"},
        {
            click: e => {
                userAction(e, users);
            },
        },
        null,
        usersListMainContainer
    );

    createElement("div", {className: "user-information-block"}, null, null, usersListMainContainer);

    if (users.length) {
        showUsers(users, usersListElem);
    } else {
        createElement("h4", null, null, "Список користувачів порожній. Додати нового користувача! ", mainContainer);
    }
};
