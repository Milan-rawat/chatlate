import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import "./MessageForm.css";

function MessageForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="messages-output"></div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={11}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Your message"
                // disabled={!user}
                // value={message}
                // onChange={(e) => setMessage(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={1}>
            <Button
              variant="primary"
              type="submit"
              style={{ width: "100%", backgroundColor: "orange" }}
              //   disabled={!user}
            >
              <i className="fas fa-paper-plane"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default MessageForm;