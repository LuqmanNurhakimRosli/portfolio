import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { projectsData } from '../../data/projectsData'
import ProjectCard from '../ProjectCard'

function Projects() {
  return (
    <section className="min-h-screen flex flex-col bg-gray-200">
      <Navbar />
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
      <Footer />
    </section>
  );
}

export default Projects;