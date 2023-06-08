import { configureStore } from "@reduxjs/toolkit";

import { itemsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filter/filterSlice";
    
export const store = configureStore({
    reducer: {
        contacts: itemsReducer,
        filter: filterReducer,
    },
});