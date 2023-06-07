import { createSlice } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getContactsThunk } from "components/thunk";
import { initialState } from "components/initial";

const handlePending = (state) => {
    state.isLoading = true
};
const handleFulfilled = (state, { payload }) => {
    state.isLoading = false
    state.contacts = payload
    state.error = ''
};
const handleRejected = (state, { payload }) => {
    state.isLoading = false
    state.error = payload
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

            state.contacts = [action.payload, ...state.contacts]
                ;
        },

        deleteContact: (state, action) => {
            return {
                contacts: state.contacts.filter(item => item.id !== action.payload)
            }
        },

    },

    extraReducers: (builder) => {
        builder
            .addCase(getContactsThunk.pending, handlePending)
            .addCase(getContactsThunk.fulfilled, handleFulfilled )
            .addCase(getContactsThunk.rejected, handleRejected )
        }
    });

export const phonebookReducer = itemSlice.reducer;
export const { addContact, deleteContact } = itemSlice.actions;