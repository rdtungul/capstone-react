import React, { useState } from "react";

export default function BookingForm() {
  // available times array
  const [availableTimes, setAvailableTimes] = useState([
    "",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);

  //   adding a form state for inputting data
  const [formInput, setFormInput] = useState({
    resDate: "",
    resTime: "",
    resGuest: "",
    occasion: "",
    errors: {
      resDate: "",
      resTime: "",
      resGuest: "",
      occasion: "",
    },
  });

  // adding change event function for the inputted value for entering inputs
  function handleChange(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }

  // adding function blur for the input field selection
  function handleBlur(e) {
    const { name, value } = e.target;
    const errors = formInput.errors;

    if (name === "resDate") {
      errors.resDate = value ? "" : "Booking Date is required";
    }
    if (name === "resTime") {
      errors.resTime = value ? "" : "Booking Time is required";
    }
    if (name === "resGuest") {
      errors.resGuest = value ? "" : "Number of Guest(s) is required";
    }
    setFormInput({
      ...formInput,
      errors,
    });
  }

  // function to clear all the fields
  function clearForm() {
    setFormInput({
      resDate: "",
      resTime: "",
      resGuest: "",
      occasion: "",
      errors: {
        resDate: "",
        resTime: "",
        resGuest: "",
        occasion: "",
      },
    });
  }

  // function for the submit handler
  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formInput.resDate ||
      !formInput.resTime ||
      !formInput.resGuest ||
      !formInput.occasion
    ) {
      alert("Please fill in the required fields");
    } else {
      // Do something with the form data here
      console.log(formInput);
      clearForm();
    }
  }

  return (
    <div className="BookingForm">
      <form onSubmit={handleSubmit}>
        Choose Date
        <label htmlFor="res-date"></label>
        <br />
        <input
          type="date"
          className="BookingForm--inputs BookingForm--text"
          id="res-date"
          name="resDate"
          value={formInput.resDate}
          onChange={handleChange}
          onBlur={handleBlur}
          min={new Date().toISOString().substring(0, 10)}
        />
        {formInput.errors.resDate && (
          <p className="booking-form--error">{formInput.errors.resDate}</p>
        )}
        <br />
        <br />
        <label htmlFor="res-time">Choose time</label>
        <br />
        <select
          id="res-time"
          onChange={handleChange}
          value={formInput.resTime}
          onBlur={handleBlur}
          name="resTime"
          className="BookingForm--inputs BookingForm--text"
        >
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        {formInput.errors.resTime && (
          <p className="booking-form--error">{formInput.errors.resTime}</p>
        )}
        <br />
        <br />
        <label htmlFor="guests">Number of guests</label>
        <br />
        <input
          type="number"
          className="BookingForm--inputs BookingForm--text"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="resGuest"
          value={formInput.resGuest}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {formInput.errors.resGuest && (
          <p className="booking-form--error">{formInput.errors.resGuest}</p>
        )}
        <br />
        <br />
        <label htmlFor="occasion">Occasion</label>
        <br />
        <input
          type="radio"
          id="birthday"
          name="occasion"
          className="BookingForm--inputs BookingForm--radio"
          value="birthday"
          checked={formInput.occasion === "birthday"}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="birthday"> Birthday</label> &nbsp;
        <input
          type="radio"
          id="anniversary"
          name="occasion"
          className="BookingForm--inputs BookingForm--radio"
          value="anniversary"
          checked={formInput.occasion === "anniversary"}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="anniversary"> Anniversary</label>
        {formInput.errors.occasion && <div>{formInput.errors.occasion}</div>}
        <br />
        <br />
        <input
          type="submit"
          value="Make Your reservation"
          className="form--submit"
        />
      </form>
    </div>
  );
}
