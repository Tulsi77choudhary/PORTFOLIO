import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800/30 py-12 backdrop-blur-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-3xl font-extrabold text-white mb-2 tracking-wide">
              TULSI CHOUDHARY<span className="text-accent">..</span>
            </h3>
            <p className="text-gray-300">
              Crafting cutting-edge solutions in Full Stack Web Development.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-8">
            <a
              href="https://github.com/Tulsi77choudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/tulsi-choudhary-994058263/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={28} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12">
          <div className="w-full h-px bg-gradient-to-r from-purple-700 via-gray-600 to-purple-700"></div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} <span className="text-white font-medium">Tulsi choudhary</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;