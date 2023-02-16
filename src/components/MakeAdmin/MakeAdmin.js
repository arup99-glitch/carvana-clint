import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelSubmit = (e) => {
    const user = { email };
    fetch("https://carnava-server-production.up.railway.app/make/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("admin created");
          document.getElementById("mail").value = "";
        } else {
          alert("admin not created");
          document.getElementById("mail").value = "";
        }
      });
    e.preventDefault();
  };
  return (
    <Form className="my-4 bg-secondary" onSubmit={handelSubmit}>
      <h3 className="text-center bg-dark opacity-75 rounded p-1 text-warning fw-bold">Make Admin</h3>
      <Form.Group
        className="mb-3 p-3 w-25 mx-auto"
        controlId="formBasicEmail"
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onBlur={handelEmail}
          type="email"
          id="mail"
          placeholder="Enter email"
        />
        <Form.Text className="text-warning">
          Remember this will make an admin for your site. are you sure?
        </Form.Text>
        <br />
        <Button type="submit" className="btn-success fw-bold text-dark my-3">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default MakeAdmin;
