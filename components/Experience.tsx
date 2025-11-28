import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-devops-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* ✅ TRADUCTION ICI */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-devops-accent">#</span> Mon Parcours
          </h2>
          <p className="text-gray-400">Mon évolution professionnelle dans l'univers de la Tech.</p>
        </div>

        <div className="relative border-l border-gray-700 ml-4 md:ml-0 md:pl-0 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[21px] top-0 bg-devops-dark border-4 border-devops-accent rounded-full h-10 w-10 flex items-center justify-center z-10 md:left-1/2 md:-ml-5">
                 <Briefcase size={16} className="text-white" />
              </div>

              <div className={`md:flex items-start justify-between w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                
                {/* Empty spacer for opposite side */}
                <div className="hidden md:block w-5/12" />

                {/* Content Card */}
                <div className="ml-8 md:ml-0 w-full md:w-5/12">
                  <div className="bg-devops-light border border-gray-700 rounded-xl p-6 shadow-lg hover:border-devops-accent/50 transition-colors relative">
                    {/* Arrow for desktop */}
                    <div className={`hidden md:block absolute top-3 w-4 h-4 bg-devops-light border-t border-l border-gray-700 rotate-45 ${index % 2 === 0 ? '-left-2.5 border-r-0 border-b-0' : '-right-2.5 rotate-[225deg]'}`}></div>

                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="text-devops-accent font-mono text-sm mt-1 sm:mt-0">{exp.company}</span>
                    </div>

                    <div className="flex flex-col space-y-2 mb-4 text-sm text-gray-500 font-mono">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm leading-relaxed flex items-start">
                          <span className="text-devops-accent mr-2 mt-1.5 text-xs">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-700/50">
                      {exp.techStack.map((tech, idx) => (
                        <span key={idx} className="text-xs font-mono text-devops-secondary bg-devops-secondary/10 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;