import React from "react";
import './Review.css'

import { Card, CardGroup, Col } from "react-bootstrap";
import Rating from "react-rating";

const Review = ({ review }) => {
  const { user, description, rating } = review;
  return (
    <div>
      <Col >
        <CardGroup>
          <Card>
            <Card.Body className="cr-clr text-white">
              <Card.Title>{user}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Rating className="text-warning border"
                readonly
                initialRating={rating}
                emptySymbol="far fa-star icon"
                fullSymbol="fas fa-star icon"
              ></Rating>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Col>
    </div>
  );
};

export default Review;
