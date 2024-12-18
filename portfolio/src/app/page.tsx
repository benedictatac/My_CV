import "../../styles/globals.css"; // Import global styles correctly
import AboutMeInfo from "./AboutMePage/information";
import HomePage from "./HomePage/aboutme";

export default function mainPage(){
  return (
    <div className="flex flex-col min-h-screen" style = {{height :'100vg', overflowY: 'scroll'}}>
      <div className="absolute inset-0 z-0 flex justify-center items-center text-[10vw] font-extrabold text-white opacity-5 pointer-events-none select-none font-manjeet">
        Charles Benedict Villafuerte Atanacio
      </div>
      <main className="flex-grow">
        <div className="flex-grow grid-cols-1 row-span-1">
        <section id = "home" className="flex-grow justify-center">
          <HomePage/>
        </section>
        <section></section>
        <section id = "aboutme" className="flex-grow justify-center items-center min-h-screen">
          <div className="flex items-center justify-center min-h-screen p-6">
            <AboutMeInfo/>
          </div>
        </section>
        <section id = "myeducation"></section>
        <section id = "myExperience"></section>
        </div>
      </main>
    </div>
  );
}