import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { deleteContactThunk, getContactsThunk, postContactThunk } from "services/thunk";
import { initialState } from "redux/contacts/initialState";

const STATUS = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
};

const arrayRequests = [getContactsThunk, postContactThunk, deleteContactThunk];
const updateStatus = (status) => {
    return arrayRequests.map(el => el[status])
};

const handlePending = (state) => {
    state.isLoading = true
};

const handleFulfilled = (state) => {
    state.isLoading = false
    state.error = ''
};

const handleFulfilledGet = (state, { payload }) => {
    state.isLoading = false
    state.items = payload
    state.error = ''
};

const handleFulfilledPost = (state, { payload }) => {
    if (state.items.some(contact => contact.name === payload.name)) {
        Notify.warning(`${payload.name} is already in contacts`);
        return
    };

    state.items.push(payload);
};

const handleFulfilledDelete = (state, { payload }) => {
    state.items = state.items.filter(item => item.id !== payload.id);
};

const handleRejected = (state, {error}) => {
    state.isLoading = false
    state.error = error.message
};

const itemsSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    extraReducers: (builder) => {
        const {PENDING, FULFILLED, REJECTED} = STATUS
        builder
            .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
            .addCase(postContactThunk.fulfilled, handleFulfilledPost)
            .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
            .addMatcher(isAnyOf(...updateStatus(PENDING)), handlePending)
            .addMatcher(isAnyOf(...updateStatus(FULFILLED)), handleFulfilled)
            .addMatcher(isAnyOf(...updateStatus(REJECTED)), handleRejected)
        }
    });

export const itemsReducer = itemsSlice.reducer;
