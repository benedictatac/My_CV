import { Component } from "react";
import "../../../styles/globals.css"; // Import global styles correctly

export default function AboutMePage() {
  return (
    <div className="about-page flex flex-col h-screen">
      <main className="flex-grow">
      <div className="grid grid-cols-1 row-span-1">
  <section className="bg-gray-200 h-32  mt-10">
    <h1>Who Am I?</h1>
    <div className="bg-black w-1/2 p-12 ">
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
