import { Suspense } from "react";
import { Card } from "../../../../../types";
import Image from "next/image";

export default function HotelCard({ city, title, author, rooms, tags, price }: Card) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden text-gray-700 h-full">
      <div className="w-96 h-auto">
        <Image
          src="/imgs/MockImage.png"
          alt="Mock"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{author}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base font-thin">{city}</p>
        <p className="text-gray-700 text-sm md:text-base">{rooms} Quartos</p>
        <p className=" text-xs md:text-sm font-thin">{tags.join("    ")}</p>
        <p className="text-orange-600 text-sm md:text-base">R${price}/night</p>
      </div>
    </div>
  );
}
