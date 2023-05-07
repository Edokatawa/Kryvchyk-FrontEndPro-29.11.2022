import {useParams} from "react-router-dom";
import ContactForm from "../contact-form/ContactForm";
import TitleBlock from "../title-block/TitleBlock";
import "./edit-contact-page.css";

const EditContactPage = () => {
    const {contactId} = useParams();

    return (
        <div className="edit-contact-page">
            <TitleBlock textTitle="Форма редагування контакту" />

            <ContactForm formName="editContactForm" editContactId={contactId} />
        </div>
    );
};

export default EditContactPage;
