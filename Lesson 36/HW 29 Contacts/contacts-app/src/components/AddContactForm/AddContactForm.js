import {useContext, useState} from "react";
import "./AddContactForm.css";
import {LocationContext, ContactsListContext} from "../../App.js";
import {CONTACTS_KEY, FORM_VALIDATION} from "../../constants.js";

const AddContactForm = () => {
    const {setLocation} = useContext(LocationContext);
    const {contactsList, setContactsList} = useContext(ContactsListContext);

    const [inputText, setInputText] = useState({firstName: "", lastName: "", phone: ""});
    const [errorMessages, setErrorMessages] = useState({firstName: "", lastName: "", phone: ""});

    const handleInputText = ({target: {name: key, value: inputVal}}) => {
        setInputText({...inputText, [key]: inputVal});
    };

    const isFormValid = formValues => {
        let isValid = true;
        let currentMessagesState = {};

        for (const key in formValues) {
            const {regex, errorMessage} = FORM_VALIDATION[key];

            if (!regex.test(formValues[key])) {
                isValid = false;
                currentMessagesState = {...currentMessagesState, [key]: errorMessage};
            } else {
                currentMessagesState = {...currentMessagesState, [key]: ""};
            }
        }

        setErrorMessages(currentMessagesState);

        return isValid;
    };

    const addContact = event => {
        event.preventDefault();

        if (isFormValid(inputText)) {
            let maxId = contactsList.reduce((acc, curr) => {
                if (curr.id) {
                    if (acc > curr.id) {
                        return acc;
                    }

                    return curr.id;
                }

                return 0;
            }, 0);

            const contact = {id: ++maxId, ...inputText};
            localStorage.setItem(CONTACTS_KEY, JSON.stringify([...contactsList, contact]));
            setContactsList([...contactsList, contact]);
            setLocation("main-page");
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
                    <button onClick={() => setLocation("main-page")}>Скасувати</button>
                </div>
            </form>
        </div>
    );
};

export default AddContactForm;
