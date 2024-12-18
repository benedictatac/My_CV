import React, { Fragment } from "react";
import Carousel from "../components/carousel";

export default function AboutMePage() {
return(
    <div className="grid grid-cols-1 row-span-1">
    {/* Section 2 */}
    <section className="min-h-screen flex flex-col justify-center items-center w-auto">
      <div className="flex flex-row justify-between w-full px-10 sm:px-20">
        <div className="flex-grow bg-transparent h-full w-1/2">
          <Carousel />
        </div>
        <div className="flex-grow bg-transparent h-full w-1/2 ml-24">
          <h1 className="text-center text-4xl mb-10 font-size">
            Get to know me 
          </h1>
          <p>
            I am a Computer Engineering student born in the Philippines and raised in Montreal Quebec. I am a very honest person and I try my hardest in everything that
            I apply myself into. My characteristcs you ask? Well, let me list it for you below:
            </p>
            <br></br>
            <dl>
              <li>Hardworking</li>
              <li>Responsible</li>
              <li>Respectful</li>
              <li>Team Player</li>
              <li>Adaptable</li>
              <li>Fast Learner</li>
            </dl>
            <br></br>
            <p>I know, very redundant isn't it? but that really is who I am.</p>
        </div>
      </div>
    </section>
    {/*Section 3*/}
    <section className="min-h-screen flex flex-col justify-center items-center w-auto">
      <div className="flex flex-row justify-between w-full px-10 sm:px-20 h-auto">
        <div className="flex-grow bg-transparent h-full w-1/2">
          <h1 className="text-center text-4xl font-size m-4">
            What do I love to do? 
          </h1>
        </div>
        <div className="flex-grow bg-transparent h-full w-1/2 ml-24">
          <p>
          I love doing a lot of stuff!! I love playing video games, watching movies, coding and playing sports! 
          But most importantly, as you have seen from my pictures, I love to travel! I love to see new places and experience new things!!!
          </p>
          <br></br>
         <p>Let me list down some of the things that I love to do:</p>
         <br></br>
         <dl>
            <li>Playing CyberPunk</li>
            <text className="font-thin"> (I have not yet finished it)</text>
            <br></br>
            <li>Watching Movies & ALOT of youtube videos</li>
            <br></br>
            <li>Coding & Problem Solving</li>
            <br></br>
            <li>Playing Sports</li>
            <text className="font-thin"> I can fight and protect you! Through the power of Muay thai
              and friendship!
            </text>
             <br></br>
            <li>Traveling</li>
         </dl>
        </div>
      </div>
    </section>
    {/* Section 4 */}
    <section className="min-h-screen flex flex-col justify-center items-center w-auto">
      <div className="flex flex-row justify-between w-full px-10 sm:px-20 h-auto">
          <div className="flex-grow bg-transparent w-1/2 h-full">   
            <p>
              Hard to say... click on one of these and maybe you will find out! 
            </p>
            <br></br>
          <dl>
            <li className="mb-2">
              <a href="https://github.com/benedictatac" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              GitHub
              </a>
            </li>
            <li className="mb-2">
              <a href="https://www.linkedin.com/in/charles-atanacio-1b3b5b24b/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              LinkedIn
              </a>
            </li>
            <li className="mb-2">
              <a href="https://www.instagram.com//charlesatanacio_/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Instagram
              </a>
            </li>
            <li className="mb-2">
              <a href="https://www.facebook.com/Atanacio2" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Facebook
              </a>
            </li>
          </dl>
          </div>
          <div className="flex-grow bg-transparent h-full w-1/2">
          <h1 className="text-center text-4xl font-size m-4">
            What are my goals?
          </h1> 
          </div>
        </div>
    </section>
  </div>
)


}