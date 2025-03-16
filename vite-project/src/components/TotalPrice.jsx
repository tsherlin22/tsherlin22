import React from "react";
import { Alert } from "react-bootstrap";

const TotalPrice = ({ totalPrice }) => {
  if (totalPrice === 0) return null;

  return (
    <Alert variant="info" className="text-end">
      <h2>Total price: ${totalPrice}</h2>
    </Alert>
  );
};

export default TotalPrice;