import React from "react";
import { useNavigate } from "react-router-dom";
import MonthForm from "./MonthForm";

const RoomList = ({ rooms, deleteRoom, updateRoom, addMonth }) => {
  const navigate = useNavigate();

  const handleViewDetail = (index) => {
    navigate(`/room-history/${index}`); // Navigate to RoomHistory with room index
  };

  const handleEdit = (room, index) => {
    const updatedName = prompt("Tên Phòng:", room.name);
    if (updatedName !== null) {
      const updatedRoom = { ...room, name: updatedName };
      updateRoom(index, updatedRoom);
    }
  };

  return (
    <div className="room-list">
      <h2>Lịch Sử Các Phòng</h2>
      {rooms.length === 0 ? (
        <p>Chưa có phòng nào được thêm.</p>
      ) : (
        <ul>
          {rooms.map((room, index) => (
            <li key={index} className="room-item">
              <p>Tên Phòng: {room.name}</p>
              <button onClick={() => deleteRoom(index)}>Xóa</button>
              <button onClick={() => handleEdit(room, index)}>Chỉnh Sửa</button>
              <button onClick={() => handleViewDetail(index)}>
                Xem Chi Tiết Từng Tháng
              </button>{" "}
              {/* Trigger handleViewDetail */}
              <MonthForm roomIndex={index} addMonth={addMonth} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RoomList;
