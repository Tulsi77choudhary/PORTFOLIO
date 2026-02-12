import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-200 bg-opacity-90 backdrop-blur-sm">
      <div className="relative">
        {/* Outer rotating circle */}
        <motion.div
          className="absolute inset-0 border-4 border-transparent border-t-primary border-r-primary rounded-full w-16 h-16"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* Inner rotating circle */}
        <motion.div
          className="absolute inset-0 border-4 border-transparent border-b-secondary border-l-secondary rounded-full w-12 h-12 m-2"
          animate={{ 
            rotate: -360,
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
        />
        
        {/* Center pulsing dot */}
        <motion.div
          className="absolute inset-0 m-7 bg-gradient-to-r from-primary to-secondary rounded-full w-2 h-2"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
            boxShadow: [
              "0 0 0 0 rgba(255,255,255,0.4)",
              "0 0 20px 10px rgba(255,255,255,0.2)",
              "0 0 0 0 rgba(255,255,255,0.4)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Loading text */}
      <motion.p
        className="absolute mt-24 text-white font-medium"
        animate={{
          opacity: [0.5, 1, 0.5],
          y: [0, -2, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Loading
        <motion.span
          animate={{
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        >...</motion.span>
      </motion.p>
    </div>
  );
};

export default Loader;