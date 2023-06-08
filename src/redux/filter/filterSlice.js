import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const filterSlice = createSlice({
    name: 'filter',
    initialState,
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

