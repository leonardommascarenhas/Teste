"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import HotelList from "./components/Sliders/HotelList";

export default function Home() {
  const [formData, setFormData] = useState({
    city: "",
    selectedRooms: 0,
  });

  const handleFormSubmit = (location: string, rooms: number) => {
    setFormData({ ...formData, city: location, selectedRooms: rooms });
  };

  return (
    <main className="">
      <SearchBar onSubmit={handleFormSubmit} />
      <HotelList
        city={formData.city}
        rooms={formData.selectedRooms}
      />
    </main>
  );
}
