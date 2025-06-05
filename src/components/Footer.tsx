import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp, Waves, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="flex justify-center mb-10">
          <button
            onClick={scrollToTop}
            className="p-4 bg-primary-600 hover:bg-primary-700 rounded-full transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-display font-bold">Fiji Solutions</span>
            </div>
            <p className="text-gray-400 mb-4">
              Software engineer specializing in web2 and web3 technologies. Creating innovative solutions for the digital world.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/fiji" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/fiji_solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/charalampos-moutafidis-71330414a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Projects</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://tlx.fijisolutions.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  TLX Finance Analytics
                </a>
              </li>
              <li>
                <a
                  href="https://catalytics.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Catalytics Pro
                </a>
              </li>
              <li className="text-gray-400">DeFi Dashboard</li>
              <li className="text-gray-400">Blockchain Explorer</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Fiji Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;