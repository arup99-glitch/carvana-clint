import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const OrderTicket = (props) => {
  const { ticket, deleteTicket, updateStatus } = props;
  //   console.log(ticket);
  const {
    _id,
    userName,
    userMail,
    userAddress,
    userPhone,
    userCard,
    isPending,
    pack,
  } = ticket;
  const { name, description, price, image } = pack;
  return (
    <Col sm={12} md={12} lg={4}>
      <div className="rounded-3 border-start border-end border-dark bg-dark border-5">
        <Card className="">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <div className="d-lg-flex ">
              <div className="w-50">
                <Card.Title>Package info:</Card.Title>
                <Card.Subtitle>
                  Name: <span className="">{name}</span>{" "}
                </Card.Subtitle>
                <Card.Text>{description.slice(0, 100)}</Card.Text>
                <Card.Text>
                  Price: <span className="text-danger"> {price}</span>
                </Card.Text>
              </div>
              <div className="w-50">
                {" "}
                <Card.Title>Customer Info:</Card.Title>
                <Card.Subtitle className="">
                  Name: <span className="">{userName}</span>{" "}
                </Card.Subtitle>
                <Card.Text>Email: {userMail}</Card.Text>
                <Card.Text>Address: {userAddress}</Card.Text>
                <Card.Text>
                  Phone: <span className="text-danger"> {userPhone}</span>
                  <br />
                  Card: <span className="text-danger"> {userCard}</span>
                </Card.Text>
              </div>
            </div>
          </Card.Body>
          <Card.Footer className="d-flex">
            <Button
              onClick={() => {
                deleteTicket(_id);
              }}
              className="btn-danger me-5"
            >
              <i className="fas fa-trash"></i>
              Delete Booking
            </Button>
            {isPending ? (
              <Button
                onClick={() => updateStatus(_id)}
                className="btn-warning ms-5"
              >
                <i className="fas fa-paperclip"></i>
                Pending
              </Button>
            ) : (
              <Button className=" btn-success disabled ms-5">
                <i className="fas fa-check"></i> Shipped
              </Button>
            )}
          </Card.Footer>
        </Card>
      </div>
    </Col>
  );
};

export default OrderTicket;
