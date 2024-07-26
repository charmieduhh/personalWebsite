// "use client"
// import React, { useState, useRef } from "react";
// // import renderPup from '@/projectPics/renderPup.png';
// // import JobNest from '@/app/images/projectPics/JobNest.png';
// // import chartbeat from '@/app/images/projectPics/chartbeat.png';
// import ProjectCard from './ProjectCard';
// import { Pacifico } from 'next/font/google';
// import "../globals.css";

// const greatVibes = Pacifico({
//     subsets: ['latin'],
//     weight: ['400'],
//   });


// const projectsData = [
//     {
//       id: 1,
//       title: "RenderPup",
//       description: "Web application designed to run performance metrics on websites",
//       image: "/projectPics/renderPup.png",   
//       alt: "RenderPup",
//       tag: ["All", "Web"],
//       gitUrl: "/",
//       previewUrl: "/",
//       github: "https://github.com/oslabs-beta/RenderPup"
//     },
//     {
//       id: 2,
//       title: "JobNest",
//       description: "Job Application Website",
//       image: "/projectPics/JobNest.png",
//       alt: "JobNest",
//       tag: ["All", "Web"],
//       gitUrl: "/",
//       previewUrl: "/"
//     }
//     // {
//     //   id: 3,
//     //   title: "Chartbeat",
//     //   description: "Patient Health Metric Storage Website",
//     //   image: "/projectPics/Chartbeat.png",
//     //   alt: "Chartbeat",
//     //   tag: ["All", "Web"],
//     //   gitUrl: "/",
//     //   previewUrl: "/",
//     // }
//   ];

// const ProjectsSection = () => {
//     return (
//         <section id="projects">
//         <h2 className={`text-center text-4xl font-bold text-indigo-800 gap-8 mt-9 mb-8 md:mb-12 ${greatVibes.className}`}>Projects</h2>
//         <div className="text-white flex flex-row justify-center items-center gap-2 py-1">
//             {projectsData.map((project) => (
//             <ProjectCard 
//             key ={project.id} 
//             title={project.title} 
//             description={project.description} 
//             imgUrl = {project.image} 
//             github = {project.github}
//             />
//             ))}
//         </div>
//         </section>
//     )
// }

"use client"
import React from "react";
import ProjectCard from './ProjectCard';
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

const projectsData = [
    {
      id: 1,
      title: "RenderPup",
      description: "Web application designed to analyze Next.js websites by running various performance tests and providing insightful metrics.",
    //   image: "/projectPics/renderPup.png",   
      image: "/projectPics/Fetch_Metrics.gif",
      alt: "RenderPup",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
      github: "https://github.com/oslabs-beta/RenderPup",
      imgClassName: "border-4 border-gray-200 p-2 shadow-lg hover:scale-105 transition-transform duration-300 transform"
    },
    {
      id: 2,
      title: "JobNest",
      description: "Sophisticated job search and recruitment platform designed to streamline the hiring process for job seekers.",
      image: "/projectPics/jobNest.gif",
      alt: "JobNest",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
      imgClassName: "border-4 border-gray-200 p-2 shadow-lg"
    }
    // {
    //   id: 3,
    //   title: "Chartbeat",
    //   description: "Patient Health Metric Storage Website",
    //   image: "/projectPics/Chartbeat.png",
    //   alt: "Chartbeat",
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // }
];

const ProjectsSection = () => {
    return (
        <section id="projects">
            <h2 className={`text-center text-4xl font-bold text-white gap-8 mt-9 mb-8 md:mb-12 ${roboto.className}`}>Projects</h2>
            <div className="flex flex-col gap-4">
                {projectsData.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description}
                        imgUrl={project.image} 
                        github={project.github}
                    />
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;




