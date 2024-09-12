import "../../styles/globals.css"; // Import global styles correctly

export default function HomePage() {
  return (
    <div className="home-page flex flex-col h-screen">
       <div className="absolute inset-0 z-0 flex justify-center items-center text-[200px] font-extrabold text-white opacity-5 pointer-events-none select-none font-manjeet">
          Charles Benedict Villafuerte Atanacio
        </div>
      <main className="flex-grow">
        {/* Content specific to the Home page */}
        <div className="flex items-center justify-center h-screen p-6">
          <div className="p-4">
          <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start ">
    Hello Ladies And Gents! This is my Portfolio showcasing whatever talent I have remaining</p>
          <p className="text-gray-500 dark:text-gray-400">I am not a yapper but for this one, i shall for just a tiny bit.</p>          
          {/*In this case, in order to get pargraphs below one another, must be in a div
          If not, */}

          </div>
    </div> 
      </main> 
    </div>
    
  );
}
