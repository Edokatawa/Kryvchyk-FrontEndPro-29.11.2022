export const SET_ALL_CONTACT = "SET_ALL_CONTACT";
export const ADD_NEW_CONTACT = "ADD_NEW_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export const setAllContact = contacts => ({type: SET_ALL_CONTACT, payload: contacts});
export const addNewContact = newContact => ({type: ADD_NEW_CONTACT, payload: newContact});
export const editContact = editedContacts => ({type: EDIT_CONTACT, payload: editedContacts});
export const deleteContact = id => ({type: DELETE_CONTACT, payload: id});
