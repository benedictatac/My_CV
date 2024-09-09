import React from "react";
import Navbar from "./navbar"; // Import the Navbar

const Header: React.FC = () => {
  return (
    <React.Fragment>
      {/* You can add additional header content here if needed */}
      <Navbar /> {/* Navbar is part of the header */}
    </React.Fragment>
  );
};

export default Header;
