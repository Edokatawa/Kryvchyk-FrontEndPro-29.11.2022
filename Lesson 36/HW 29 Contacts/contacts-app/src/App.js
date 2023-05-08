import React, {useState, useEffect} from "react";
import ContactsTable from "./components/ContactsTable/ContactsTable.js";
import AddContactForm from "./components/AddContactForm/AddContactForm.js";
import {useUsers} from "./hooks/useUsers.js";
import {LocationContext} from "./context/location-context.js";
import {ContactsListContext} from "./context/contacts-list-context.js";
import {LOCATIONS} from "./constants/LOCATIONS";
import "./App.css";

const CONTENT_COMP = {
    [LOCATIONS.MAIN_PAGE]: ContactsTable,
    [LOCATIONS.ADD_FORM]: AddContactForm,
};

const App = () => {
    const [location, setLocation] = useState(LOCATIONS.MAIN_PAGE);
    const [contactsList, setContactsList] = useState([]);
    const Content = CONTENT_COMP[location];

    const {loadUsers} = useUsers();

    useEffect(() => {
        loadUsers(setContactsList);
    }, [loadUsers]);

    return (
        <LocationContext.Provider value={{location, setLocation: setLocation}}>
            <ContactsListContext.Provider value={{contactsList, setContactsList: setContactsList}}>
                <div className="container">
                    <Content />
                </div>
            </ContactsListContext.Provider>
        </LocationContext.Provider>
    );
};

export default App;
