import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useContacts} from "../../hooks/useContacts.js";
import {isFormValid} from "../isFormValid";
import "./contact-form.css";

const ContactForm = ({formName, contact}) => {
    const navigate = useNavigate();
    const {addContactToServer, editContactToServer} = useContacts();

    const [form, setForm] = useState(contact || {firstName: "", lastName: "", phone: ""});
    const [errorMessages, setErrorMessages] = useState({firstName: "", lastName: "", phone: ""});

    const handleInputText = ({target: {name: key, value: inputVal}}) => {
        setForm({...form, [key]: inputVal});
    };

    const actionContact = event => {
        event.preventDefault();
        const {id, ...formWithoutId} = form;
        const {isValid, errors} = isFormValid(formWithoutId);

        if (errors) {
            setErrorMessages(errors);
        }

        if (isValid) {
            if (!!contact) {
                editContactToServer(form);
            } else {
                addContactToServer(form);
            }
        }
    };

    return (
        <form className="contact-form" name={formName}>
            <div className="text-field-block">
                <label htmlFor="firstName">Введіть Ім'я</label>
                <input type="text" name="firstName" placeholder="Ім'я" value={form.firstName} onChange={handleInputText} />
                <div className="error-message">{errorMessages.firstName}</div>
            </div>
            <div className="text-field-block">
                <label htmlFor="lastName">Введіть Прізвище</label>
                <input type="text" name="lastName" placeholder="Прізвище" value={form.lastName} onChange={handleInputText} />
                <div className="error-message">{errorMessages.lastName}</div>
            </div>
            <div className="text-field-block">
                <label htmlFor="phone">Введіть Номер телефону</label>
                <input type="text" name="phone" placeholder="Телефон" value={form.phone} onChange={handleInputText} />
                <div className="error-message">{errorMessages.phone}</div>
            </div>

            <div className="btn-form-block">
                <button type="submit" onClick={event => actionContact(event)}>
                    Зберегти
                </button>
                <button onClick={() => navigate("/")}>Скасувати</button>
            </div>
        </form>
    );
};

export default ContactForm;
