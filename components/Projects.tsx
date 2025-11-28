import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-devops-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-devops-accent">#</span> Featured Projects
          </h2>
          <p className="text-gray-400">Open source contributions and personal engineering projects.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="bg-devops-light border border-gray-700 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-devops-accent/10 transition-all duration-300 group flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-devops-dark/60 group-hover:bg-devops-dark/30 transition-all z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-2 bg-gray-900/80 rounded-full text-white hover:text-devops-accent backdrop-blur-sm transition-colors"
                      title="View Code"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-2 bg-gray-900/80 rounded-full text-white hover:text-devops-accent backdrop-blur-sm transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-devops-accent transition-colors">{project.title}</h3>
                    <Code2 size={20} className="text-gray-600 group-hover:text-devops-accent transition-colors"/>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-900/30 text-blue-300 border border-blue-900/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
