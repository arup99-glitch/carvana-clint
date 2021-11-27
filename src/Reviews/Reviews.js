import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Review from "./Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://nameless-badlands-69800.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  // console.log(reviews);
  return (
    <div className="text-center my-5">
      {isLoading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <Container className="mt-4text-center w-75">
          <h2 className="text-white bg-dark my-5 rounded py-3">
            Customer Reviews
          </h2>

          <Row xs={1} md={3} className="g-4 mb-5">
            {reviews.map((pkg) => (
              <Review key={pkg._id} review={pkg}></Review>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Reviews;
