import React, {useState, useEffect, createContext} from "react";
import ContactsTable from "./components/ContactsTable/ContactsTable.js";
import "./App.css";
import AddContactForm from "./components/AddContactForm/AddContactForm.js";
import {CONTACTS_KEY} from "./constants.js";

export const LocationContext = createContext();
export const ContactsListContext = createContext();

const App = () => {
    const [location, setLocation] = useState("main-page");
    const [contactsList, setContactsList] = useState([]);

    useEffect(() => {
        let storageContactsList = JSON.parse(localStorage.getItem(CONTACTS_KEY));

        if (storageContactsList === null) {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(json => {
                    storageContactsList = json.map(({id, name, phone}) => {
                        const firstAndLastNameArr = name.split(" ", 2);

                        return {id, firstName: firstAndLastNameArr[0], lastName: firstAndLastNameArr[1] || "", phone};
                    });
                    setContactsList(storageContactsList);
                });
        } else {
            setContactsList(storageContactsList);
        }
    }, []);

    return (
        <LocationContext.Provider value={{location, setLocation: setLocation}}>
            <ContactsListContext.Provider value={{contactsList, setContactsList: setContactsList}}>
                <div className="container">
                    {location === "main-page" && <ContactsTable />}
                    {location === "add-form-page" && <AddContactForm />}
                </div>
            </ContactsListContext.Provider>
        </LocationContext.Provider>
    );
};

export default App;
