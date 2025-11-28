import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-devops-dark py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 flex items-center justify-center gap-2">
          Conçu et développé avec <Heart size={16} className="text-red-500 fill-red-500" /> par Mahjoubi Abdessamad
        </p>
        <p className="text-gray-600 text-sm mt-2 font-mono">
          © {new Date().getFullYear()} • React • Tailwind • Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;