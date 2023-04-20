"use strict";

const showEditUserForm = (userId, users, currentUserBlock) => {
    currentUserBlock.querySelector(".form-edit-user-block").innerHTML = "";
    const parentEditFormElem = currentUserBlock.querySelector(".form-edit-user-block");
    const editForm = createElement(
        "form",
        {className: "user-form edit-user-form", name: `editUserForm-${userId}`},
        null,
        null,
        parentEditFormElem
    );
    const user = users.find(elem => elem.id === userId);

    showForm(editForm, user);

    createElement(
        "input",
        {type: "button", value: "Редагувати користувача"},
        {
            click: () => {
                editUser(editForm, userId);
            },
        },
        null,
        editForm
    );
    createElement("div", {className: "error-message"}, null, null, editForm);
};
