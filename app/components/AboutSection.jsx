import React from "react";
import Image from "next/image";
// import tailgrab from "@/app/images/tailgrab.png";
import tailgrab from "../images/tailgrab.png";
// import michi from "@/app/images/michi.png";
import michi from "../images/michi.png";
// import palawan from "@/app/images/palawan.png";
import palawan from "../images/palawan.png";
// import machuPichu from "@/app/images/machuPichu.png";
import machuPichu from "../images/machuPichu.png";
// import corkBoard from "@/app/images/corkBoard.png";
import corkBoard from "../images/corkBoard.png";
import { Pacifico } from 'next/font/google';
import { Roboto } from 'next/font/google';
import "../globals.css";

const greatVibes = Pacifico({
    subsets: ['latin'],
    weight: ['400'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '700'],
  variable: '--font-roboto',
});

const AboutSection = () => {
  return (
    <section className="text-indigo-950" id="about">
      <div className="flex justify-center mb-1">
        <h5 className={`${greatVibes.className} text-lg font-bold text-indigo-950`}>📌Some Travel Highlights</h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center mb-4 py-10 px-2 xl:gap-4 sm:py-4 xl:px-4" style={{ backgroundImage: `url(${corkBoard.src})`, backgroundSize: 'cover' }}>
        <div className="relative group w-full">
          <Image 
            src={tailgrab} 
            alt="Tailgrab" 
            width={600} 
            height={600} 
            layout="fixed"
            className="rounded-xl transition-transform duration-300 transform hover:scale-105 w-full" 
          />
          <div className="opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-opacity duration-300" style={{ width: '110%', height: '10%', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(66, 59, 154, 0.65)', borderRadius: '0.375rem' }}>
             <p className="text-white text-sm text-center whitespace-nowrap">📍Snow Summit, Big Bear, CA</p>
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
          <div className="opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-opacity duration-300" style={{ width: '120%', height: '10%', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(66, 59, 154, 0.65)', borderRadius: '0.375rem' }}>
             <p className="text-white text-center text-sm whitespace-nowrap">📍Point Vicente Light, Palos Verdes, CA</p>
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
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300" style={{ width: '120%', height: '10%', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(66, 59, 154, 0.65)', borderRadius: '0.375rem' }}>
             <p className="text-white text-center text-sm whitespace-nowrap">📍Kayangan Lake, Palawan, Philippines</p>
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
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300" style={{ width: '110%', height: '10%', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(66, 59, 154, 0.65)', borderRadius: '0.375rem' }}>
             <p className="text-white text-center text-sm whitespace-nowrap">📍Machu Pichu, Cusco, Perú</p>
           </div>
        </div>
      </div>
      <div className="mt-9 text-center">
        <h2 className={`text-4xl font-bold text-white mb-9" ${roboto.className}`}>About Me</h2>
        <p className="roboto text-base mt-9 lg:text-lg">
        Hey there, I&apos;m Charmie! I&apos;m a freelance full-stack engineer who&apos;s all about blending my love for the great outdoors with my passion for community. Whether i&apos;s hitting the slopes, exploring nature trails, or diving into team sports, you&apos;ll find me embracing every adventure life throws my way. After years in healthcare, I stumbled upon my true calling: crafting digital experiences that matter. Now, I&apos;m on a mission to fuse my technical know-how with my creative spark to make a real difference in the world. Let&apos;s join forces and embark on this exciting journey together!
         </p>
      </div>
     
    </section>
  );
};

export default AboutSection;
