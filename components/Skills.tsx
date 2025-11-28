import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { Cloud, Server, Code, Activity, Cpu, ShieldCheck } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Cloud,
  Server,
  Code,
  Activity,
  Cpu,
  ShieldCheck
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-devops-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-devops-accent">#</span> Technical Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I use to build, deploy, and scale applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = iconMap[category.iconName] || Code;
            return (
              <div 
                key={index} 
                className="bg-devops-light/50 border border-gray-700 rounded-xl p-6 hover:border-devops-accent/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-devops-accent/5 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-devops-dark rounded-lg border border-gray-700 text-devops-accent group-hover:text-white group-hover:bg-devops-accent group-hover:border-devops-accent transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm font-mono border border-gray-700 hover:border-gray-500 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
