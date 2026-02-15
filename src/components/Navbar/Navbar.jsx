import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
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
  const [isOpen, setIsOpen] = useState(false);

  // Scroll listener for sticky effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled || isOpen ? 'bg-[#0f172a]/95 shadow-xl backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="home" smooth={true} className="cursor-pointer">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="text-2xl font-extrabold tracking-tighter text-blue-500"
            >
              TC<span className="text-white">.</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                activeClass="text-blue-500"
                duration={500}
                offset={-70}
                className="text-gray-300 hover:text-blue-400 font-medium cursor-pointer transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-5">
            {/* Desktop Socials */}
            <div className="hidden md:flex items-center space-x-5">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, color: '#3b82f6' }}
                    className="text-gray-400 text-xl transition-colors"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Toggle Button */}
            <button
              aria-label="Toggle Menu"
              className="md:hidden text-4xl text-blue-500 focus:outline-none z-[110]"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-0 left-0 w-full bg-[#0f172a] flex flex-col items-center justify-center md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-100 hover:text-blue-400 text-3xl font-semibold transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Socials */}
              <div className="flex space-x-10 pt-10">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a key={index} href={social.href} target="_blank" rel="noreferrer" className="text-gray-400 text-3xl">
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