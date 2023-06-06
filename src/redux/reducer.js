import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./contacts/contactsSlice";

export const reducer = {
    contacts: contactsReducer,
    filter: filterReducer,
};