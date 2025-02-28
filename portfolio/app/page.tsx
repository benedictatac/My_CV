import "./styles/globals.css"; // Import global styles correctly
import AboutMeInfo from "./AboutMePage/information";
import HomePage from "./HomePage/home_page";
import Introduction from "./AboutMePage/introduction";
import Education from "./MyEducationPage/education";
import Experience from "./MyExperiencePage/experience";

export default function mainPage(){
  return (
    // Want a flex container which will span 
    // the entire height of the screen 
    // through a column based setting 
    <div className="flex flex-col min-h-screen" style = {{height :'100vg', overflowY: 'scroll'}}>
      {/* <div className="absolute inset-0 z-0 flex justify-center items-center text-[10vw] font-extrabold text-white opacity-5 pointer-events-none select-none font-manjeet">
        Charles Benedict Villafuerte Atanacio 
      </div> */}
      <main className="flex-grow"> 
        <div className="flex-grow grid-cols-1 row-span-1">
        <section id = "home" className="flex-grow justify-center">
          <HomePage/>
        </section>
        <section id = "aboutme" className="min-h-screen flex flex-col justify-center items-center mr-auto ml-auto mt-24">
          <Introduction/>
          <AboutMeInfo/>
        </section>
        <section id = "myeducation" className = "flex-grow justify-center mt-48 ">
        <Education/>
        </section>
        <section id = "myExperience" className="flex-grow justify-center mt-48">
          <Experience/>
        </section>
        </div>
      </main>
    </div>
  );
}