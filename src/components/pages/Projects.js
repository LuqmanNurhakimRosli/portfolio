import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { projectsData } from '../Data/ProjectsData'
import ProjectCard from '../render/ProjectCard'

function Projects() {
      const [darkMode, setDarkMode] = React.useState(true);
  
      function toggleDarkMode(){
          setDarkMode(prevDarkMode => !prevDarkMode);
      }
  return (
    <section className="min-h-screen flex flex-col bg-gray-200">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-5xl font-extrabold text-center mb-12 tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Projects
          </span>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map(project => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </div>
      <Footer darkMode={darkMode} />
      </section>
  );
}

export default Projects;