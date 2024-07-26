import React from "react";
import Image from "next/image";
// import lightPurpHeart from '@/app/images/lightPurpHeart.png';
import lightPurpHeart from '../images/lightPurpHeart.png';

const Footer = () => {
  return (
    <footer className="footer border border-t-indigo-950 border-l-transparent border-r-transparent border-b-transparent text-indigo-950">
      <div className="container pt-14 pb-10 flex flex-col justify-between items-center">
        <div className="flex items-center">
          {/* <div className="w-10 h-10 md:w-16 md:h-16 relative mr-4">
            <Image
              src={lightPurpHeart}
              alt="heart"
              layout="fill"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div> */}
          <p className="text-indigo-950 text-left">About: Built with Next.js (App Router), React, Javascript, Tailwind CSS, Resend, Cloudflare hosting</p>
        </div><br/>
        <p className="text-indigo-950">© 2024 Charmie Dubongco. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
