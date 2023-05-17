import {useState} from "react";
import {createPortal} from "react-dom";
import {useNavigate} from "react-router-dom";
import {PORTAL_HOLDER_ID} from "../../constants";
import "./TableContacts.css";
import {DeleteContactPopup} from "../delete-contact-popup/delete-contact-popup";

const TableContacts = ({contactsList}) => {
    const [contactToDeleteId, setContactToDeleteId] = useState(null);
    const navigate = useNavigate();

    const portalHolder = document.getElementById(PORTAL_HOLDER_ID);

    const onClosePopupClose = () => {
        setContactToDeleteId(null);
    };

    return (
        <div id="contacts-table-block">
            <table className="contacts-table">
                <thead>
                    <tr>
                        <th>Ім'я</th>
                        <th>Прізвище</th>
                        <th>Телефон</th>
                        <th>Редагувати контакт</th>
                        <th>Видалити контакт</th>
                    </tr>
                </thead>
                <tbody>
                    {contactsList.map(contact => (
                        <tr key={contact.id}>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.phone}</td>
                            <td className="edit-btn">
                                <button onClick={() => navigate(`/edit-contact/${contact.id}`)}>Редагувати</button>
                            </td>
                            <td className="delete-btn">
                                <button onClick={() => setContactToDeleteId(contact.id)}>Видалити</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {contactToDeleteId &&
                createPortal(<DeleteContactPopup contactId={contactToDeleteId} onClose={onClosePopupClose} />, portalHolder)}
        </div>
    );
};

export default TableContacts;
