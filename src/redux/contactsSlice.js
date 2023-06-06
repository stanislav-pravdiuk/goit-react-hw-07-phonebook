import { createSlice } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const initialState = {
    contacts: [],
};

const itemSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
        addContact: (state, action) => {
            if (state.contacts.some(contact => contact.name === action.payload.name)) {
                Notify.warning(`${action.payload.name} is already in contacts`);
                return;
            }

            return {
                contacts: [action.payload, ...state.contacts]
            };
        },

        deleteContact: (state, action) => {
            return {
                contacts: state.contacts.filter(item => item.id !== action.payload)
            }
        },
    },
});

export const phonebookReducer = itemSlice.reducer;
export const { addContact, deleteContact } = itemSlice.actions;