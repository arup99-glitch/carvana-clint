import React from "react";
import { Link } from "react-router-dom";
import "./no.css"
/*  page not found!!! */
const PageNotFound = () => {
  return (
    <div className="container rounded mt-1">
            <img className="img-fluid" src="http://sleeknote.com/wp-content/uploads/2020/04/E-Commerce-404-Page-Facebook.jpg" alt="" />

            <Link to="/">
              <button className="bg-danger rounded m-1 fw-bold">Home</button>
            </Link>
            
        </div>
  );
};

export default PageNotFound;
