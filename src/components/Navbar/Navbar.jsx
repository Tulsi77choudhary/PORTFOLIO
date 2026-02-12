import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
// Naye icons import kiye
import { IoReorderThreeOutline, IoCloseOutline } from "react-icons/io5";

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Courses', to: 'courses' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/nikhiltelase' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/nikhiltelase' },
  { icon: FaInstagram, href: 'https://instagram.com/nikhiltelase17' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu ki state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-dark-200/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.1 }} className="text-xl font-bold text-primary text-blue-500 cursor-pointer">
            TC
          </motion.div>

          {/* Desktop Nav Items (Badi screen par dikhega) */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-300 hover:text-primary cursor-pointer transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Social Links (Desktop par dikhenge) */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: '#0EA5E9' }}
                    className="text-gray-300 hover:text-primary text-xl"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>

            {/* --- MOBILE HAMBURGER BUTTON --- */}
            <button
              className="md:hidden text-4xl text-primary focus:outline-none z-[110]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <IoCloseOutline /> : <IoReorderThreeOutline />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark-200/98 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)} // Click karte hi menu band
                  className="text-gray-300 hover:text-primary text-xl font-medium"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Social Links in Mobile Menu */}
              <div className="flex space-x-8 pt-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a key={index} href={social.href} target="_blank" className="text-gray-300 text-2xl">
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;