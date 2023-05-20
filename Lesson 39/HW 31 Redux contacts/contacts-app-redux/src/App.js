import {Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {ContactsListPage} from "./components/contacts-list-page/contacts-list-page";
import AddContactPage from "./components/add-contact-page/add-contact-page";
import EditContactPage from "./components/edit-contact-page/edit-contact-page";
import {ErrorPage} from "./components/error-page/error-page";
import {DataController} from "./controllers/data-controller";
import {store} from "./store/store";
import "./App.css";

const App = () => {
    return (
        <div className="container">
            <Provider store={store}>
                <DataController>
                    <Routes>
                        <Route path="/" element={<ContactsListPage />}></Route>
                        <Route path="/add-contact" element={<AddContactPage />}></Route>
                        <Route path="/edit-contact/:contactId" element={<EditContactPage />}></Route>
                        <Route path="*" element={<ErrorPage />}></Route>
                    </Routes>
                </DataController>
            </Provider>
        </div>
    );
};

export default App;
