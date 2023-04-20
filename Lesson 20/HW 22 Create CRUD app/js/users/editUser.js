"use strict";

const editUser = (editForm, userId) => {
    editForm.querySelector(".error-message").innerHTML = "";
    const errorMessageElem = editForm.querySelector(".error-message");
    const formValues = getFormValues(editForm.getAttribute("name"));

    if (isFormValid(formValues, errorMessageElem)) {
        const users = Storage.get(USERS_KEY) || [...DEFAULT_USERS];

        const newUsers = users.map(user => {
            if (user.id === userId) {
                for (let key in user) {
                    if (formValues[key]) {
                        user[key] = formValues[key];
                    }
                }

                user.editTime = new Date().getTime();
            }

            return user;
        });

        Storage.set(USERS_KEY, newUsers);
        showCRUD();
    }
};
