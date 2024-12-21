import React, { Fragment } from "react";
import Carousel from "../components/carousel";
import "../styles/aboutme.css";
import { Link } from "react-router-dom";


export default function AboutMePage() {
return(
    <div className="about-me-information ">
        <div style={{ backgroundColor: "transparent" }} className="photos"><Carousel/></div>
        <div style={{ backgroundColor: "transparent" }} className="stuff">
            <div>
                <h1 className="flex-grow justify-center text-center font-extrabold">
                    here
                </h1>
            </div>
        </div>
        <div style={{ backgroundColor: "transparent" }} className="social-media">
            <div className="hidden md:block">
                <div className="flex-row justify-center items-center space-x-4">
                <button> 
                     <a href="https://www.facebook.com/Atanacio2/" className="text-gray-500 dark:text-gray-400 hover:bg-transparent hover:text-white rounded-lg">
                        Facebook
                    </a>
                    </button>
                    <button></button>
                    <button></button>
                </div>
                     
                </div>
            </div>
</div>

 
)


}