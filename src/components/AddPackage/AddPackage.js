import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import './AddPackage.css'

const AddPackage = () => {
  const history = useHistory();
  const nameRef = useRef();
  const detailsRef = useRef();
  const priceRef = useRef();
  const fileRef = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();
    const image = fileRef.current.value;
    const description = detailsRef.current.value;
    const price = priceRef.current.value;
    const name = nameRef.current.value;
    const item = {
      name,
      description,
      image,
      price,
      status: true,
    };

    fetch("https://carnava-server-production.up.railway.app/addPackage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    }).then(() => {
      history.push("/home#packages");
    });
  };
  return (
    <Container className="form text-start p-5 my-4  ">
      <h3 className="text-white rounded bg-dark fw-bold p-1 opacity-75 text-center">Add New Package</h3>
      <Form onSubmit={handelSubmit} className=" mx-auto">
        <Form.Group className="mb-3 text-white rounded bg-dark" controlId="formGroupName">
          <Form.Label>Package Name:</Form.Label>
          <Form.Control
            ref={nameRef}
            required
            type="text"
            placeholder="Enter Package Name"
          />
        </Form.Group>
        <Form.Group className="mb-3 text-white rounded bg-dark" controlId="formGroupDetails">
          <Form.Label>Package Details:</Form.Label>
          <Form.Control
            type="text"
            ref={detailsRef}
            required
            placeholder="Enter Details"
          />
        </Form.Group>
        <Form.Group className="mb-3 text-white rounded bg-dark" controlId="formGroupprice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            ref={priceRef}
            type="number"
            required
            placeholder="Enter Price"
          />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3 text-white rounded bg-dark">
          <Form.Label>Image Url:</Form.Label>
          <Form.Control ref={fileRef} required type="text" size="sm" />
        </Form.Group>
        <Button className="fw-bold add-btn-color " type="submit" variant="dark">
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default AddPackage;
