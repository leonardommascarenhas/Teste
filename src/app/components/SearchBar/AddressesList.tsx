import { useState, useEffect } from "react";
import { FiMapPin } from "react-icons/fi";

type Address = {
  name: string;
  state: {
    name: string;
    shortname: string;
  };
};

type AddressesListProps = {
  locations: Address[];
  onAddressClick: (city: string) => void;
};

export default function AddressesList({ locations, onAddressClick }: AddressesListProps) {
  const [filteredAddresses, setFilteredAddresses] = useState(locations);

  useEffect(() => {
    setFilteredAddresses(locations);
  }, [locations]);

  return (
    <ul className="bg-white md:absolute md:top-full z-10 mx-3 rounded-2xl text-gray-700 shadow-md">
      {filteredAddresses.map(({ name, state }) => (
        <li
          key={name}
          className="hover:bg-gray-100 p-3 flex items-center border-b border-gray-200"
          onClick={() => onAddressClick(name)}
        >
          <FiMapPin className="mr-2" />
          <div>
            <h3 className="font-semibold">Av. Mock de Farias de {name}</h3>
            <p className="text-sm text-gray-600">
              {name} - {state.shortname}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
