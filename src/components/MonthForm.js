import React, { useState } from "react";

const MonthForm = ({ roomIndex, addMonth }) => {
  const [month, setMonth] = useState("");
  const [electricity, setElectricity] = useState("");
  const [water, setWater] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalCost = electricity * 3500 + water * 11000;
    const monthData = { month, electricity, water, totalCost };
    addMonth(roomIndex, monthData);
    setMonth("");
    setElectricity("");
    setWater("");
  };

  return (
    <form onSubmit={handleSubmit} className="month-form">
      <div>
        <label>Tháng:</label>
        <input
          type="text"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Số Điện:</label>
        <input
          type="number"
          value={electricity}
          onChange={(e) => setElectricity(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Số Nước:</label>
        <input
          type="number"
          value={water}
          onChange={(e) => setWater(e.target.value)}
          required
        />
      </div>
      <button type="submit">Thêm Tháng</button>
    </form>
  );
};

export default MonthForm;
