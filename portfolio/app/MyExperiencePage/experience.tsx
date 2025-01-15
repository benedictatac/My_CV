import "../styles/experience.css";
import Image from "next/image";

export default function Experience() {
    return (
        <div className="flex-grow justify-center min-h-screen">
            <div className="title">
                <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight bg-gradient-to-r from-[#0e1c26] to-[#bbcace] text-transparent bg-clip-text md:text-5xl lg:text-6xl dark:from-[#020303] dark:to-[#3295b1] p-4 relative">
                    <span className="relative z-10 bg-gradient-to-r from-[#0e1c26] to-[#21b8e2] bg-clip-text text-transparent animate-pulse">Experience</span>
                </h1>
            </div>
            <div className="content">
                <div className="marios">
                    <Image src="/Pictures/Marios.jpg" className="marios-img" width="500" height= "282" alt="Marios Picture"></Image>
                    <div className="marios-content">
                    <h1 className="mb-4 text-3xl leading-none tracking-tight mt-10 ">Job Titles</h1>
                    <ul className="list-disc">
                        <li className="ml-4">
                            <span className="text-pretty flex-auto text-gray-500 dark:text-gray-400">Cook</span>
                            <br/>
                            <span className="text-gray-500 dark:text-gray-400"> Year:  Jun 2018 - May 2023 · 5 yrs</span>
                        </li>
                        <li className="ml-4">
                            <span className="text-pretty flex-auto text-gray-500 dark:text-gray-400">Dishwasher</span>
                            <br/>
                            <span className="text-gray-500 dark:text-gray-400"> Year:  May 2017 - June 2018 · 1y 2mos </span>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="uniSelect">
                <Image src="/Pictures/Uni-Select-Logo.png" className="uniSelect-img" width="500" height= "282"alt="uniSelect-picture"></Image>
                    <div className="gsm-content">
                    <h1 className="mb-4 text-3xl leading-none tracking-tight mt-10">Job Title</h1>
                    <ul className="list-disc">
                        <li className="ml-4">
                            <span className="text-pretty flex-auto text-gray-500 dark:text-gray-400">Factory Worker</span>
                            <br/>
                            <span className="text-gray-500 dark:text-gray-400 m-3"> Year:  May 2019 - Oct 2019 · 6 mos</span>
                        </li> 
                    </ul>
                    </div>
                </div>
                <div className="gsm">
                    <Image src="/Pictures/planchers_GSM.png" className="gsm-img" width="500" height= "282" alt="GSM-Picture"></Image>
                    <div className="gsm-content">
                    <h1 className="mb-4 text-3xl leading-none tracking-tight mt-10">Job Title</h1>
                    <ul className="list-disc">
                        <li className="ml-4">
                            <span className="text-pretty flex-auto text-gray-500 dark:text-gray-400">Delivery Driver</span>
                            <br/>
                            <span className="text-gray-500 dark:text-gray-400 m-3"> Year:  Oct 2020 - Jun 2021 · 9 mos</span>
                        </li>
                        
                    </ul>
                    </div>
                </div>
                <div className="matrox">
                <Image src="/Pictures/Matrox.jpg" className="matrox-img" width="500" height= "282" alt="Matrox Picture"></Image>
                    <div className="matrox-content">
                    <h1 className="mb-4 text-3xl leading-none tracking-tight mt-10">Job Title</h1>
                    <ul className="list-disc">
                        <li className="ml-4">
                            <span className="text-pretty flex-auto text-gray-500 dark:text-gray-400">Software Quality Assurance Engineer</span>
                            <br/>
                            <span className="text-gray-500 dark:text-gray-400 m-3"> Year:  May 2023 - Aug 2023 · 4 mos</span>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
