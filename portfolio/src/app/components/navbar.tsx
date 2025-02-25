import React from "react";
import Link from "next/link"; // Import Link from next/link

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 right-0 w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <button>
                <Link href="#home" className="text-gray-500 dark:text-gray-400 hover:bg-transparent hover:text-white rounded-lg">
                  Home
                </Link>
              </button>
              <button>
              <Link href="#aboutme"  className="text-gray-500 dark:text-gray-400 hover:bg-transparent hover:text-white rounded-lg">
                About Me
              </Link>
              </button>
              <button>
              <Link href="#myeducation" className="text-gray-500 dark:text-gray-400 hover:bg-transparent hover:text-white rounded-lg">
                Education
              </Link>
              </button>
              <button>
              <Link href="#myExperience" className="text-gray-500 dark:text-gray-400 hover:bg-transparent hover:text-white rounded-lg">
                Experience
              </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
