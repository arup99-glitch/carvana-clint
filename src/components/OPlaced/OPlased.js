import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const OPlased = () => {
  return (
    <div className="text-center">
    <h2 className="bg-dark rounded text-white p-1 m-1">Your Order Has Been Placed</h2>
      <img className="img-fluid rounded" src="https://thumbs.dreamstime.com/b/order-status-vector-concept-metaphors-mobile-shopping-app-modern-online-technology-internet-customer-service-icons-set-placed-182669424.jpg" alt="" /> <br />
      <Link to="/home"><Button className="btn-success my-lg-4 m-2 text-cente fw-bold btn-clr">Home</Button></Link>
    </div>
  );
};

export default OPlased;
