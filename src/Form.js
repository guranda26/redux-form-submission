import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitForm } from "./features/formSlice";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    age: "",
    gender: "",
  });

  const dispatch = useDispatch();
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch submitForm action with form data
    dispatch(submitForm(formData));
    // Clear form data after submission
    setFormData({
      name: "",
      city: "",
      age: "",
      gender: "",
    });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update form data state with new input value
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <label>Select Gender</label>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
              required
            />
            Female
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
