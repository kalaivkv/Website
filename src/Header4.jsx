import React, { useState } from "react";
import Header3 from "./Header3";
import Header4 from "./Header4";
import { FaBars, FaTimes } from "react-icons/fa"; 

const HeaderContainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header3 />

      <div className="hidden md:block">
        <Header4 />
      </div>

      <div className="md:hidden flex justify-between items-center p-3 bg-white shadow-md">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />} 
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-100 py-3 shadow-md transition-all duration-300">
          <ul className="flex flex-col text-center">
            {["Home", "Categories", "Products", "Blog", "Pages", "Offers"].map(
              (item, index) => (
                <li
                  key={index}
                  className="py-2 px-4 text-gray-800 hover:bg-green-500 hover:text-white transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default HeaderContainer;
