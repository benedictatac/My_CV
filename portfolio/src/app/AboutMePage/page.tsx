import { Component } from "react";
import "../../../styles/globals.css"; // Import global styles correctly
import Carousel from "../components/carousel"; // Import the Carousel component

export default function AboutMePage() {
  return (
    <div className="about-page flex flex-col h-screen">
      <main className="flex-grow">
      <div className="grid grid-cols-1 row-span-1">
        <h1 className="text-white">Who am I</h1>
      <section className="bg-transparent p-4 flex justify-between items-center h-96 mt-8">
      <div className="flex-1 bg-transparent h-full">
      <p>This will contain some photos of me that are slidable</p>
      <Carousel/>
      </div>
      <div className="bg-transparent h-full w-1/4">
      <p>This section will contain some type of text</p>
      </div>
      </section>


      <section className="bg-gray-300 h-32 p-4 mt-10">What do I do?</section>
      <section className="bg-gray-400 p-4 mt-10">What I love to do</section>
      <section className="bg-gray-500 p-4 mt-10">Get to know me</section>

</div>

      </main>
    </div>
  );
}
