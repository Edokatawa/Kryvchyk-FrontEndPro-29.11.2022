import {useContext} from "react";
import {ContactsListContext} from "../../context/contacts-list-context";
import {CONTACTS_KEY} from "../../constants";
import "./delete-contact-popup.css";

export const DeleteContactPopup = ({contactId, onClose}) => {
    const {contactsList, setContactsList} = useContext(ContactsListContext);

    const removeContact = contactId => () => {
        const newContactsList = contactsList.filter(elem => elem.id !== contactId);

        localStorage.setItem(CONTACTS_KEY, JSON.stringify(newContactsList));
        setContactsList(newContactsList);
        onClose();
    };

    return (
        <div className="delete-contact-popup">
            <div className="popup">
                <h3 className="popup-title">Ви дійсно хочете видалити контакт?</h3>
                <div className="popup-btn">
                    <button onClick={removeContact(contactId)}>Так</button>
                    <button onClick={onClose}>Ні</button>
                </div>
            </div>
        </div>
    );
};
