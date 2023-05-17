import {useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {ContactsListPage} from "./components/contacts-list-page/contacts-list-page";
import AddContactPage from "./components/add-contact-page/add-contact-page";
import EditContactPage from "./components/edit-contact-page/edit-contact-page";
import {ErrorPage} from "./components/error-page/error-page";
import {ContactsListContext} from "./context/contacts-list-context";
import {useUsers} from "./hooks/useUsers";
import "./App.css";

const App = () => {
    const [contactsList, setContactsList] = useState([]);
    const {loadUsers} = useUsers();

    useEffect(() => {
        loadUsers(setContactsList);
    }, [loadUsers]);

    return (
        <ContactsListContext.Provider value={{contactsList, setContactsList: setContactsList}}>
            <div className="container">
                <Routes>
                    <Route path="/" element={<ContactsListPage />}></Route>
                    <Route path="/add-contact" element={<AddContactPage />}></Route>
                    <Route path="/edit-contact/:contactId" element={<EditContactPage />}></Route>
                    <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
            </div>
        </ContactsListContext.Provider>
    );
};

export default App;
