import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileText } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Profil', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Expériences', href: '#experience' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // ✅ CORRECTION : On force le scroll manuellement via JavaScript
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // On empêche le navigateur de juste changer l'URL
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // 1. On ferme le menu mobile d'abord
      setIsOpen(false);
      
      // 2. On scrolle vers l'élément de manière fluide
      element.scrollIntoView({ behavior: 'smooth' });

      // 3. (Optionnel) On met à jour l'URL sans recharger la page
      window.history.pushState(null, '', href);
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-devops-dark/90 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center space-x-2 text-devops-accent cursor-pointer" onClick={handleLogoClick}>
            <Terminal className="h-8 w-8" />
            <span className="font-mono font-bold text-xl tracking-tighter text-white">MAHJOUBI_DEV</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  // ✅ APPEL DE LA FONCTION JS
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-300 hover:text-devops-accent hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 code-font cursor-pointer"
                >
                  <span className="text-devops-accent mr-1">./</span>{link.name}
                </a>
              ))}
              <a 
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-devops-accent hover:bg-sky-500 text-devops-dark font-bold py-2 px-4 rounded transition-colors duration-200"
              >
                <FileText size={16} className="mr-2" />
                CV.pdf
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-devops-light border-b border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                // ✅ APPEL DE LA FONCTION JS ICI AUSSI
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                 <span className="text-devops-accent mr-2">&gt;</span>{link.name}
              </a>
            ))}
             <a 
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center mt-4 bg-devops-accent hover:bg-sky-500 text-devops-dark font-bold py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center"
              >
                <FileText size={16} className="mr-2" />
                Télécharger CV
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;