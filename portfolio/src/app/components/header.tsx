import React from "react";
import Navbar from "./navbar"; // Import the Navbar

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <header className="bg-transparent"> {/* same logic from footer applies here for bg-color */}
      {/* You can add additional header content here if needed */}
      <Navbar /> {/* Navbar is part of the header */}
      </header>
    </React.Fragment>
    
  );
};

export default Header;
