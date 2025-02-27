import React from "react";
import Link from "next/link"; // Import Link from next/link
import "../styles/header.css"

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 right-0 w-full z-50 bg-black-500 dark:bg-gray-1200 shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* I want to add a logo here */}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4" >
              <div>
                <Link href="#home"  >
                  <button  className = "navBarButtons">
                   Home
                  </button>
                </Link>
              </div>
              <div >
              <Link href="#aboutme" >
              <button className = "navBarButtons"> 
                About Me
              </button>
              </Link>
              </div>
             <div >
             <Link href="#myeducation">
             <button className="navBarButtons">
             Education
              </button>
              </Link>
             </div>
             <div>
             <Link href="#myExperience">
             <button  className="navBarButtons">
              Experience
              </button>
              </Link>
             </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
