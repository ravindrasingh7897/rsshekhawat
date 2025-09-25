// @flow strict
'use client';
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Close mobile menu after clicking
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] transition-all duration-300 ${isMobile ? 'hidden' : 'block'}`}>
        <div className="bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl shadow-2xl border border-gray-300/50 dark:border-gray-700/50 rounded-full px-8 py-3">
          <div className="flex items-center justify-center">
            <ul className="flex items-center justify-center flex-row space-x-6" id="navbar-default">
              <li>
                <Link 
                  className="block px-3 py-2 no-underline outline-none hover:no-underline" 
                  href="/#experience"
                  onClick={(e) => handleSmoothScroll(e, 'experience')}
                >
                  <div className="text-sm text-gray-700 dark:text-white transition-colors duration-300 hover:text-pink-600 font-medium">EXPERIENCE</div>
                </Link>
              </li>
              <li>
                <Link 
                  className="block px-3 py-2 no-underline outline-none hover:no-underline" 
                  href="/#skills"
                  onClick={(e) => handleSmoothScroll(e, 'skills')}
                >
                  <div className="text-sm text-gray-700 dark:text-white transition-colors duration-300 hover:text-pink-600 font-medium">SKILLS</div>
                </Link>
              </li>
              <li>
                <Link 
                  className="block px-3 py-2 no-underline outline-none hover:no-underline" 
                  href="/#projects"
                  onClick={(e) => handleSmoothScroll(e, 'projects')}
                >
                  <div className="text-sm text-gray-700 dark:text-white transition-colors duration-300 hover:text-pink-600 font-medium">PROJECTS</div>
                </Link>
              </li>
              <li>
                <Link 
                  className="block px-3 py-2 no-underline outline-none hover:no-underline" 
                  href="/#education"
                  onClick={(e) => handleSmoothScroll(e, 'education')}
                >
                  <div className="text-sm text-gray-700 dark:text-white transition-colors duration-300 hover:text-pink-600 font-medium">EDUCATION</div>
                </Link>
              </li>
              <li>
                <Link 
                  className="block px-3 py-2 no-underline outline-none hover:no-underline" 
                  href="/#achievements"
                  onClick={(e) => handleSmoothScroll(e, 'achievements')}
                >
                  <div className="text-sm text-gray-700 dark:text-white transition-colors duration-300 hover:text-pink-600 font-medium">ACHIEVEMENTS</div>
                </Link>
              </li>
              <li>
                <Link 
                  className="block px-3 py-2 no-underline outline-none hover:no-underline" 
                  href="/#contact"
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                >
                  <div className="text-sm text-gray-700 dark:text-white transition-colors duration-300 hover:text-pink-600 font-medium">CONTACT</div>
                </Link>
              </li>
              <li className="ml-6 pl-6 border-l border-gray-300 dark:border-gray-600">
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${isMobile ? 'block' : 'hidden'}`}>
        {/* Mobile Header */}
        <div className="bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl shadow-lg border-b border-gray-300/50 dark:border-gray-700/50 mx-4 mt-4 rounded-2xl px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-gray-800 dark:text-white">
              Portfolio
            </div>
            
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={toggleMenu}
                className="text-gray-700 dark:text-white hover:text-pink-600 transition-colors duration-300 p-1"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <ul className="flex flex-col space-y-2">
                <li>
                  <Link 
                    className="block px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 no-underline outline-none transition-colors duration-300" 
                    href="/#experience"
                    onClick={(e) => handleSmoothScroll(e, 'experience')}
                  >
                    <div className="text-sm text-gray-700 dark:text-white hover:text-pink-600 font-medium">EXPERIENCE</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    className="block px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 no-underline outline-none transition-colors duration-300" 
                    href="/#skills"
                    onClick={(e) => handleSmoothScroll(e, 'skills')}
                  >
                    <div className="text-sm text-gray-700 dark:text-white hover:text-pink-600 font-medium">SKILLS</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    className="block px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 no-underline outline-none transition-colors duration-300" 
                    href="/#projects"
                    onClick={(e) => handleSmoothScroll(e, 'projects')}
                  >
                    <div className="text-sm text-gray-700 dark:text-white hover:text-pink-600 font-medium">PROJECTS</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    className="block px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 no-underline outline-none transition-colors duration-300" 
                    href="/#education"
                    onClick={(e) => handleSmoothScroll(e, 'education')}
                  >
                    <div className="text-sm text-gray-700 dark:text-white hover:text-pink-600 font-medium">EDUCATION</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    className="block px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 no-underline outline-none transition-colors duration-300" 
                    href="/#achievements"
                    onClick={(e) => handleSmoothScroll(e, 'achievements')}
                  >
                    <div className="text-sm text-gray-700 dark:text-white hover:text-pink-600 font-medium">ACHIEVEMENTS</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    className="block px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 no-underline outline-none transition-colors duration-300" 
                    href="/#contact"
                    onClick={(e) => handleSmoothScroll(e, 'contact')}
                  >
                    <div className="text-sm text-gray-700 dark:text-white hover:text-pink-600 font-medium">CONTACT</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;