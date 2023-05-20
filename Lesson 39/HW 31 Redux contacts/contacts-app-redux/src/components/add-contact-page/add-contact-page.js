import ContactForm from "../contact-form/contact-form";
import TitleBlock from "../title-block/title-block";
import "./add-contact-page.css";

const AddContactPage = () => {
    return (
        <div className="add-contact-page">
            <TitleBlock textTitle="Форма додавання нового контакту" />

            <ContactForm formName="addContactForm" contact={null} />
        </div>
    );
};

export default AddContactPage;
