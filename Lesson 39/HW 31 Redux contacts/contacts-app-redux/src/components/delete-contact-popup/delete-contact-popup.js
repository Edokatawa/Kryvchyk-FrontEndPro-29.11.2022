import {useContacts} from "../../hooks/useContacts";
import "./delete-contact-popup.css";

export const DeleteContactPopup = ({contactId, onClose}) => {
    const {deleteContactToServer} = useContacts();

    const removeContact = contactId => () => {
        deleteContactToServer(contactId, onClose);
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
