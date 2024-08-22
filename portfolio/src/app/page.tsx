import "../../styles/globals.css"; // Import global styles correctly

export default function HomePage() {
  return (
    <div className="home-page flex flex-col h-screen">
      <main className="flex-grow">
        {/* Content specific to the Home page */}
        <h1 className="text-center text-xl text-black">Home Page</h1>
        <h2> This is going to be my Home Page </h2>
        {/* Additional content goes here */}
      </main>
    </div>
  );
}
