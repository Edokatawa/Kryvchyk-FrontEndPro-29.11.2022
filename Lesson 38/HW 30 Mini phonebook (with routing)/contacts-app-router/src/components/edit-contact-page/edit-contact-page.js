import {useContext} from "react";
import {useParams} from "react-router-dom";
import {ContactsListContext} from "../../context/contacts-list-context";
import ContactForm from "../contact-form/ContactForm";
import TitleBlock from "../title-block/TitleBlock";
import "./edit-contact-page.css";

const EditContactPage = () => {
    const {contactsList} = useContext(ContactsListContext);
    const {contactId} = useParams();

    const currentContactToEdit = contactsList.find(contact => contact.id === contactId);

    return (
        <div className="edit-contact-page">
            <TitleBlock textTitle="Форма редагування контакту" />

            <ContactForm formName="editContactForm" contact={currentContactToEdit} />
        </div>
    );
};

export default EditContactPage;
