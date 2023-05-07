import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ContactsListContext} from "../../context/contacts-list-context";
import {CONTACTS_KEY} from "../../constants.js";
import {isFormValid} from "../isFormValid";
import "./ContactForm.css";

const ContactForm = ({formName, editContactId}) => {
    const {contactsList, setContactsList} = useContext(ContactsListContext);
    const navigate = useNavigate();

    const [inputText, setInputText] = useState({firstName: "", lastName: "", phone: ""});
    const [errorMessages, setErrorMessages] = useState({firstName: "", lastName: "", phone: ""});

    useEffect(() => {
        let defTextInput = {};

        if (editContactId !== null) {
            const currentEditContact = contactsList.find(contact => contact.id === editContactId);

            for (const key in currentEditContact) {
                if (key !== "id") {
                    defTextInput[key] = currentEditContact[key];
                }
            }

            setInputText(defTextInput);
        }
    }, []);

    const handleInputText = ({target: {name: key, value: inputVal}}) => {
        setInputText({...inputText, [key]: inputVal});
    };

    const actionContact = event => {
        event.preventDefault();
        const {isValid, errors} = isFormValid(inputText);

        if (errors) {
            setErrorMessages(errors);
        }

        if (isValid) {
            let newContact = [];

            if (editContactId !== null) {
                newContact = contactsList.map(contact => {
                    if (contact.id === editContactId) {
                        for (let key in contact) {
                            if (inputText[key]) {
                                contact[key] = inputText[key];
                            }
                        }
                    }

                    return contact;
                });
            } else {
                newContact = [...contactsList, {id: crypto.randomUUID(), ...inputText}];
            }

            localStorage.setItem(CONTACTS_KEY, JSON.stringify(newContact));
            setContactsList(newContact);
            navigate("/");
        }
    };

    return (
        <form className="contact-form" name={formName}>
            <div className="text-field-block">
                <label htmlFor="firstName">Введіть Ім'я</label>
                <input type="text" name="firstName" placeholder="Ім'я" value={inputText.firstName} onChange={handleInputText} />
                <div className="error-message">{errorMessages.firstName}</div>
            </div>
            <div className="text-field-block">
                <label htmlFor="lastName">Введіть Прізвище</label>
                <input type="text" name="lastName" placeholder="Прізвище" value={inputText.lastName} onChange={handleInputText} />
                <div className="error-message">{errorMessages.lastName}</div>
            </div>
            <div className="text-field-block">
                <label htmlFor="phone">Введіть Номер телефону</label>
                <input type="text" name="phone" placeholder="Телефон" value={inputText.phone} onChange={handleInputText} />
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
