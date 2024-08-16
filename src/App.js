import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Form from "./Form";
import SubmittedData from "./SubmittedData";
import formReducer from "./features/formSlice";
import "./App.css";

// Configure Redux store with formReducer
const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <h1>Redux Form Submission</h1>
      <div className="container">
        <Form />
        <SubmittedData />
      </div>
    </Provider>
  );
}

export default App;
