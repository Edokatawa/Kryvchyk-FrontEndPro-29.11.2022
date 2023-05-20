import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {contactsReducer} from "./reducers/contactsReducer";

export const store = createStore(contactsReducer, composeWithDevTools());
