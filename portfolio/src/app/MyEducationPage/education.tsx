import React from "react";
import "../styles/education.css";

export default function Education() {
  return (
    <div className="flex-grow min-h-screen items-center justify-center">
      <div className="beginning">
        <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight bg-gradient-to-r from-[#0e1c26] to-[#bbcace] text-transparent bg-clip-text md:text-5xl lg:text-6xl dark:from-[#020303] dark:to-[#3295b1] p-4 relative">
          <span className="relative z-10 bg-gradient-to-r from-[#0e1c26] to-[#21b8e2] bg-clip-text text-transparent animate-pulse">Education</span>
        </h1>
      </div>
      <div className="education"></div>
    </div>
  );
}
