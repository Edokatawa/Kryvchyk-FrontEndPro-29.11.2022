"use strict";

const userAction = ({target}, users) => {
    const currentUserBlock = target.closest(".user-item");
    const userId = +target.closest(".user-item").dataset.userId;

    if (target.className === "edit-user") {
        showEditUserForm(userId, users, currentUserBlock);
    }

    if (target.className === "remove-user") {
        removeUser(userId, users);
    }

    if (target.className === "view-user") {
        viewUser(userId, users);
    }
};
