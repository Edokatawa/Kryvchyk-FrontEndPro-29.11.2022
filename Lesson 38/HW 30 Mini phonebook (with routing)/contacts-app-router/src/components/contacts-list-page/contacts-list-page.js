import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {ContactsListContext} from "../../context/contacts-list-context";
import TitleBlock from "../title-block/TitleBlock";
import "./contacts-list-page.css";
import TableContacts from "../table-contacts/TableContacts";

export const ContactsListPage = () => {
    const {contactsList} = useContext(ContactsListContext);
    const navigate = useNavigate();

    const hasContacts = !!contactsList.length;

    return (
        <div className="contacts-list-page">
            {!hasContacts && <TitleBlock textTitle="Список контактів порожній" />}
            {hasContacts && (
                <>
                    <TitleBlock textTitle="Список контактів" />

                    <TableContacts contactsList={contactsList} />
                </>
            )}

            <div className="btn-block-add-contact">
                <button onClick={() => navigate("/add-contact")}>Додати новий контак</button>
            </div>
        </div>
    );
};
