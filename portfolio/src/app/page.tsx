import "../../styles/globals.css"; // Import global styles correctly

export default function HomePage() {
  return (
    <div className="home-page flex flex-col h-screen">
      {/* Background text */}
      <div className="absolute inset-0 z-0 flex justify-center items-center text-[200px] font-extrabold text-white opacity-5 pointer-events-none select-none font-manjeet">
        Charles Benedict Villafuerte Atanacio
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="flex items-center justify-center h-screen p-6">
          <article className="p-4">
            <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
              Hello Ladies And Gents! This is my Portfolio showcasing whatever talent I have remaining.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              I am not a yapper but for this one, I shall for just a tiny bit.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
