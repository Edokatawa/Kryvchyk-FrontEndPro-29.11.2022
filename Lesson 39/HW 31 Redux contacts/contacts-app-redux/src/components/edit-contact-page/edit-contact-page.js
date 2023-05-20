import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import ContactForm from "../contact-form/contact-form";
import TitleBlock from "../title-block/title-block";
import "./edit-contact-page.css";

const EditContactPage = () => {
    const contacts = useSelector(state => state);

    const {contactId} = useParams();

    const currentContactToEdit = contacts.find(contact => contact.id === contactId);

    return (
        <div className="edit-contact-page">
            <TitleBlock textTitle="Форма редагування контакту" />

            <ContactForm formName="editContactForm" contact={currentContactToEdit} />
        </div>
    );
};

export default EditContactPage;
