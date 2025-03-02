import React from "react";
import "../styles/home_page.css"
import ReactDOM from 'react-dom'
import { SocialIcon } from "react-social-icons";





export default function HomePage(){
return (
    <div className="flex items-start justify-start min-h-screen p-6">
    <div className ="grid grid-cols-auto grid-rows-auto w-2/3 bg-transparent p-6">
    <div className="p-4 col-span-3">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Computer Engineering Student</h1>
        </div>
        <div className="p-4 col-span-3">
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400 w-fit">
                My name is Charles Atanacio - an aspiring student eager to learn in the sphere of <span className="text-4x1 font-bold text-cyan-500">Software Development</span> based in Montreal, Quebec Canada.  
                {/* <span className="text-4x1 font-bold text-cyan-500"> <u>Web Development, Game Development and Artificial Intelligence. </u></span> */} I hold under my belt, multiple years of experience in part-time jobs while being a full-time student. 
                I am currently in my last year of my  <span className="text-4x1 font-bold text-cyan-500"> Computer Engineering Degree </span> at Concordia University.
                I knew nothing before I got into engineering but now...I know more! Hit me up 😃  
            </p>
        </div>
    </div>
    <div className="flex-1 min-h-screen bg-transparent p-6"> <SocialIcon url="https://github.com/benedictatac"></SocialIcon> {/*Gonna add a rotating selection for icons when hovering */}</div>
    </div>
)}