
import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS, SKILL_CATEGORIES } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/80 backdrop-blur-sm flex justify-center items-start p-4 print:p-0 print:bg-white print:static print:block">
      
      {/* Controls - Hidden when printing */}
      <div className="fixed top-4 right-4 z-[110] flex gap-2 print:hidden">
        <button 
          onClick={handlePrint}
          className="bg-devops-accent hover:bg-sky-500 text-devops-dark font-bold py-2 px-4 rounded-full shadow-lg flex items-center gap-2 transition-all"
        >
          <Printer size={18} />
          <span>Print / Save PDF</span>
        </button>
        <button 
          onClick={onClose}
          className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow-lg transition-all"
        >
          <X size={24} />
        </button>
      </div>

      {/* A4 Resume Paper */}
      <div className="bg-white text-gray-800 w-full max-w-[210mm] min-h-[297mm] p-[15mm] md:p-[20mm] shadow-2xl rounded-sm relative animate-fade-in-up print:shadow-none print:w-full print:max-w-none print:p-0">
        
        {/* Header */}
        <header className="border-b-2 border-gray-800 pb-6 mb-6 flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tight">{PERSONAL_INFO.name}</h1>
            <h2 className="text-xl text-sky-700 font-semibold mt-1">{PERSONAL_INFO.role}</h2>
          </div>
          <div className="text-sm space-y-1.5 text-gray-600">
             <div className="flex items-center gap-2">
                <MapPin size={14} /> {PERSONAL_INFO.location}
             </div>
             <div className="flex items-center gap-2">
                <Mail size={14} /> {PERSONAL_INFO.email}
             </div>
             <div className="flex items-center gap-2">
                <Phone size={14} /> {PERSONAL_INFO.phone}
             </div>
             <div className="flex items-center gap-2">
                <Linkedin size={14} /> linkedin.com/in/abdessamadmahjoubi
             </div>
          </div>
        </header>

        {/* Profile */}
        <section className="mb-6">
          <h3 className="text-lg font-bold text-sky-800 uppercase border-b border-gray-300 mb-3 pb-1">Profil Professionnel</h3>
          <p className="text-sm leading-relaxed text-justify text-gray-700">
            {PERSONAL_INFO.summary}
          </p>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h3 className="text-lg font-bold text-sky-800 uppercase border-b border-gray-300 mb-3 pb-1">Compétences Techniques</h3>
          <div className="grid grid-cols-1 gap-y-2 text-sm">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row">
                <span className="font-bold w-48 text-gray-800 flex-shrink-0">{cat.title} :</span>
                <span className="text-gray-700">{cat.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h3 className="text-lg font-bold text-sky-800 uppercase border-b border-gray-300 mb-3 pb-1">Expérience Professionnelle</h3>
          <div className="space-y-5">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-gray-900">{exp.role}</h4>
                  <span className="text-sm font-medium text-gray-600 italic">{exp.period}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sky-700 font-semibold text-sm">{exp.company}</span>
                  <span className="text-xs text-gray-500">{exp.location}</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="text-sm text-gray-700 pl-1">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education */}
          <section>
            <h3 className="text-lg font-bold text-sky-800 uppercase border-b border-gray-300 mb-3 pb-1">Formation</h3>
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-gray-900 text-sm">{edu.degree}</h4>
                  <div className="text-sky-700 text-sm font-medium">{edu.institution}</div>
                  <div className="flex justify-between text-xs text-gray-500 mt-0.5">
                    <span>{edu.location}</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications & Languages */}
          <section>
             <div className="mb-6">
                <h3 className="text-lg font-bold text-sky-800 uppercase border-b border-gray-300 mb-3 pb-1">Certifications</h3>
                <ul className="space-y-2">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                       <span className="mr-2">•</span>
                       <span>
                         <span className="font-semibold">{cert.name}</span>
                         {cert.date && <span className="text-gray-500 text-xs ml-1">({cert.date})</span>}
                         {cert.status === 'In Progress' && <span className="text-xs bg-yellow-100 text-yellow-800 px-1 rounded ml-2">En cours</span>}
                       </span>
                    </li>
                  ))}
                </ul>
             </div>
             
             <div>
                <h3 className="text-lg font-bold text-sky-800 uppercase border-b border-gray-300 mb-3 pb-1">Langues</h3>
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">Français :</span> Courant <br/>
                  <span className="font-semibold">Anglais :</span> Professionnel
                </div>
             </div>
          </section>
        </div>

      </div>
      
      <style>{`
        @media print {
          @page { margin: 0; size: auto; }
          body { background: white; }
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default ResumeModal;
