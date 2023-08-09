import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { createStore } from "redux";
// import { rootReducer } from "./redusers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./slice.js/contactsSlice";
import { filterReducer } from "./slice.js/filterSlice";
import { authReducer } from './slice.js/authSlice';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


export const store = configureStore({
    reducer: {
      auth: persistReducer(authPersistConfig, authReducer), 
      // contacts: contactsReducer,
      //   filter: filterReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

