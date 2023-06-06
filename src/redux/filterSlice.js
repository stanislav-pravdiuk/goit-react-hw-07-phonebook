import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        filterContacts: (state, action) => {
            return {
                filter: action.payload
            }
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;

