import { useState } from "react";

function BecomeDonor() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="donor-section">

      <h2>❤️ Become a Blood Donor</h2>

      <p>
        Your one donation can help save a life.
      </p>

      <button
        className="donor-btn"
        onClick={() => setShowForm(true)}
      >
        Become a Donor
      </button>

      {showForm && (
        <div className="donor-form">

          <h3>Register as a Donor</h3>

          <input
            type="text"
            placeholder="Your Name"
          />

          <select>
            <option>Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>

          <input
            type="text"
            placeholder="City"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <button className="register-btn">
            Register as Donor
          </button>

          <button
            className="close-btn"
            onClick={() => setShowForm(false)}
          >
            Close
          </button>

        </div>
      )}

    </div>
  );
}

export default BecomeDonor;

