import ContactForm from "../contact-form/ContactForm";
import TitleBlock from "../title-block/TitleBlock";
import "./add-contact-page.css";

const AddContactPage = () => {
    return (
        <div className="add-contact-page">
            <TitleBlock textTitle="Форма додавання нового контакту" />

            <ContactForm formName="addContactForm" editContactId={null} />
        </div>
    );
};

export default AddContactPage;
