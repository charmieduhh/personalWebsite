// "use client";
// import React from 'react';
// import Image from 'next/image';
// import personalPhoto from '@/app/images/personalPhoto.png';
// import heartCharmie from '@/app/images/heartCharmie.png';
// import dynamic from 'next/dynamic';
// const TypeAnimation = dynamic(() => import("react-type-animation").then(module => module.TypeAnimation), { ssr: false });

// const HeroSection = () => {
//     return (
//         <div className="relative flex flex-col bg-red-700 md:flex-row sm:items-center rounded-xl">
//             <div className="md:w-1/2 md:mr-10 sm:text-left">
//                 <div className="mb-4 text-3xl sm:text-3xl lg:text-4xl lg:leading-normal font-extrabold whitespace-no-wrap text-transparent">
//                     <span className="bg-gradient-to-r from-stone-300 via-stone-400 to-stone-600 inline-block text-transparent bg-clip-text whitespace-nowrap">
//                         HI, I'M CHARMIE.
//                         <span>
//                             <br></br>
//                             <TypeAnimation
//                                 sequence={[
//                                     "SOFTWARE ENGINEER",
//                                     1000,
//                                     "FULLSTACK DEVELOPER",
//                                     1000
//                                 ]}
//                                 wrapper="span"
//                                 speed={50}
//                                 repeat={Infinity}
//                             />
//                         </span>
//                     </span>
//                 </div>
//                 <span className="flex flex-col md:flex-row mt-4">
//                     <button className="px-6 py-3 rounded-full mr-4 mb-4 bg-red-300 hover:bg-stone-400 text-white border border-white w-full sm:w-fit" id="contact">Contact Me</button>
//                     <button className="px-6 py-3 rounded-full mr-4 mb-4 bg-red-600 hover:bg-stone-800 text-white w-full sm:w-fit">Download CV</button>
//                 </span>
//             </div>
//             <div className="md:w-1/2 md:ml-10 bg-image">
//                 <div className="w-[150px] h-[150px] lg:w-[400px] lg:h-[400px] relative md:w-3/4 md:ml-20">
//                     <Image
//                         src={heartCharmie}
//                         alt="hero image"
//                         className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                         style={{ border: '60%', width: '80%' }} 
//                     /> 
//                 </div>
//             </div>
//             <div className="absolute bottom-0 left-0 w-full border-b-4 border-dashed border-stone-100"></div>
//         </div>
//     )
// }


"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import charmie from '../images/charmie.png';
import heartCharmie from '../images/heartCharmie.png';
// import heartCharmie from '@/app/images/heartCharmie.png';
import Link from "next/link";
import '../globals.css';

import { Pacifico } from 'next/font/google';
import "../globals.css";
// import tailgrab from "@/app/images/tailgrab.png";
// import michi from "@/app/images/michi.png";
// import palawan from "@/app/images/palawan.png";
// import machuPichu from "@/app/images/machuPichu.png";

const greatVibes = Pacifico({
    subsets: ['latin'],
    weight: ['400'],
});

const TypeAnimation = dynamic(() => import("react-type-animation").then(module => module.TypeAnimation), { ssr: false });

const HeroSection = () => {
    return (
        <section id="home" className="relative w-full h-screen" style={{ backgroundImage: `url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjQ3dTRiZGliY2t1YXhkdXo1MnFwMGJvN3l1cDJ1dDg5cTE0dWY2cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6705G9I9sUcNCaJF10/giphy.gif)`, backgroundSize: 'cover' }}>
            {/* https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3F3bXBjdThzNzVyMGEyejJiNWVmNTQ2aDdkaTZvaXQ5ZHduY2xzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gioLPAqDRZjzYpmuCp/giphy.gif */}
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">HI, I&apos;M CHARMIE</h1>
                <div className="text-2xl md:text-4xl font-bold">
                    <TypeAnimation
                        sequence={[
                            "SOFTWARE ENGINEER",
                            1000,
                            "FULLSTACK DEVELOPER",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
                <div className="mt-10 hover:scale-x-[-1]">
                    <Image
                        src={charmie}
                        alt="Charmie"
                        width={200}
                        height={200}
                        className="rounded-xl"
                    />
                </div>
                <div className="flex mt-6">
                    <Link href="#contact">
                        <button className="px-6 py-3 m-2 bg-indigo-900 text-white rounded-full transform hover:scale-105 transition duration-200">Contact Me</button>
                    </Link>
                    <a href="/resume.pdf" download>
                        <button className="px-6 py-3 m-2 bg-transparent border border-white text-white rounded-full transform hover:scale-105 transition duration-200">Download CV</button>
                    </a>
                </div>
            </div>
            {/* <div className="flex justify-center mb-1">
        <h5 className={`${greatVibes.className} text-lg font-bold text-amber-300`}>📌Some Travel Highlights</h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center mb-4 py-10 px-2 xl:gap-4 sm:py-4 xl:px-4">
        <div className="relative group w-full">
          <Image 
            src={tailgrab} 
            alt="Tailgrab" 
            width={600} 
            height={600} 
            layout="fixed"
            className="rounded-xl transition-transform duration-300 transform hover:scale-105 w-full" 
          />
          <div className="opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-opacity duration-300" style={{ width: '110%', height: '10%', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 202, 40, 0.65)', borderRadius: '0.375rem' }}>
             <p className="text-white text-center whitespace-nowrap">📍Snow Summit, Big Bear, CA</p>
          </div>
        </div>
        <div className="relative group w-full">
          <Image 
            src={michi} 
            alt="Michi" 
            width={600} 
            height={600} 
            layout="fixed"
            className="rounded-xl transition-transform duration-300 transform hover:scale-105 w-full" 
          />
          <div className="opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-opacity duration-300" style={{ width: '110%', height: '10%', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 202, 40, 0.65)', borderRadius: '0.375rem' }}>
             <p className="text-white text-center whitespace-nowrap">📍Point Vicente Light, Palos Verdes, CA</p>
          </div>
        </div>

        <div className="relative group w-full">
          <Image 
            src={palawan} 
            alt="Palawan" 
            width={400} 
            height={400} 
            layout="fixed"
            className="rounded-xl transition-transform duration-300 transform hover:scale-105 w-full" />
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300" style={{ width: '110%', height: '10%', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 202, 40, 0.65)', borderRadius: '0.375rem' }}>
             <p className="text-white text-center whitespace-nowrap">📍Kayangan Lake, Palawan, Philippines</p>
           </div>
        </div>
        <div className="relative group w-full">
          <Image 
            src={machuPichu} 
            alt="Machu Pichu" 
            width={400} 
            height={400} 
            layout="fixed"
            className="rounded-xl transition-transform duration-300 transform hover:scale-105 w-full" />
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300" style={{ width: '110%', height: '10%', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 202, 40, 0.65)', borderRadius: '0.375rem' }}>
             <p className="text-white text-center whitespace-nowrap">📍Machu Pichu, Cusco, Perú</p>
           </div>
        </div>
      </div> */}
        </section>
    );
};

export default HeroSection;



