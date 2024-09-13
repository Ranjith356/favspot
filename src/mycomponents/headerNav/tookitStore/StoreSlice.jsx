import { createSlice } from '@reduxjs/toolkit';
const initialState = {
};
export const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetFormData: () => {
      return initialState;
    },
  },
});

export const { updateFormData, resetFormData } = formDataSlice.actions;

export default formDataSlice.reducer;
