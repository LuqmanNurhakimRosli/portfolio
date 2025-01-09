import React from 'react';
import { motion } from 'framer-motion';

function Card(props) {
  const info = props.card.status === 'Beginner' ? 'Beginner' : 'Immediate';

  return (
    <motion.div
      className="font-mono border border-gray-300 rounded-lg shadow-lg p-4 bg-indigo-300 text-center flex flex-col space-y-2 w-48"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={props.card.image}
        alt={props.card.title}
        className="mx-auto w-16 h-16 object-contain mb-2"
      />
      <div className="border bg-white border-gray-300 rounded-lg shadow-lg font-semibold text-base text-black px-6 w-fit mx-auto">
        {info}
      </div>
      <div>
        <h2 className="text-xl font-semibold">{props.card.title}</h2>
      </div>
    </motion.div>
  );
}

export default Card;
