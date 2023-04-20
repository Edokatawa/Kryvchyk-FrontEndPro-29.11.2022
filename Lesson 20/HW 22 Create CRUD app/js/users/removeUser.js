"use strict";

const removeUser = (userId, users) => {
    const deleteThisUser = confirm(`Ви дійсно хочете видалити користувача?`);
    if (deleteThisUser) {
        const newUsers = users.filter(elem => elem.id !== userId);

        Storage.set(USERS_KEY, newUsers);
        showCRUD();
    }
};
