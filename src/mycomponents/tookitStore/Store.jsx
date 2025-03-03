/* eslint-disable react-refresh/only-export-components */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from "./StoreSlice"
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({
  formData: counterReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["formData"], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;