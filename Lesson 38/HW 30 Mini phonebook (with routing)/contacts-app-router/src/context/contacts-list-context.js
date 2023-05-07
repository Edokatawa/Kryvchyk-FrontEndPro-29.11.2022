import {createContext} from "react";

export const ContactsListContext = createContext({
    contactsList: [],
    setContactsList: () => undefined,
});
