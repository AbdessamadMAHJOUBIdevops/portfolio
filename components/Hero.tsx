import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
// 👇 IMPORT DE L'IMAGE
import profilePic from '../assets/profil.jpg';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background abstract blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-devops-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 space-y-6 text-center md:text-left animate-fade-in-up">
            
            {/* ✅ DÉBUT BLOC PHOTO DE PROFIL */}
            <div className="flex justify-center md:justify-start mb-6">
              <div className="relative group">
                {/* Effet de glow derrière l'image */}
                <div className="absolute -inset-1 bg-gradient-to-r from-devops-accent to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                {/* L'image elle-même */}
                <img 
                  src={profilePic} 
                  alt={PERSONAL_INFO.name} 
                  className="relative w-32 h-32 rounded-full border-4 border-devops-dark object-cover shadow-2xl z-10"
                />
              </div>
            </div>
            {/* ✅ FIN BLOC PHOTO DE PROFIL */}

            <div className="inline-block px-3 py-1 bg-devops-light border border-devops-accent/30 rounded-full text-devops-accent font-mono text-sm mb-4">
              <span className="animate-pulse mr-2">●</span>En recherche active de CDI
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Bonjour, je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-devops-accent to-purple-500">{PERSONAL_INFO.name}</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-400 font-mono">
              &lt;{PERSONAL_INFO.role} /&gt;
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Je conçois des infrastructures cloud résilientes et j'automatise les pipelines de livraison. 
              Spécialisé en <span className="text-white font-semibold">Kubernetes</span>, 
              l'automatisation <span className="text-white font-semibold"> DevOps</span>, et 
              l'intégration de systèmes d'<span className="text-white font-semibold">IA Générative</span>.
            </p>

            <div className="flex items-center justify-center md:justify-start space-x-4 pt-4">
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-devops-accent transition-all border border-white/10"
              >
                <Github size={24} />
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-devops-accent transition-all border border-white/10"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-devops-accent transition-all border border-white/10"
              >
                <Mail size={24} />
              </a>
            </div>

             <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               <button 
                 onClick={() => scrollToSection('projects')}
                 className="px-8 py-3 bg-devops-accent text-devops-dark font-bold rounded-lg hover:bg-sky-500 transition-colors text-center shadow-lg shadow-sky-500/20"
               >
                 Voir mes projets
               </button>
               <button 
                 onClick={() => scrollToSection('contact')}
                 className="px-8 py-3 border border-gray-600 text-white font-medium rounded-lg hover:border-devops-accent hover:text-devops-accent transition-colors text-center"
               >
                 Me contacter
               </button>
             </div>
          </div>

          {/* Abstract Tech Visual */}
          <div className="flex-1 w-full max-w-md md:max-w-lg lg:max-w-xl relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-devops-accent to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-lg bg-devops-light border border-gray-700 p-6 shadow-2xl">
              <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-gray-500 font-mono ml-2">bash — v5.1</span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <p className="text-gray-400">
                  <span className="text-green-400">user@devops:~$</span> ./init_profile.sh
                </p>
                <p className="text-gray-300">
                  <span className="text-blue-400">Chargement des modules...</span>
                </p>
                <div className="pl-4 border-l-2 border-gray-700 space-y-1">
                  <p className="text-gray-400">[OK] Cloud Infrastructure (AWS, Azure)</p>
                  <p className="text-gray-400">[OK] Container Orchestration (K8s, Docker)</p>
                  <p className="text-gray-400">[OK] IaC (Terraform, Ansible)</p>
                  <p className="text-gray-400">[OK] AI Integration (RAG, LLMs)</p>
                </div>
                <p className="text-gray-300 pt-2">
                  <span className="text-purple-400">Statut :</span> <span className="text-green-400">Prêt au déploiement</span>
                </p>
                <p className="text-gray-400 animate-pulse">
                  <span className="text-green-400">user@devops:~$</span> <span className="w-2 h-4 bg-gray-400 inline-block align-middle"></span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;