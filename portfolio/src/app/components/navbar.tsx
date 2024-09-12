import React from "react";
import Link from "next/link"; // Import Link from next/link

const Navbar: React.FC = () => {
  return (
    <nav > 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {/* Corrected Home link */}
              <Link href="/" className="text-gray-500 dark:text-gray-400 hover:bg-transparent hover:text-white rounded-lg">
                Home
              </Link>
              <Link href="/AboutMePage" className="text-gray-500 dark:text-gray-400 hover:bg-transparent hover:text-white rounded-lg">
                About Me
              </Link>
              <Link href="/MyEducationPage" className="text-gray-500 dark:text-gray-400 hover:bg-transparent hover:text-white rounded-lg">
                Education
              </Link>
              <Link href="/MyExperiencesPage" className="text-gray-500 dark:text-gray-400 hover:bg-transparent hover:text-white rounded-lg">
                Experience
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
