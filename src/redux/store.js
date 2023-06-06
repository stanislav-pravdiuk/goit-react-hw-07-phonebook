import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { phonebookReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
};

const persistedReducer = persistReducer(
    persistConfig,
    phonebookReducer);
    
export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ],
            },
        }),
});

export let persistor = persistStore(store);