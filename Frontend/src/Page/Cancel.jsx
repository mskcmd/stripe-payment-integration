// Cancel.jsx
import React from "react";
import { FaTimesCircle } from "react-icons/fa"; // Cancel icon

const Cancel = () => {
  return (
    <div className="cancel-page">
      <FaTimesCircle className="cancel-icon" />
      <h1>Payment Cancelled</h1>
      <p>Your payment was cancelled. You can try again or return to the homepage.</p>
      <button className="go-home-btn" onClick={() => window.location.href = '/'}>
        Go Back to Home
      </button>
    </div>
  );
};

export default Cancel;
