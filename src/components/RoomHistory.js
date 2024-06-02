import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RoomHistory = ({ rooms, updateMonth }) => {
  const { id } = useParams();
  const room = rooms[id];
  const navigate = useNavigate();
  const [localMonths, setLocalMonths] = useState(room ? room.months : []);

  if (!room) {
    return <p>Phòng không tồn tại.</p>;
  }

  const handleEditMonth = (monthIndex) => {
    const updatedElectricity = prompt(
      "Số Điện:",
      localMonths[monthIndex].electricity
    );
    const updatedWater = prompt("Số Nước:", localMonths[monthIndex].water);
    if (updatedElectricity !== null && updatedWater !== null) {
      const updatedMonth = {
        ...localMonths[monthIndex],
        electricity: updatedElectricity,
        water: updatedWater,
        totalCost: updatedElectricity * 3500 + updatedWater * 11000,
      };

      const newLocalMonths = localMonths.map((month, index) =>
        index === monthIndex ? updatedMonth : month
      );

      setLocalMonths(newLocalMonths);
      updateMonth(id, monthIndex, updatedMonth);
    }
  };

  return (
    <div className="room-history">
      <button onClick={() => navigate(`/`)}>Về màn hình chính</button>
      <h2>Lịch Sử Phòng {room.name}</h2>
      <div className="months">
        {localMonths.map((month, index) => (
          <div key={index} className="month-item">
            <p>Tháng: {month.month}</p>
            <p>Số Điện: {month.electricity}</p>
            <p>Số Nước: {month.water}</p>
            <p>Tổng Chi Phí: {month.totalCost} VND</p>
            <button onClick={() => handleEditMonth(index)}>Chỉnh Sửa</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomHistory;
