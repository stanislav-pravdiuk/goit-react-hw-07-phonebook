import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { deleteContactThunk, getContactsThunk, postContactThunk } from "services/thunk";
import { initialState } from "redux/initial";

const arrayRequests = [getContactsThunk, postContactThunk, deleteContactThunk];
const updateStatus = (status) => {
    return arrayRequests.map(el => el[status])
};

const handlePending = (state) => {
    state.isLoading = true
};
const handleFulfilled = (state, { payload }) => {
    state.isLoading = false
    state.items = payload
    state.error = ''
};
const postFulfilled = (state, action) => {
    if (state.items.some(contact => contact.name === action.payload.name)) {
        Notify.warning(`${action.payload.name} is already in contacts`);
        return;
    }

    state.items = [action.payload, ...state.items]
};
const deleteFulfilled = (state, action) => {
    return {
        items: state.items.filter(item => item.id !== action.payload)
    }
};
const handleRejected = (state, { payload }) => {
    state.isLoading = false
    state.error = payload
};

const itemSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getContactsThunk.fulfilled, handleFulfilled)
            .addCase(postContactThunk.fulfilled, postFulfilled)
            .addCase(deleteContactThunk.fulfilled, deleteFulfilled)
            .addMatcher(isAnyOf(...updateStatus('pending')), handlePending)
            .addMatcher(isAnyOf(...updateStatus('rejected')), handleRejected)
        }
    });

export const phonebookReducer = itemSlice.reducer;
