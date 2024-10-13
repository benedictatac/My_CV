import { Component } from "react";
import "../../../styles/globals.css"; // Import global styles correctly
import Carousel from "../components/carousel"; // Import the Carousel component

export default function AboutMePage() {
  return (
    <div className="about-page flex flex-col h-screen">
      <main className="flex-grow">
      <div className="grid grid-cols-1 row-span-1">
        <h1 className="text-white">Who am I</h1>
        <section className="bg-transparent p-4 flex flex-wrap justify-between items-center h-96 mt-8">
  <div className="flex-1 bg-transparent h-full mr-10 sm:mr-20">
    <p>This will contain some photos of me that are slidable</p>
    <Carousel />
  </div>
  <div className="bg-transparent h-full w-full sm:w-2/5 mt-8 sm:mt-0">
    <p className="text-gray-500 dark:text-gray-400">Who am I you ask? Well if you did ask, My name is <span className="italic">Charles Benedict Villafuerte Atanacio.</span></p>
    <p className="text-gray-500 dark:text-gray-400">I am a <span className="italic">Computer Engineering Student</span> trying to survive in this economy! Lemme show you </p>
  </div>
</section>



      <section className="bg-gray-300 h-32 p-4 mt-10 pt-10">What do I do?</section>
      <section className="bg-gray-400 p-4 mt-10">What I love to do</section>
      <section className="bg-gray-500 p-4 mt-10">Get to know me</section>

</div>

      </main>
    </div>
  );
}
