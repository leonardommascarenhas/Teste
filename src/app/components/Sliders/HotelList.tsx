import { useState } from "react";
import { useEffect } from "react";

import HotelCard from "./Cards/HotelCard";
import flats from "../../../../_data/flats.json";
import { Swiper, SwiperSlide } from "swiper/react";
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
    if (filteredCards.length > 0 && filteredCards[0].City.toLowerCase() !== city.toLowerCase()) {
      setSuggestion(filteredCards[0].City);
    } else {
      setSuggestion(null);
    }
  }, [city, filteredCards]);

  return (
    <div>
      {suggestion && (
        <p>
          Você quis dizer <span className="text-blue-200 underline underline-offset-2">{suggestion}</span> ?
        </p>
      )}
      <h3>
        Novos Anúncios em <span className="text-orange-500">{suggestion ? suggestion : city}</span>
      </h3>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 30 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 50 },
        }}
      >
        {filteredCards.map((card, index) => (
          <SwiperSlide style={{ height: "auto" }}>
            <HotelCard
              key={index}
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
