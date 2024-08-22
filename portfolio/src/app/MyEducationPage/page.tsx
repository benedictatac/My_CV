import "../../../styles/globals.css"; // Import global styles correctly

export default function AboutMePage() {
  return (
    <div className="about-page flex flex-col h-screen">
      <main className="flex-grow">
        {/* Content specific to the About Me page */}
        <h1 className="text-center text-xl text-black">About Me</h1>
        <h2>This page is going to be about my Education </h2>
        {/* Additional content goes here */}
      </main>
    </div>
  );
}
