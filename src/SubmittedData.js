import React from "react";
import { useSelector } from "react-redux";

const SubmittedData = () => {
  // Select submitted data from the Redux store

  const submittedData = useSelector((state) => state.form.submittedData);

  return (
    <div className="form-data">
      <h2>Submitted Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.city}</td>
              <td>{data.age}</td>
              <td>{data.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmittedData;
