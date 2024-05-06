"use client";

import { useState } from "react";
import AddressesList from "./AddressesList";
import place from "../../../../_data/place.json";
import { FaBed } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

type Address = {
  name: string;
  state: {
    name: string;
    shortname: string;
  };
};

interface SearchBarProps {
  onSubmit: (location: string, selectedRooms: number) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [formData, setFormData] = useState({
    city: "",
    selectedRooms: 0,
  });

  const [showAddressesList, setShowAddressesList] = useState(false);

  /**
   * Função para lidar com a alteração da localização.
   * Atualiza o estado com a nova cidade selecionada e exibe a lista de endereços.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - O evento de alteração do input.
   */
  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLocation = event.target.value;
    setFormData({ ...formData, city: newLocation });
    setShowAddressesList(true);
  };

  /**
   * Função para lidar com a alteração do número de quartos.
   * Atualiza o estado com o novo valor de quartos selecionados.
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} event - O evento de alteração do select.
   */
  const handleRoomsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value);
    setFormData({ ...formData, selectedRooms: selectedValue });
  };

  /**
   * Função para lidar com o clique em um endereço da lista.
   * Atualiza o estado com a nova cidade selecionada e oculta a lista de endereços.
   *
   * @param {string} newCity - A nova cidade selecionada.
   */
  const handleAddressClick = (newCity: string) => {
    setFormData({ ...formData, city: newCity });
    setShowAddressesList(false);
  };

  /**
   * Filtra os locais com base na entrada do usuário (cidade).
   *
   * @type {Address[]} - A lista de endereços filtrada.
   */
  const locations: Address[] = place.filter(
    ({ name, state }) =>
      name.toLowerCase().includes(formData.city.toLowerCase()) ||
      state.name.toLowerCase().includes(formData.city.toLowerCase()) ||
      state.shortname.toLowerCase().includes(formData.city.toLowerCase())
  );

  return (
    <div className="flex justify-center bg-whitesh md:bg-transparent">
      <form
        className="flex flex-col md:flex-row md:items-center md:bg-white py-4 px-3 md:px-12 rounded-full gap-4 w-screen sm:w-3/5 relative"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData.city, formData.selectedRooms);
        }}
      >
        <div className="md:w-3/4 border border-gray-400 p-4 rounded-2xl mx-3 md:border-0 md:p-0 md:rounded-none md:mx-0 ">
          <label
            htmlFor="localization"
            className="flex items-center gap-1.5 text-dark-100 mb-1"
          >
            <FiMapPin className="text-black" />
            Localização
          </label>
          <input
            type="text"
            id="localization"
            name="localization"
            placeholder="Qual é a Localização?"
            className="flex border-b border-gray-300 focus:outline-none p-1 focus:border-blue-500 w-full text-dark-100 bg-transparent"
            aria-label="Localização"
            value={formData.city}
            onChange={handleLocationChange}
          />
        </div>
        {formData.city && showAddressesList && (
          <AddressesList
            locations={locations}
            onAddressClick={handleAddressClick}
          />
        )}
        <div className=" border border-gray-400 p-4 rounded-2xl mx-3 md:border-0 md:p-0 md:rounded-none md:mx-3">
          <label
            htmlFor="rooms"
            className="flex items-center gap-1.5 text-dark-100 mb-1"
          >
            <FaBed />
            N° de Quartos
          </label>
          <select
            id="rooms"
            name="rooms"
            className="flex text-dark-100 border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full bg-transparent"
            aria-label="Número de Quartos"
            value={formData.selectedRooms.toString()}
            onChange={handleRoomsChange}
          >
            <option value="1">Todos</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white rounded-full px-4 py-2"
        >
          Search
        </button>
      </form>
    </div>
  );
}
