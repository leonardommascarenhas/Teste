"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import HotelList from "./components/Sliders/HotelList";
import Image from "next/image";
export default function Home() {
  const [formData, setFormData] = useState({
    city: "Fortaleza",
    selectedRooms: 0,
  });

  const handleFormSubmit = (location: string, rooms: number) => {
    setFormData({ ...formData, city: location, selectedRooms: rooms });
  };

  return (
    <main>
      <section
        id="sejaquem"
        className="min-h-[320px] md:h-[560px] relative md:bg-bannerInicio bg-cover bg-center"
      >
        <div className="relative">
          <Image
            src="/imgs/bannerInicioMobile.png"
            alt="Banner"
            width={0}
            height={0}
            sizes="100vw"
            quality={100}
            style={{ width: "100%", height: "auto" }}
            className="md:hidden"
          />
          <h1 className="absolute top-1/2 left-12 transform -translate-y-1/2 md:transform-none text-bold text-white text-2xl md:text-5xl md:static text-left md:text-center md:py-8 ">
            Vende. <br className="md:hidden" /> Aluga. <br className="md:hidden" /> Conecta
          </h1>
        </div>
        <SearchBar onSubmit={handleFormSubmit} />
      </section>
      <HotelList
        city={formData.city}
        rooms={formData.selectedRooms}
      />
    </main>
  );
}
