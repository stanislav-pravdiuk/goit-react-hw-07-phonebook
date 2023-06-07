// import { createSlice } from "@reduxjs/toolkit"
// import { getContacts } from "./getContacts";

// export const getContactsThunk = () => {
//     return async (dispatch) => {
//         try {
//             dispatch(contactsSlice.action.fetching())
//             const data = await getContacts()
//             dispatch(contactsSlice.action.fetchSuccess(data))

//         } catch (error) {
//             dispatch(contactsSlice.action.fetchError(error))
//         }
//     }
// };

// const initialState = {
//     contacts: [],
//     isLoading: false,
//     error: '',
// };

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState,
//     reducers: {
//         fetching: (state) => {
//             state.isLoading = true
//         },
//         fetchSuccess: (state, { payload }) => {
//             state.isLoading = false
//             state.contacts = payload.contacts
//             state.error = ''
//         },
//         fetchError: (state, { payload }) => {
//             state.isLoading = false
//             state.error = payload
//         },
//     }
// });

// export const contactsReducer = contactsSlice.reducer
