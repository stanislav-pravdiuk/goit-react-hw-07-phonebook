import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getContacts } from "../components/getContacts";

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', async () => {
    return await getContacts()
} )

const initialState = {
    contacts: [],
    isLoading: false,
    error: '',
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
        // fetching: (state) => {
        //     state.isLoading = true
        // },
        // fetchSuccess: (state, { payload }) => {
        //     state.isLoading = false
        //     state.contacts = payload
        //     state.error = ''
        // },
        // fetchError: (state, { payload }) => {
        //     state.isLoading = false
        //     state.error = payload
        // },
    },
    extraReducers: {
        [getContactsThunk.pending]: (state) => {
            state.isLoading = true
        },
        [getContactsThunk.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.contacts = payload
            state.error = ''
        },
        [getContactsThunk.rejected]: (state, { payload }) => {
            state.isLoading = false
            state.error = payload
        },
        },
    });

export const phonebookReducer = itemSlice.reducer;
export const { addContact, deleteContact, fetching, fetchSuccess, fetchError } = itemSlice.actions;