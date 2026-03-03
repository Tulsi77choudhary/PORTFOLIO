import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground.jsx";

const Hero = () => {
  return (
    <section
      className="relative z-20 min-h-screen mx-auto flex items-center overflow-hidden py-16 md:py-0"
      id="home"
    >
      <ParticlesBackground />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* RIGHT SIDE (IMAGE): Mobile pe UPAR dikhegi (order-first) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center relative order-first md:order-last"
        >
          {/* Background Glow Effect */}
          <div className="absolute w-56 h-56 sm:w-80 sm:h-80 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* Image Container - Perfect Round Shape */}
            <div className="w-56 h-56 sm:w-85 sm:h-90 rounded-full border-4 border-accent overflow-hidden shadow-[0_0_30px_rgba(var(--accent-rgb),0.3)]">
              <img
                src="/assets/tulsi.jpeg" // <--- Yahan apni photo ka path dalein
                alt="Tulsi Choudhary"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* LEFT SIDE (TEXT): Mobile pe NICHE dikhega */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 text-center md:text-left items-center md:items-start"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-accent block lg:inline">
                <TypeAnimation
                  sequence={[
                    "Tulsi Choudhary",
                    1000,
                    "a Developer",
                    1000,
                    "an Innovator",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-lg leading-relaxed">
              Java & SpringBoot, React Developer, passionate about building innovative
              solutions in Data Structures & Algorithms, and Web Development.
            </p>
          </div>

          {/* Buttons: Capsule Style (Rounded-Full) */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="border-2 border-white text-white font-medium hover:bg-white hover:text-black px-8 py-3 rounded-full transition-all transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="/assets/Tulsi_choudhary_resume.pdf"
              download
              className="bg-accent text-white font-medium border-2 border-accent hover:bg-transparent px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-accent/20"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Mouse Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-accent transition-all">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-accent rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;