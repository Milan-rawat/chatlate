import React, { useContext, useEffect } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AppContext } from "../context/appContext";

function Sidebar() {
  const user = useSelector((state) => state.user);
  const {
    socket,
    setMembers,
    members,
    setCurrentRoom,
    setRooms,
    privateMemberMsg,
    rooms,
    setPrivateMemberMsg,
    currentRoom,
  } = useContext(AppContext);

  useEffect(() => {
    if (user) {
      setCurrentRoom("general");
      getRooms();
      socket.emit("join-room", "general");
      socket.emit("new-user");
    }
  }, []);

  socket.off("new-user").on("new-user", (payload) => {
    setMembers(payload);
  });

  const joinRoom = (room, isPublic = true) => {
    if (!user) return alert("Please Login!");

    socket.emit("join-room", room);
    setCurrentRoom(room);
    if (isPublic) setPrivateMemberMsg(null);
  };

  const getRooms = async () => {
    fetch("http://localhost:8000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  };
  if (!user) {
    return <></>;
  }
  return (
    <>
      <h2>Available rooms</h2>
      <ListGroup>
        {rooms.map((room, idx) => (
          <ListGroup.Item
            key={idx}
            onClick={() => joinRoom(room)}
            active={room == currentRoom}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {room} {currentRoom !== room && <span></span>}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Members</h2>
      <ListGroup>
        {members.map((member) => (
          <ListGroup.Item key={member.id} style={{ cursor: "pointer" }}>
            {member.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default Sidebar;
