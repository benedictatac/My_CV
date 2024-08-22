import React from "react";
import Link from "next/link"; // Import Link from next/link

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1>
                My Page!
              </h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {/* Corrected Home link */}
              <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg">
                Home
              </Link>
              <Link href="/AboutMePage" className="text-white hover:bg-white hover:text-black rounded-lg">
                About Me
              </Link>
              <Link href="/MyEducationPage" className="text-white hover:bg-white hover:text-black rounded-lg">
                Education
              </Link>
              <Link href="/MyExperiencesPage" className="text-white hover:bg-white hover:text-black rounded-lg">
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
