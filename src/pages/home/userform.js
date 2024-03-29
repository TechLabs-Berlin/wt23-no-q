import "./userform.css";
import { useState, useEffect, useRef } from "react";
// import validation from './validation';
import { nanoid } from "nanoid";
import { useUser } from "../../useData";
import validation from "./validation";
import { useNavigate } from "react-router-dom";
import React from "react";

const UserForm = () => {
  const addUser = useUser((state) => state.addUser);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    number: "",
    gender: "",
    drink: "",
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationResult = validation(values);
    setErrors(validationResult);

    if (Object.keys(validationResult).length === 0) {
      let user = {
        id: nanoid(),
        name: values.name,
        gender: values.gender,
        number: values.number,
        drink: values.drink,
      };
      addUser(user);

      let path = `/drinks`;
      navigate(path);
    }
  };

  return (
    <div className="create">
      <h1 className="form-input">User Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="name">Name:</label>
          <input type="text" placeholder="What's your name?" value={values.name} id="name" onChange={handleChange} name="name" />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="drink">
          <label htmlFor="gender">What is your gender?</label>
          <select className="gender" value={values.gender} onChange={handleChange} name="gender">
            <option value="">--Please select an option</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>
        <div className="number">
          <label htmlFor="party">Number of people:</label>
          <input type="number" min="1" max="30" id="party" placeholder="How many are you?" value={values.number} onChange={handleChange} name="number" />
          {errors.number && <p className="error">{errors.number}</p>}
        </div>
        <div className="drink">
          <label htmlFor="drink">Favorite drink</label>
          <select value={values.drink} onChange={handleChange} name="drink">
            <option value="">--Please select an option</option>
            <option value="whiskey">Whiskey</option>
            <option value="gin">Gin</option>
            <option value="vodka">Vodka</option>
            <option value="rum">Rum</option>
            <option value="beer">Beer</option>
            <option value="water">Water</option>
          </select>
          {errors.drink && <p className="error">{errors.drink}</p>}
        </div>
        {/* to redirect to the new page of the user */}

        <button onSubmit={handleChange} onClick={handleSubmit}>
          Get in Q!
        </button>
        {/* we have to put in the button to call the function Queue.js */}
      </form>
    </div>
  );
};

export default UserForm;
