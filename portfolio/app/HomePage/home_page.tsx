import React from "react";
import "../styles/home_page.css"


export default function HomePage(){
return (
    <div className="flex items-start justify-start min-h-screen p-6">
    <div className ="grid grid-rows-2 w-1/2 min-h-screen bg-black p-6">
    <div className="p-16 rows-span-2">
        <h1 className="mb-4">Aspirting Computer Engineering Student</h1>   
        </div>
    <div className="p-8 rows-span-2 h-full"></div>
    </div>
    <div className="grid grid-cols-2 flex-1 min-h-screen bg-white p-6"></div>
    </div>
)}