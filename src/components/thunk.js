import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts } from "./requestsAPI";

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', async () => {
    return await getContacts('/contacts')
});

// export const postContactThunk = createAsyncThunk('contacts/addContact', async () => {
//     return await getContacts()
// });

// export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async () => {
//     return await getContacts()
// });