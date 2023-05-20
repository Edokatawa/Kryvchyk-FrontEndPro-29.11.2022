import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import TitleBlock from "../title-block/title-block";
import TableContacts from "../table-contacts/table-contacts";
import "./contacts-list-page.css";

export const ContactsListPage = () => {
    const contacts = useSelector(state => state);
    const navigate = useNavigate();

    const hasContacts = !!contacts.length;

    return (
        <div className="contacts-list-page">
            {!hasContacts && <TitleBlock textTitle="Список контактів порожній" />}
            {hasContacts && (
                <>
                    <TitleBlock textTitle="Список контактів" />

                    <TableContacts contactsList={contacts} />
                </>
            )}

            <div className="btn-block-add-contact">
                <button onClick={() => navigate("/add-contact")}>Додати новий контак</button>
            </div>
        </div>
    );
};
