import React from "react";
import Link from "next/link"; // Import Link from next/link

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 right-0 w-full z-50 bg-black-500 dark:bg-gray-1200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Optional logo or brand name */}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4" >
              <div className="HomeButton">
              <button>
                <Link href="#home" className="text-gray-500 dark:text-gray-400 hover:bg-transparent hover:text-white rounded-lg" >
                    <span style={{ color: "white", fontWeight: "bold" }}>Home</span>
                </Link>
              </button>
              </div>
              <div className="AboutButton">
              <button>
              <Link href="#aboutme"  className="text-gray-500 dark:text-gray-400 hover:bg-transparent hover:text-white rounded-lg">
                <span style = {{color : "white", fontWeight:"bold"}}>About Me</span>
              </Link>
              </button>
              </div>
             <div className="EducationButton">
             <button>
              <Link href="#myeducation" className="text-gray-500 dark:text-gray-400 hover:bg-transparent hover:text-white rounded-lg">
              <span style = {{color : "white", fontWeight:"bold"}}>Education</span>
              </Link>
              </button>
             </div>
             <div className="ExperienceButton">
             <button>
              <Link href="#myExperience" className="text-gray-500 dark:text-gray-400 hover:bg-transparent hover:text-white rounded-lg">
              <span style = {{color : "white", fontWeight:"bold"}}>Experience</span>
              </Link>
              </button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
