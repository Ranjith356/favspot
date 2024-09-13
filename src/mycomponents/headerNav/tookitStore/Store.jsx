import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./StoreSlice"


export const store = configureStore({
  reducer: {
    formData: counterReducer,
  },
});
