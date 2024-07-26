"use client"
import React, { useState, useRef } from "react";
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

const skills = [
    "Javascript (ES6+)",
    "React",
    "HTML",
    "CSS/Sass",
    "Typescript",
    "Node.Js",
    "Express",
    "SQL (PostgreSQL)",
    "NoSQL (MongoDB)",
    "Next.js",
    "React Router",
    "React Testing Library",
    "Tailwind CSS",
    "Material UI",
    "Chart.js",
    "Clerk",
    "Jest",
    "RESTful API",
    "OAuth",
    "Vercel",
    "Google Lighthouse",
    "Bcrypt",
    "Authorization",
    "Git/Github Workflow",
    "Github Actions",
    "Github Pages",
    "Webpack"
];


const SkillsSection = () => {
    return (
        <section id="skills">
          <h2 className={`text-center text-4xl font-bold text-white gap-8 mt-9 mb-4 md:mb-12 ${roboto.className}`}>Skills</h2>
          <div className="flex flex-wrap justify-center gap-1 p-3">
            {skills.map((skill, index) => (
                <button
                    key={index}
                    className="bg-indigo-950 text-white border-1 border-silver-400 rounded-full px-4 py-3 m-1 transform hover:scale-105 transition duration-200"
                >
                    {skill}
                </button>
            ))}
        </div>
        </section>
    )
}

export default SkillsSection;