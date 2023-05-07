import {useNavigate, useLocation} from "react-router-dom";
import "./TableContacts.css";

const TableContacts = ({contactsList}) => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
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
                            <button onClick={() => navigate(`${contact.id}/delete`, {state: {background: location}})}>
                                Видалити
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableContacts;
