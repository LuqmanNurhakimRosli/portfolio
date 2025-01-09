import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function MainContent(props) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const words = ['Student', 'Developer', 'Programmer'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      className={`flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center ${
        props.darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <div className="max-w-4xl w-full space-y-8">

        {/* Profile Image */}
        <div className="relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img
              src="/images/gambar-luqman.jpg"
              alt="Luqman Nurhakim"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-xl mx-auto border-4 border-white hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Hi Friends! 👋
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl">
              I'm{' '}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Luqman Nurhakim
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl"
          >
            I am a{' '}
            <span className="font-semibold">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[currentWordIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block text-blue-500"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Currently having internship in Dagang Net Technologies Sdn Bhd, Cyberjaya.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
