import React, { useState } from "react";
import SortSvg from "../../Svgs/SortSvg";

function Sort() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative ">
      <button className="flex gap-2 px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
      onClick={()=>setIsOpen(!isOpen)}>
        <p className="mt-1">Sort</p>
        <SortSvg />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg  group-hover:block">
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
            Option 1
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
            Option 2
          </button>
        </div>
      )}
    </div>
  );
}

export default Sort;
