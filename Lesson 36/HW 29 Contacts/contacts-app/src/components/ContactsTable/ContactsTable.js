import React, {useContext} from "react";
import {LocationContext} from "../../context/location-context";
import {ContactsListContext} from "../../context/contacts-list-context";
import {CONTACTS_KEY} from "../../constants/CONTACTS_KEY";
import {LOCATIONS} from "../../constants/LOCATIONS";
import TitlePage from "../TitlePage/TitlePage.js";
import "./ContactsTable.css";

const ContactsTable = () => {
    const {setLocation} = useContext(LocationContext);
    const {contactsList, setContactsList} = useContext(ContactsListContext);

    const hasContacts = !!contactsList.length;

    const removeContact = idContact => () => {
        const removeThisContact = window.confirm(`Ви дійсно хочете видалити контакт?`);
        if (removeThisContact) {
            const newContactsList = contactsList.filter(elem => elem.id !== idContact);

            localStorage.setItem(CONTACTS_KEY, JSON.stringify(newContactsList));
            setContactsList(newContactsList);
        }
    };

    return (
        <div className="contacts-container">
            {!hasContacts && <TitlePage textTitle="Список контактів порожній" />}
            {hasContacts && (
                <>
                    <TitlePage textTitle="Список контактів" />

                    <table>
                        <thead>
                            <tr>
                                <th>Ім'я</th>
                                <th>Прізвище</th>
                                <th>Телефон</th>
                                <th>Видалити контакт</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contactsList.map(elem => (
                                <tr key={elem.id}>
                                    <td>{elem.firstName}</td>
                                    <td>{elem.lastName}</td>
                                    <td>{elem.phone}</td>
                                    <td className="delete-btn">
                                        <button onClick={removeContact(elem.id)}>Видалити</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}

            <div className="btn-block-add-contact">
                <button onClick={() => setLocation(LOCATIONS.ADD_FORM)}>Додати новий контак</button>
            </div>
        </div>
    );
};

export default ContactsTable;
