import React, { useState } from "react";

const RoomForm = ({ addRoom }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const room = { name, months: [] };
    addRoom(room);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="room-form">
      <div>
        <label>Tên Phòng:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button className="add-room" type="submit">
        Thêm Phòng
      </button>
    </form>
  );
};

export default RoomForm;
