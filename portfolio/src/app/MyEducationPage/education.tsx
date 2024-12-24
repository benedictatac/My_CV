import React from "react";
import "../styles/education.css";
import HoverReveal from "../components/hoverReveal";

export default function Education() {
  return (
    <div className="flex-grow min-h-screen items-center justify-center">
      <div className="beginning">
        <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight bg-gradient-to-r from-[#0e1c26] to-[#bbcace] text-transparent bg-clip-text md:text-5xl lg:text-6xl dark:from-[#020303] dark:to-[#3295b1] p-4 relative">
          <span className="relative z-10 bg-gradient-to-r from-[#0e1c26] to-[#21b8e2] bg-clip-text text-transparent animate-pulse">Education</span>
        </h1>
      </div>
      <div className="education">
      <div className="primary flex justify-center items-center"><HoverReveal
      title = "Primary "
      content = {`From Grade 1-4, I was studying in a Private Catholic School in the Philippines 
      before moving to Canada and finishing my 5th-6th grades in Fernand Seguin, in the South Shore of Montreal.`}/></div>
      <div className="secondary flex justify-center items-center"><HoverReveal
      title = "Highschool"
      content = {<>For Highschool, I did the first 3 years of my highschool in Fernand Seguin and moved to La Magdeleine, <br /> in order to finish
                  the last 2 years. During that time, I was able to make connections as a growing teen and was able to participate in multiple 
                  events such as participation in weightlifting competitions as well as having been introduced to boxing, art and philosophy.\
                  After graduating, I decided to embark on a 1 year journey to obtain pre-requisites for advanced Math and Sciences,
                  on the off chance that I decide to continue in the field of sciences (which I did, in the end).
      </>}/></div>
      <div className="cegep flex justify-center items-center "><HoverReveal
      title = "Cegep"
      content = "This is whats inside"/></div>
      <div className="university flex justify-center items-center"><HoverReveal
      title = "University"
      content = "This is whats inside"/></div>
      </div>
    </div>
  );
}
