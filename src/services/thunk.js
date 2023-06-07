import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteContact, getContacts, postContact } from "./requestsAPI";

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', async () => {
    return await getContacts('/contacts')
});

export const postContactThunk = createAsyncThunk('contacts/addContact', async (requestBody) => {
    return await postContact('/contacts', requestBody)
});

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (endpoint) => {
    return await deleteContact(`/contacts/${endpoint}`)
});