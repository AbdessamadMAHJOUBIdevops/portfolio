import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award, CheckCircle, Clock } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-devops-light/30 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div>
             <div className="flex items-center mb-8">
                <GraduationCap className="text-devops-accent mr-3" size={32} />
                <h2 className="text-2xl font-bold text-white">Education</h2>
             </div>
             
             <div className="space-y-8">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l border-gray-700">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-devops-secondary"></div>
                    <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                    <p className="text-devops-accent font-medium mb-1">{edu.degree}</p>
                    <div className="flex justify-between text-sm text-gray-500 font-mono">
                      <span>{edu.period}</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center mb-8">
                <Award className="text-devops-accent mr-3" size={32} />
                <h2 className="text-2xl font-bold text-white">Certifications</h2>
             </div>

             <div className="grid gap-4">
                {CERTIFICATIONS.map((cert, index) => (
                  <div key={index} className="bg-devops-light border border-gray-700 p-4 rounded-lg flex items-center justify-between group hover:border-devops-accent transition-colors">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-4 ${cert.status === 'Completed' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                        {cert.status === 'Completed' ? <CheckCircle size={20} /> : <Clock size={20} />}
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{cert.name}</h4>
                        {cert.date && <p className="text-xs text-gray-500 font-mono mt-1">Obtained: {cert.date}</p>}
                      </div>
                    </div>
                    {cert.status === 'In Progress' && (
                        <span className="text-xs font-mono text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">In Progress</span>
                    )}
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
