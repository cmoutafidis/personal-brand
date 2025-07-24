import React from 'react';
import { Link } from 'react-router-dom';
import {ChevronUp, Github, createLucideIcon, Facebook, Linkedin} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const XIcon = createLucideIcon("X", [
    [
      "path",
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
        stroke: "none",
        fill: "currentColor",
      },
    ],
  ]);

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
              <img
                src="/fiji_solutions.png"
                alt="Fiji Solutions Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-display font-bold">Fiji Solutions</span>
            </div>
            <p className="text-gray-400 mb-4">
              We help your business grow online. Our strategies ensure your growth and success.
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
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578271845868"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/fijisolutionsnet"
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
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/legal"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Legal
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
                  Finance Analytics
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
