import "../../styles/globals.css"; // Import global styles correctly

export default function HomePage() {
  return (
    <div className="home-page flex flex-col h-screen">
      <main className="flex-grow">
        {/* Content specific to the Home page */}
        <div className="text-center text-xl text-white">My Portfolio  </div>
        <div className="flex items-center justify-center h-screen">
          <p className="text-center text-lg">
    Hello Ladies And Gents! My name is <h1 className="text-[20px] ">Charles Benedict Villafuerte Atanacio </h1> and this is 
    my Portfolio
  </p>
</div>
          
          
        
        {/* Additional content goes here */}
      </main>
    </div>
  );
}
