import React from "react";
import Carousel from "../components/carousel";
import "../styles/aboutMe.css";


export default function AboutMePage() {
return(
    <div className="about-me-information">
        <div style={{ backgroundColor: "transparent" }} className="photos"><Carousel/></div>
        <div style={{ backgroundColor: "transparent" }} className="stuff">
            <div className="flex-grow flex-col items-start">
                <p className="text-gray-500 dark:text-gray-400 m-3">
                    I will not go into the intricate details but at least, I will enumerate some qualities that make me a dependable person. 
                    I am a person who is: 
                </p>
                <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 m-3">
                    <li>Responsible</li>
                    <li>Hardworking</li>
                    <li>Team player</li>
                    <li>Perseverant</li>
                    <li>Adaptable</li>
                </ul>
                <p className="text-gray-500 dark:text-gray-400 m-3">
                    Not only that, I also delve into the world of sports, martial arts and gaming! Hobbies 
                    are a great way to unwind and relax. Here are some of the things that I enjoy doing:                   
                </p>
                <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 m-3">
                    <li>Muay Thai / BJJ</li>
                    <li>League Of Legends</li>
                    <li>Walking my Dog</li>
                    <li>Watching Youtube Videos</li>
                    <li>Hiking Mountains</li>
                    <li>Programming <text className="text-opacity-30"> (duhhh)</text></li>
                </ul>
                <p className="text-gray-500 dark:text-gray-400 m-3">
                    So, if ever you need my expertise, I am just a message away!      
                </p>
            </div>
        </div>
        <div style={{ backgroundColor: "transparent" }} className="social-media">
            <div className="hidden md:block">
                <div className="flex-row justify-center items-center space-x-8 pl-14">
                <button> 
                     <a href="https://www.facebook.com/Atanacio2/" className="px-8 py-3 relative before:absolute before:w-2/3 before:h-2/3 before:border-[#236e6e] before:top-0 before:left-0
                     before:border-t-2 before:border-l-2 before:border-solid after:absolute after:w-2/3 after:h-2/3 after:border-[#236e6e] after:bottom-0 after:right-0 after:border-b-2 after:border-r-2 after:border-solid
                     after:hover:w-full after:hover:h-full before:hover:w-full before:hover:h-full before:duration-500 after:duration-500 hover:scale-90 text-[#3295b1] pl-10 pr-10 font-extrabold">
                        Facebook
                    </a>
                    </button>
                    <button>
                    <a href="https://www.instagram.com/charlesatanacio_/" className="px-8 py-3 relative before:absolute before:w-2/3 before:h-2/3 before:border-[#236e6e] before:top-0 before:left-0
                     before:border-t-2 before:border-l-2 before:border-solid after:absolute after:w-2/3 after:h-2/3 after:border-[#236e6e] after:bottom-0 after:right-0 after:border-b-2 after:border-r-2 after:border-solid
                     after:hover:w-full after:hover:h-full before:hover:w-full before:hover:h-full before:duration-500 after:duration-500 hover:scale-90  text-[#3295b1] pl-10 pr-10 font-extrabold">
                        Instagram
                    </a> 
                    </button>
                    <button> <a href="https://www.linkedin.com/in/charles-atanacio-1b3b5b24b/" className="px-8 py-3 relative before:absolute before:w-2/3 before:h-2/3 before:top-0 before:left-0
                     before:border-t-2 before:border-l-2 before:border-solid after:absolute after:w-2/3 after:h-2/3 after:border-[#236e6e] after:bottom-0 after:right-0 after:border-b-2 after:border-r-2 after:border-solid
                     after:hover:w-full after:hover:h-full before:hover:w-full before:hover:h-full before:duration-500 after:duration-500  hover:scale-90  text-[#3295b1] before:border-[#236e6e] pl-10 pr-10 font-extrabold ">
                        LinkedIn
                     </a>
                    </button>
                </div>
                </div>
            </div>
</div>

 
)


}