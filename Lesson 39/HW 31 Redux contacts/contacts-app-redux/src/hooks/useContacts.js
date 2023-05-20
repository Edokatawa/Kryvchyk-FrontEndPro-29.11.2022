import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setAllContact, addNewContact, editContact, deleteContact} from "../store/actions/contactsActions";
import {CONTACTS_KEY} from "../constants";

export const useContacts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const contacts = useSelector(state => state);

    const getAllContacts = useCallback(() => {
        let storageContactsList = JSON.parse(localStorage.getItem(CONTACTS_KEY));

        if (storageContactsList === null) {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(json => {
                    storageContactsList = json.map(({id, name, phone}) => {
                        const firstAndLastNameArr = name.split(" ", 2);

                        return {id: `${id}`, firstName: firstAndLastNameArr[0], lastName: firstAndLastNameArr[1] || "", phone};
                    });
                    dispatch(setAllContact(storageContactsList));
                });
        } else {
            dispatch(setAllContact(storageContactsList));
        }
    }, [dispatch]);

    const addContactToServer = contact => {
        const newContact = {id: crypto.randomUUID(), ...contact};
        localStorage.setItem(CONTACTS_KEY, JSON.stringify([...contacts, {...newContact}]));
        dispatch(addNewContact(newContact));
        navigate("/");
    };

    const editContactToServer = dataEditContact => {
        const newContacts = contacts.map(oldContact =>
            oldContact.id === dataEditContact.id ? {...dataEditContact} : oldContact
        );

        localStorage.setItem(CONTACTS_KEY, JSON.stringify(newContacts));
        dispatch(editContact(newContacts));
        navigate("/");
    };

    const deleteContactToServer = (currentIdContactToDelete, onClose) => {
        localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts.filter(elem => elem.id !== currentIdContactToDelete)));
        dispatch(deleteContact(currentIdContactToDelete));
        onClose();
    };

    return {
        getAllContacts,
        addContactToServer,
        editContactToServer,
        deleteContactToServer,
    };
};
