import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-white py-4">   {/*We wanna blend in the footer to the background color so make it transparent*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Phone: (514)-690-7641</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Email: atanacocharles@yahoo.ca/atanaciocharles31@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
