import {SET_ALL_CONTACT, ADD_NEW_CONTACT, EDIT_CONTACT, DELETE_CONTACT} from "../actions/contactsActions";

const INITIAL_STATE = [];

export const contactsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ALL_CONTACT: {
            return [...action.payload];
        }
        case ADD_NEW_CONTACT: {
            return [...state, action.payload];
        }
        case EDIT_CONTACT: {
            return [...action.payload];
        }
        case DELETE_CONTACT: {
            const newContacts = state.filter(elem => elem.id !== action.payload);

            return [...newContacts];
        }

        default:
            return state;
    }
};
