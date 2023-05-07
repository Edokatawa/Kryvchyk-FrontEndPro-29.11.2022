import {useCallback} from "react";
import {CONTACTS_KEY} from "../constants";

export const useUsers = () => {
    const loadUsers = useCallback(callback => {
        let storageContactsList = JSON.parse(localStorage.getItem(CONTACTS_KEY));

        if (storageContactsList === null) {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(json => {
                    storageContactsList = json.map(({id, name, phone}) => {
                        const firstAndLastNameArr = name.split(" ", 2);

                        return {id: `${id}`, firstName: firstAndLastNameArr[0], lastName: firstAndLastNameArr[1] || "", phone};
                    });
                    callback(storageContactsList);
                });
        } else {
            callback(storageContactsList);
        }
    }, []);

    return {
        loadUsers,
    };
};
