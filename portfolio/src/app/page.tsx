import "../app/styles/globals.css"; // Import global styles correctly
import AboutMeInfo from "./AboutMePage/information";
import HomePage from "./HomePage/aboutme";
import Introduction from "./AboutMePage/introduction";

export default function mainPage(){
  return (
    // Want a flex container which will span 
    // the entire height of the screen 
    // through a column based setting 
    <div className="flex flex-col min-h-screen" style = {{height :'100vg', overflowY: 'scroll'}}>
      <div className="absolute inset-0 z-0 flex justify-center items-center text-[10vw] font-extrabold text-white opacity-5 pointer-events-none select-none font-manjeet">
        Charles Benedict Villafuerte Atanacio {/* Name as Bg for first section */}
      </div>
      <main className="flex-grow"> {/* Main content span as column */}
        <div className="flex-grow grid-cols-1 row-span-1">
        <section id = "home" className="flex-grow justify-center">
          <HomePage/>
        </section>
        <section id = "aboutme" className="min-h-screen flex flex-col justify-center items-center mr-auto ml-auto mt-24">
          <Introduction/>
          <AboutMeInfo/>
        </section>
        <section id = "myeducation" className = ""></section>
        <section id = "myExperience"></section>
        </div>
      </main>
    </div>
  );
}