import {useState, useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {ContactsListPage} from "./components/contacts-list-page/contacts-list-page";
import AddContactPage from "./components/add-contact-page/add-contact-page";
import EditContactPage from "./components/edit-contact-page/edit-contact-page";
import {DeleteContactPopup} from "./components/delete-contact-popup/delete-contact-popup";
import {ErrorPage} from "./components/error-page/error-page";
import {ContactsListContext} from "./context/contacts-list-context";
import {useUsers} from "./hooks/useUsers";
import "./App.css";

const App = () => {
    const location = useLocation();
    const background = location.state && location.state.background;
    const [contactsList, setContactsList] = useState([]);
    const {loadUsers} = useUsers();

    useEffect(() => {
        loadUsers(setContactsList);
    }, [loadUsers]);

    return (
        <ContactsListContext.Provider value={{contactsList, setContactsList: setContactsList}}>
            <div className="container">
                <Routes location={background || location}>
                    <Route path="/" element={<ContactsListPage />}>
                        <Route path="/:contactId/delete" element={<DeleteContactPopup />}></Route>
                    </Route>
                    <Route path="/add-contact" element={<AddContactPage />}></Route>
                    <Route path="/edit-contact/:contactId" element={<EditContactPage />}></Route>
                    <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
                {background && (
                    <Routes>
                        <Route path=":contactId/delete" element={<DeleteContactPopup />} />
                    </Routes>
                )}
            </div>
        </ContactsListContext.Provider>
    );
};

export default App;
