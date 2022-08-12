import React, { useState } from "react";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
const InputSection = ({ usersData, setUsersData, setIsReload, isReload }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUserData = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const hobbies = event.target.hobbies.value;

    fetch("http://localhost:3005/data", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        phone,
        hobbies,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsReload(!isReload);
      });

    console.log("object", name, email, phone, hobbies);
    event.target.reset();
    setShow(false);
  };
  return (
    <>
      <Row>
        <Col>
          <Button variant="primary" className="w-full col-lg-6">
            Send Data
          </Button>{" "}
        </Col>
        <Col>
          <Button
            variant="info"
            className="w-full col-lg-6"
            onClick={handleShow}
          >
            Add User
          </Button>{" "}
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUserData}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                placeholder="Enter Phone Number"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hobbies</Form.Label>
              <Form.Control
                type="text"
                name="hobbies"
                placeholder="Enter Your Hobbies"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InputSection;
