import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function Sidebar() {
  const rooms = ["first room", "second room", "third room"];
  const user = useSelector((state) => state.user);
  if (!user) {
    return <></>;
  }
  return (
    <>
      <h2>Available rooms</h2>
      <ListGroup>
        {rooms.map((room, idx) => (
          <ListGroup.Item key={idx}>{room}</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Members</h2>
    </>
  );
}

export default Sidebar;
