import { createSlice } from "@reduxjs/toolkit";

// Redux slice 'formSlice' to manage form submissions

export const formSlice = createSlice({
  name: "form",
  initialState: {
    submittedData: [],
  },
  reducers: {
    // Reducer function to handle form submission action
    submitForm: (state, action) => {
      state.submittedData.push(action.payload);
    },
  },
});

export const { submitForm } = formSlice.actions;
export default formSlice.reducer;
