import React, { useState } from "react";
import Header3 from "./Header3";
import Header4 from "./Header4";

const HeaderContainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header3 toggleMenu={() => setMenuOpen(!menuOpen)} />
      <div className="hidden md:block">
        <Header4 isOpen={true} toggleMenu={() => {}} />
      </div>
      <div className="md:hidden">
        <Header4 isOpen={menuOpen} toggleMenu={() => setMenuOpen(false)} />
      </div>
    </>
  );
};

export default HeaderContainer;
