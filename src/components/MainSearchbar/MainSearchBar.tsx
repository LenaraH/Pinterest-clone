import { IconSearch, IconX } from "@tabler/icons-react";
import { useState } from "react";

export function MainSearchBar() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  const handleReset = () => {
    setIsActive(false);
    setSearchText("");
  };
  return (
    <>
      {!isActive && searchText == "" && (
        <button
          className="flex gap-1 bg-slate-100 w-full p-3 rounded-xl cursor-text hover:bg-slate-200"
          onClick={() => setIsActive(true)}
        >
          <IconSearch />
          <div className="text-slate-400 select-none">Search</div>
        </button>
      )}
      {(isActive || searchText) && (
        <div className="flex gap-1 bg-slate-100 w-full rounded-xl cursor-text hover:bg-slate-200 pl-2">
          <input
            autoFocus
            placeholder="Search"
            className="bg-transparent focus:outline-none w-full"
            value={searchText}
            onChange={(ev) => {
              setSearchText(ev.currentTarget.value);
            }}
          />
          <button
            className="rounded-full p-1 w-12 h-12 flex justify-center items-center hover:bg-slate-400"
            onClick={handleReset}
          >
            <div className="rounded-full bg-black text-white p-1">
              <IconX size={16} />
            </div>
          </button>
        </div>
      )}
    </>
  );
}
