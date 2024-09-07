// Success.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Success icon

const Success = () => {
  return (
    <div className="success-page">
      <FaCheckCircle className="success-icon" />
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase. Your transaction was successful.</p>
      <button className="go-home-btn" onClick={() => window.location.href = '/'}>
        Go Back to Home
      </button>
    </div>
  );
};

export default Success;
