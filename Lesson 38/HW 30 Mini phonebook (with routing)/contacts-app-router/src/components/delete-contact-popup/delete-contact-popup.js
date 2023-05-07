import {useContext} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {ContactsListContext} from "../../context/contacts-list-context";
import {CONTACTS_KEY} from "../../constants";
import "./delete-contact-popup.css";

export const DeleteContactPopup = () => {
    const {contactsList, setContactsList} = useContext(ContactsListContext);
    const navigate = useNavigate();
    const {contactId} = useParams();

    const removeContact = idContact => () => {
        const newContactsList = contactsList.filter(elem => elem.id !== idContact);

        localStorage.setItem(CONTACTS_KEY, JSON.stringify(newContactsList));
        setContactsList(newContactsList);
        navigate(-1);
    };

    return (
        <div className="delete-contact-popup">
            <div className="popup">
                <h3 className="popup-title">Ви дійсно хочете видалити контакт?</h3>
                <div className="popup-btn">
                    <button onClick={removeContact(contactId)}>Так</button>
                    <button onClick={() => navigate(-1)}>Ні</button>
                </div>
            </div>
        </div>
    );
};
