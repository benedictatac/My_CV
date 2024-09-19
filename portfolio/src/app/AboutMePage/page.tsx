import { Component } from "react";
import "../../../styles/globals.css"; // Import global styles correctly

export default function AboutMePage() {
  return (
    <div className="about-page flex flex-col h-screen">
      <main className="flex-grow">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <section className="bg-gray-200 p-4">Section 1</section>
  <section className="bg-gray-300 p-4">Section 2</section>
  <section className="bg-gray-400 p-4">Section 3</section>
  <section className="bg-gray-500 p-4">Section 4</section>
</div>

      </main>
    </div>
  );
}
