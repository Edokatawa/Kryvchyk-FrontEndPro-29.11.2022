"use strict";

const showUsers = (users, parentElem) => {
    for (const user of users) {
        const userItemElem = createElement("div", {className: "user-item", "data-user-id": user.id}, null, null, parentElem);
        createElement("h4", null, null, `#${user.id} - ${user.name}`, userItemElem);

        const btnBlockElem = createElement("div", {className: "btn-block"}, null, null, userItemElem);
        createElement("button", {className: "edit-user"}, null, "Редакувати користувача", btnBlockElem);
        createElement("button", {className: "remove-user"}, null, "Видалити користувача", btnBlockElem);
        createElement("button", {className: "view-user"}, null, "Переглянути користувача", btnBlockElem);

        createElement("div", {className: "form-parent form-edit-user-block"}, null, null, userItemElem);
    }
};
