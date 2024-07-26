// import HeroSection from './components/HeroSection';
// import Navbar from './components/Navbar';
// import AboutSection from './components/AboutSection';
// import ProjectsSection from './components/ProjectsSection';
// import SkillsSection from './components/SkillsSection';
// import EmailSection from './components/EmailTemplate';
// import Footer from './components/Footer';


// export default function Home() {
//   return (
//     <main className="flex min-h-screen min-w-screen flex-col bg-fuchsia-950 bg-opacity-70 justify-center items-center">
//       <Navbar />
//       <div className="container mt-0 py-0 w-full max-w-none">
//         <HeroSection />
//       </div>

//         <div className="container mt-1 mx-auto px-20 py-3">
//           <AboutSection />
//           <ProjectsSection />
//           <SkillsSection />
//           <EmailSection />
//           <Footer />
          
//         </div>
//     </main>
//   );
// }

import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-purple-950 bg-opacity-30 relative">
      <Navbar />  
      <div className="flex flex-grow">
        <div className="flex flex-col w-full lg:w-2/3 py-3 px-3 overflow-y-auto mt-12">
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
          <Footer />
        </div>
        <div className="hidden md:block w-1/3 fixed top-0 right-0 h-full overflow-hidden">
          <HeroSection />
        </div>
      </div>
    </main>
  );
}






