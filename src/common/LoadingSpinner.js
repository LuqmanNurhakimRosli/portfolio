import React from 'react';

function LoadingSpinner({ darkMode }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        {/* Outer spinner */}
        <div className={`
          w-16 h-16 rounded-full
          border-4 border-t-4 
          ${darkMode 
            ? 'border-gray-700 border-t-blue-500' 
            : 'border-gray-200 border-t-blue-600'}
          animate-spin
        `}/>
        
        {/* Inner spinner */}
        <div className={`
          absolute top-1 left-1
          w-14 h-14 rounded-full
          border-4 border-t-4
          ${darkMode 
            ? 'border-gray-800 border-t-purple-500' 
            : 'border-gray-100 border-t-purple-600'}
          animate-spin
          animate-duration-1000
        `}/>
      </div>
      
      {/* Loading text */}
      <p className={`
        mt-4 text-lg font-semibold
        ${darkMode ? 'text-gray-200' : 'text-gray-700'}
      `}>
        Loading...
      </p>
    </div>
  );
}

export default LoadingSpinner;