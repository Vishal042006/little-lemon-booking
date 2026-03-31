import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    guests: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.guests || formData.guests < 1)
      newErrors.guests = "Guests must be at least 1";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container">
      <h1>🍋 Little Lemon Booking</h1>

      <form onSubmit={handleSubmit} aria-label="Booking Form">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: e.target.value })
          }
        />
        {errors.date && <p className="error">{errors.date}</p>}

        <label htmlFor="guests">Guests:</label>
        <input
          id="guests"
          type="number"
          value={formData.guests}
          onChange={(e) =>
            setFormData({ ...formData, guests: e.target.value })
          }
        />
        {errors.guests && <p className="error">{errors.guests}</p>}

        <button type="submit">Book Table</button>
      </form>

      {submitted && <h2>✅ Booking Successful!</h2>}
    </div>
  );
}

export default App;