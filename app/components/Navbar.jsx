
"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';
// import blueHeart from '@/app/images/blueHeart.png';
import blueHeart from '../images/blueHeart.png';

const navLinks = [
  // { title: 'Home', path: '#home' },
  { title: 'About', path: '#about' },
  { title: 'Projects', path: '#projects' },
  { title: 'Skills', path: '#skills' },
  { title: 'Contact', path: '#contact' }
];

// const Navbar = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 768) {
//         setNavbarOpen(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <nav className="fixed inset-x-0 top-10 z-10 flex justify-center">
//       <div className="bg-fuchsia-950 bg-opacity-70 rounded-lg max-w-lg w-full mx-auto px-8 py-2 flex items-center justify-between">
//         {/* Mobile Menu Button */}
//         <div className="mobile-menu block md:hidden">
//           {!navbarOpen ? (
//             <button onClick={() => { setNavbarOpen(true) }}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-stone-200"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//               </svg>
//             </button>
//           ) : (
//             <button onClick={() => { setNavbarOpen(false) }}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-stone-200 hover:fond-bold"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
//               </svg>
//             </button>
//           )}
//         </div>
//         {/* Desktop Menu */}
//         <div className="menu hidden md:block md:w-auto" id="navbar">
//           <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <NavLink href={link.path} title={link.title} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
//     </nav>
//   )
// }

// export default Navbar;

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 768) {
          setNavbarOpen(false);
        }
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return (
      <nav className="fixed w-full top-0 md:top-10 md:right-10 z-10 md:w-auto">
        <div className="bg-indigo-950 rounded-lg w-full md:px-8 md:max-w-sm max-xs mx-0 my-1 px-5 py-2 flex items-center justify-between md:justify-center">
          {/* Mobile Menu Button */}
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => {
                  setNavbarOpen(true);
                }}
                className="flex items-center px-3 py-2 border rounded border-white text-white hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => {
                  setNavbarOpen(false);
                }}
                className="flex items-center px-3 py-2 border rounded border-white text-white hover:text-white hover:font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
  
          {/* Desktop Menu */}
          <div className="hidden md:flex md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Mobile Menu Overlay */}
        {navbarOpen && (
          <div className="bg-indigo-950 bg-opacity-70 rounded-lg max-w-lg w-full mx-auto px-8 py-2 mt-2 flex flex-col items-center">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    );
  };
  
  export default Navbar;
