import React from "react";
import Navbar from "./navbar"; // Import the Navbar

const Header: React.FC = () => {
  return (
    <> {/* Fragment to wrap the header */} 
      <header className="bg-transparent text-white py-8 ">
        {/* Same logic for margin and padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Navbar /> {/* Navbar is part of the header */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
