import {useEffect} from "react";
import {useContacts} from "../hooks/useContacts";

export const DataController = ({children}) => {
    const {getAllContacts} = useContacts();

    useEffect(() => {
        getAllContacts();
    }, []);

    return children;
};
