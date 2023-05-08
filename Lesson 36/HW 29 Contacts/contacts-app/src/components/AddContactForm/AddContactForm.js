import {useContext, useState} from "react";
import {LocationContext} from "../../context/location-context";
import {ContactsListContext} from "../../context/contacts-list-context";
import {CONTACTS_KEY} from "../../constants/CONTACTS_KEY";
import {LOCATIONS} from "../../constants/LOCATIONS";
import {isFormValid} from "../isFormValid";
import "./AddContactForm.css";

const AddContactForm = () => {
    const {setLocation} = useContext(LocationContext);
    const {contactsList, setContactsList} = useContext(ContactsListContext);

    const [inputText, setInputText] = useState({firstName: "", lastName: "", phone: ""});
    const [errorMessages, setErrorMessages] = useState({firstName: "", lastName: "", phone: ""});

    const handleInputText = ({target: {name: key, value: inputVal}}) => {
        setInputText({...inputText, [key]: inputVal});
    };

    const addContact = event => {
        event.preventDefault();
        const {isValid, errors} = isFormValid(inputText);

        if (errors) {
            setErrorMessages(errors);
        }

        if (isValid) {
            const newContacts = [...contactsList, {id: crypto.randomUUID(), ...inputText}];

            localStorage.setItem(CONTACTS_KEY, JSON.stringify(newContacts));
            setContactsList(newContacts);
            setLocation(LOCATIONS.MAIN_PAGE);
        }
    };

    return (
        <div className="add-form-container">
            <div className="title">
                <h1>Форма додавання нового контакту</h1>
            </div>
            <form className="add-contact-form" name="addContactForm">
                <div className="text-field-block">
                    <label htmlFor="firstName">Введіть Ім'я</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Ім'я"
                        value={inputText.firstName}
                        onChange={handleInputText}
                    />
                    <div className="error-message">{errorMessages.firstName}</div>
                </div>
                <div className="text-field-block">
                    <label htmlFor="lastName">Введіть Прізвище</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Прізвище"
                        value={inputText.lastName}
                        onChange={handleInputText}
                    />
                    <div className="error-message">{errorMessages.lastName}</div>
                </div>
                <div className="text-field-block">
                    <label htmlFor="phone">Введіть Номер телефону</label>
                    <input type="text" name="phone" placeholder="Телефон" value={inputText.phone} onChange={handleInputText} />
                    <div className="error-message">{errorMessages.phone}</div>
                </div>

                <div className="btn-form-block">
                    <button type="submit" onClick={event => addContact(event)}>
                        Зберегти
                    </button>
                    <button onClick={() => setLocation(LOCATIONS.MAIN_PAGE)}>Скасувати</button>
                </div>
            </form>
        </div>
    );
};

export default AddContactForm;
