import React from "react";
import "./Home.css";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Home() {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div>
          <h1>Share the world with your friends</h1>
          <p>Chatlate app connects you with thr world</p>
          <LinkContainer to="/chat">
            <Button variant="success">
              get Started
              <i className="fas fa-comments home-message-icon" />
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home__bg"></Col>
    </Row>
  );
}

export default Home;
