// import { IconChevronCompactDown } from "@tabler/icons-react";

import { IconChevronDown } from "@tabler/icons-react";
import { MainSearchBar } from "../MainSearchbar/MainSearchBar";

export function NavBar() {
  return (
    <div className="flex flex-row ml-0.5 space-x-3 bg-white p-4 sticky top-0 z-10 shadow select-none items-center">
      <MainSearchBar />
      <button className="hover:bg-slate-300 p-2 rounded-xl">
        <img
          className="rounded-full w-8 h-8"
          src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"
        />
      </button>
      <button className="hover:bg-slate-300 rounded-full w-8 h-8 flex justify-center items-center">
        <IconChevronDown />
      </button>
      {/* <input
        type="search"
        placeholder="Search"
        className="pl-px grow rounded-2xl-ful whitespace-nowrap border rounded-md bg-red-400"
      /> */}
      {/* <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
      >
        Profile logo
      </a>

      <a href="#" className="border-none" /> */}
    </div>
  );
}
