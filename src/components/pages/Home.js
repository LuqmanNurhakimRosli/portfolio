import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import MainContent from '../MainContent';
import Card from '../render/ProgrammingCard';
import cardData from '../Data/cardData';
import { motion } from 'framer-motion';

function Home() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  const cardArray = cardData.map((card) => (
    <Card key={card.id} card={card} />
  ));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        <MainContent darkMode={darkMode} />
        <div className="text-center bg-stone-600 py-8">
          <h1 className="font-mono text-4xl text-white pt-4">
            Programming Languages
          </h1>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
              {cardArray}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default Home;
