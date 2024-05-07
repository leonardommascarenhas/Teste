import { useState } from "react";
import { useEffect } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import HotelCard from "./Cards/HotelCard";
import flats from "../../../../_data/flats.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

type HotelListProps = {
  city: string;
  rooms: number;
};

const HotelList = ({ city, rooms }: HotelListProps) => {
  const [suggestion, setSuggestion] = useState<string | null>(null);

  const filteredCards = flats.filter(
    (flat) => flat.City.toLowerCase().includes(city.toLowerCase()) && flat.Rooms >= rooms
  );

  useEffect(() => {
    if (filteredCards.length > 0 && filteredCards[0].City.toLowerCase() !== city.toLowerCase() && city) {
      setSuggestion(filteredCards[0].City);
    } else {
      setSuggestion(null);
    }
  }, [city, filteredCards]);

  return (
    <div className="p-12 md:p-24">
      {suggestion && (
        <p className="mb-4">
          Mostrando resultados de: <span className="text-blue-400 underline underline-offset-2 mb-4">{suggestion}</span>{" "}
        </p>
      )}
      <div className="flex justify-between items-center">
        <h3 className="text-lg md:text-xl lg:text-2xl">
          Novos Anúncios em <span className="text-orange-500">{suggestion ? suggestion : city}</span>
        </h3>
        <div className="flex gap-2 mt-1">
          <button className="custom-prev">
            <IoIosArrowDropleft size={24} />
          </button>
          <button className="custom-next">
            <IoIosArrowDropright size={24} />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
          1360: { slidesPerView: 4, spaceBetween: 50 },
          1440: { slidesPerView: 5, spaceBetween: 50 },
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
      >
        {filteredCards.map((card, index) => (
          <SwiperSlide
            key={index}
            style={{ height: "auto" }}
            className="pt-4"
          >
            <HotelCard
              city={card.City}
              title={card.Title}
              author={card.Author}
              rooms={card.Rooms}
              tags={card.Tags}
              price={card.Price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotelList;
