// "use client";
// import React from "react";

// const ProjectCard = ({ imgUrl, title, description, github, altText }) => {
//     return (
//         <div className="group relative">
//             <div className="h-52 md:h-72 rounded-t-xl overflow-hidden">
//                 <img src={imgUrl} alt={altText} className="w-full h-full object-contain rounded-xl" />
//             </div>
//             <div className="text-black overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-lg">
//                 <div className="p-4 text-center">
//                     <h5 className="text-white font-bold">{title}</h5>
//                     <p className="text-white">{description}</p>
//                     <p className="text-white flex justify-center"><a href="https://github.com/oslabs-beta/RenderPup">
//                           <img id ='aboutimage' src="https://img.shields.io/badge/Github%20-282a2e?style=for-the-badge&logo=github&logoColor=367cfe" alt="github" />
//                       </a></p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProjectCard;

import React from "react";
import Image from "next/image";
// import renderpup from "@/app/images/renderpup.png";
import renderpup from "../images/renderpup.png";
import SkillsSection from "./SkillsSection";

const rpSkills = [
  "Javascript", "React", "React Router", "Node", "Bcrypt", "PostgreSQL", "HTML5", "CSS", "Material UI", "Chart.JS", "Jest", "Webpack"
];

const jnSkills = [
  "NextJS", "Typescript", "React", "Node", "Bcrypt", "MongoDB", "HTML", "CSS"
];

const ProjectCard = ({ title, description, imgUrl, github, imgClassName }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-0 mb-0 ">
      <div className="flex-1 md:pr-6">
      <div className="flex items-center mb-1">
  {title === "RenderPup" && (
    <div className="relative mr-2">
      <Image
        src={renderpup}
        alt="RenderPup logo"
        width={36} // Adjust according to your font size
        height={36} // Adjust according to your font size
        layout="fixed"
        objectFit="contain"
      />
    </div>
  )}

{title === "JobNest" && (
    <div className="relative mr-2 text-blue-600 bg-blue-400">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
    </svg>
    </div>
  )}

  <h3 className="text-3xl font-bold text-indigo-950">{title}</h3>
</div>

        <p className="text-base text-white">{description}</p>
        {title === "RenderPup" && (
          <div className="flex flex-wrap gap-1 my-4">
            {rpSkills.map((skill, index) => (
              <button
                key={index}
                className="bg-indigo-950 text-white px-1 py-1 rounded"
              >
                {skill}
              </button>
            ))}
          </div>
        )}
        {title === "JobNest" && (
          <div className="flex flex-wrap gap-1 my-4">
            {jnSkills.map((skill, index) => (
              <button
                key={index}
                className="bg-indigo-950 text-white px-1 py-1 rounded"
              >
                {skill}
              </button>
            ))}
          </div>
        )}
        {/* {github && (
          <p className="text-white flex justify-center mt-4">
            <a href={github}>
              <img
                id="aboutimage"
                src="https://img.shields.io/badge/Github%20-282a2e?style=for-the-badge&logo=github&logoColor=367cfe"
                alt="github"
              />
            </a>
          </p>
        )} */}
      </div>
      <div className="flex-shrink-0 mt-4 md:mt-0 md:w-1/2">
        <div className="relative px-[2.6%] py-[1.4%] border-2 border-fuchsia-950 transition-transform duration-300 transform">
          <img
            src={imgUrl}
            alt={title}
            className={`w-full h-auto transition-transform duration-300 transform hover:scale-105 ${imgClassName}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;












