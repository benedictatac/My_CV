import React, { Fragment } from "react";
import Carousel from "../components/carousel";
import "../styles/aboutme.css";
import { Link } from "react-router-dom";


export default function AboutMePage() {
return(
    <div className="about-me-information">
        <div style={{ backgroundColor: "transparent" }} className="photos"><Carousel/></div>
        <div style={{ backgroundColor: "transparent" }} className="stuff">
            <div className="flex flex-col items-start">
                <p className="text-gray-100 mb-4">
                    I won't go into the intricate details but at least, I will enumerate some qualities that make me a dependable person. 
                    I am a person who is: 
                </p>
                <ul className="list-disc list-inside text-gray-100">
                    <li>Responsible</li>
                    <li>Hardworking</li>
                    <li>Team player</li>
                    <li>Perseverant</li>
                    <li>Adaptable</li>
                </ul>
                <p className="text-gray-100 mt-4">
                    Not only that, I also delve into the world of sports, martial arts and gaming! 
                    So, if ever you need my expertise, I am just a message away!
                </p>
            </div>
        </div>
        <div style={{ backgroundColor: "transparent" }} className="social-media">
            <div className="hidden md:block">
                <div className="flex-row justify-center items-center space-x-8 pl-14">
                <button> 
                     <a href="https://www.facebook.com/Atanacio2/" className="px-8 py-3 relative before:absolute before:w-2/3 before:h-2/3 before:border-[#236e6e] before:top-0 before:left-0
                     before:border-t before:border-l before:border-solid after:absolute after:w-2/3 after:h-2/3 after:border-[#236e6e] after:bottom-0 after:right-0 after:border-b after:border-r after:border-solid
                     after:hover:w-full after:hover:h-full before:hover:w-full before:hover:h-full before:duration-500 after:duration-500 hover:scale-90 text-[#3295b1] pl-10 pr-10">
                        Facebook
                    </a>
                    </button>
                    <button>
                    <a href="https://www.instagram.com/charlesatanacio_/" className="px-8 py-3 relative before:absolute before:w-2/3 before:h-2/3 before:border-[#236e6e] before:top-0 before:left-0
                     before:border-t before:border-l before:border-solid after:absolute after:w-2/3 after:h-2/3 after:border-[#236e6e] after:bottom-0 after:right-0 after:border-b after:border-r after:border-solid
                     after:hover:w-full after:hover:h-full before:hover:w-full before:hover:h-full before:duration-500 after:duration-500 hover:scale-90  text-[#3295b1] pl-10 pr-10">
                        Instagram
                    </a> 
                    </button>
                    <button> <a href="https://www.linkedin.com/in/charles-atanacio-1b3b5b24b/" className="px-8 py-3 relative before:absolute before:w-2/3 before:h-2/3 before:top-0 before:left-0
                     before:border-t before:border-l before:border-solid after:absolute after:w-2/3 after:h-2/3 after:border-[#236e6e] after:bottom-0 after:right-0 after:border-b after:border-r after:border-solid
                     after:hover:w-full after:hover:h-full before:hover:w-full before:hover:h-full before:duration-500 after:duration-500  hover:scale-90  text-[#3295b1] before:border-[#236e6e] pl-10 pr-10">
                        LinkedIn
                     </a>
                    </button>
                </div>
                </div>
            </div>
</div>

 
)


}