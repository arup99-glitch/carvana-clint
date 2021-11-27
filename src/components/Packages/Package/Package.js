import React from "react";
import { Button, Card, CardGroup, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Package.css';

const Package = (props) => {
  const { _id, name, description, image, price, status } = props.package;
  // console.log(props);
  return (
    <Col sm={12} md={12} lg={4}>
      <CardGroup >
        <Card className="bg-dark  card-Details">
          <Card.Img variant="top" className="w-100 h-50" src={image} />
          <Card.Body className="c-clr" >
            <Card.Title className="fw-bold bg-dark rounded text-white p-2">{name}</Card.Title>
            <Card.Text className="text-white  rounded">{description.slice(0, 100)}</Card.Text>
            <p className="fw-bold  rounded text-danger">Cost: ${price}</p>
          </Card.Body>
          <Card.Footer className="cf-clr">
            {status ? (
              <Link to={`/book/${_id}`}>
                <Button className="cfooter-clr" variant="dark">Book Now</Button>
              </Link>
            ) : (
              <Button disabled variant="dark">
                Not Available Now
              </Button>
            )}
          </Card.Footer>
        </Card>
      </CardGroup>
    </Col>
  );
};

export default Package;
