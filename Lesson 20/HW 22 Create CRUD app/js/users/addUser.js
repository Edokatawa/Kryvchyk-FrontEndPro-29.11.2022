"use strict";

const addUser = addForm => {
    addForm.querySelector(".error-message").innerHTML = "";
    const errorMessageElem = addForm.querySelector(".error-message");
    const formValues = getFormValues(addForm.getAttribute("name"));

    if (isFormValid(formValues, errorMessageElem)) {
        const users = Storage.get(USERS_KEY) || [...DEFAULT_USERS];
        let maxId = users.reduce((acc, curr) => {
            if (curr.id) {
                if (acc > curr.id) {
                    return acc;
                }

                return curr.id;
            }

            return 0;
        }, 0);
        const user = {id: ++maxId, ...formValues, timeOfCreation: new Date().getTime(), editTime: new Date().getTime()};
        Storage.set(USERS_KEY, [...users, user]);

        showCRUD();
        const addUserSuccessfulElem = document.querySelector(".add-form-parent");
        createElement("h2", {className: "successful-title"}, null, "Користувача успішно додано!", addUserSuccessfulElem);
    }
};
