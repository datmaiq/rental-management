import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import RoomForm from "./components/RoomForm";
import RoomList from "./components/RoomList";
import RoomHistory from "./components/RoomHistory";
import "./App.css";

const App = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const savedRooms = JSON.parse(localStorage.getItem("rooms")) || [];
    setRooms(savedRooms);
  }, []);

  useEffect(() => {
    localStorage.setItem("rooms", JSON.stringify(rooms));
  }, [rooms]);

  const addMonth = (roomIndex, month) => {
    const newRooms = rooms.map((room, index) => {
      if (index === roomIndex) {
        return { ...room, months: [...room.months, month] };
      }
      return room;
    });
    setRooms(newRooms);
  };

  const addRoom = (room) => {
    setRooms([...rooms, room]);
  };

  const deleteRoom = (index) => {
    const newRooms = rooms.filter((_, i) => i !== index);
    setRooms(newRooms);
  };

  const updateRoom = (index, updatedRoom) => {
    const newRooms = rooms.map((room, i) => (i === index ? updatedRoom : room));
    setRooms(newRooms);
  };

  const updateMonth = (roomIndex, monthIndex, updatedMonth) => {
    const newRooms = rooms.map((room, rIndex) => {
      if (rIndex === roomIndex) {
        const updatedMonths = room.months.map((month, mIndex) =>
          mIndex === monthIndex ? updatedMonth : month
        );
        return { ...room, months: updatedMonths };
      }
      return room;
    });
    setRooms(newRooms);
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <h1>Quản Lý Nhà Trọ của Mai Tuyến</h1>
                <RoomForm addRoom={addRoom} />
                <RoomList
                  rooms={rooms}
                  deleteRoom={deleteRoom}
                  updateRoom={updateRoom}
                  addMonth={addMonth}
                />
              </>
            }
          />
          <Route
            path="/room-history/:id"
            element={<RoomHistory rooms={rooms} updateMonth={updateMonth} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
