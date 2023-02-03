import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    errors: {
      fullName: "",
      gender: "",
    },
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const errors = formData.errors;

    if (name === "fullName") {
      errors.fullName = value ? "" : "Full Name is required";
    } else if (name === "gender") {
      errors.gender = value ? "" : "Gender is required";
    }

    setFormData({ ...formData, errors });
  };

  const clearForm = () => {
    setFormData({
      fullName: "",
      gender: "",
      errors: {
        fullName: "",
        gender: "",
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.fullName || !formData.gender) {
      alert("Please fill in the required fields");
    } else {
      // Do something with the form data here
      console.log(formData);
      clearForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        {formData.errors.fullName && <div>{formData.errors.fullName}</div>}
      </div>
      <div>
        <label htmlFor="genderMale">Male:</label>
        <input
          type="radio"
          id="genderMale"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        <label htmlFor="genderFemale">Female:</label>
        <input
          type="radio"
          id="genderFemale"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        {formData.errors.gender && <div>{formData.errors.gender}</div>}
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;

//   //   const ErrorMessage = () => {
//   //     if (getDate === "") {
//   //       console.log("Please fill-up all the fields.");
//   //     } else {
//   //       console.log("Booking approved!");
//   //     }
//   //   };

//   // handle change event to get the selected date value
//   function handleChange(e) {
//     setGetDate(e.target.value);
//     setGetNOG(e.target.value);
//     setErrorMessage("");
//   }

//   // clearing the form after hitting submit button
//   const clearForm = () => {
//     // Implement this function
//     setGetDate("");
//     setGetNOG("");
//     setErrorMessage("");
//   };

//   //   submit handler for the inputted data
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!getDate) {
//       setErrorMessage("Please select a date.");
//       console.log("Please select a date.");
//     } else if (!getNOG) {
//       setErrorMessage("Please enter number of guest(s).");
//       console.log("Please select a date.");
//     } else {
//       // submit the form
//       clearForm();
//       console.log(getDate);
//       console.log(getNOG);
//     }
//   };
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(getDate);
//     ErrorMessage();
//     clearForm();
//   }

//   <form onSubmit={handleSubmit}>
//     <fieldset>
//       <div className="Field">
//         <label htmlFor="date">Choose Date: </label>
//         <br />
//         {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//         <input
//           type="date"
//           id="date"
//           name="date"
//           value={getDate}
//           onChange={handleChange}
//           min={new Date().toISOString().substring(0, 10)}
//           className="BookingForm--inputs BookingForm--text"
//         />
//         <br />
//         <label htmlFor="time">Pick a Time: </label>
//         <br />
//         <input
//           type="text"
//           id="time"
//           name="time"
//           className="BookingForm--inputs BookingForm--text"
//         />
//         <br />
//         <label htmlFor="number_of_guests">Number of Guests: </label>
//         <br />
//         <input
//           type="number"
//           id="number_of_guests"
//           name="number_of_guests"
//           className="BookingForm--inputs BookingForm--text"
//           min={1}
//         />
//         <br />
//         <label htmlFor="occasion">Occasion: </label>
//         <br />
//         <label htmlFor="birthday">
//           <input
//             type="radio"
//             id="birthday"
//             name="occasion"
//             className="BookingForm--inputs BookingForm--radio"
//             value="birthday"
//           />{" "}
//           Birthday
//         </label>{" "}
//         &nbsp;
//         <label htmlFor="anniversary">
//           <input
//             type="radio"
//             id="anniversary"
//             name="occasion"
//             className="BookingForm--inputs BookingForm--radio"
//             value="anniversary"
//           />{" "}
//           Anniversary
//         </label>
//         <br />
//         <button type="submit" className="form--submit">
//           Submit
//         </button>
//       </div>
//     </fieldset>
//   </form>
