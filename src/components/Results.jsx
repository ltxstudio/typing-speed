import React from 'react';
import { FaRedo, FaShareAlt, FaClipboard } from 'react-icons/fa';

const Results = ({ results, resetTest }) => (
  <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-xl max-w-xl mx-auto">
    <h2 className="text-3xl font-extrabold text-center mb-6 animate__animated animate__fadeIn">Results</h2>

    {/* Typing Speed */}
    <p className="text-xl mb-3">
      <span className="text-lg font-semibold">Typing Speed: </span>
      <span className="text-2xl font-bold text-yellow-300">{results.speed} WPM</span>
    </p>

    {/* Time Taken */}
    <p className="text-xl mb-3">
      <span className="text-lg font-semibold">Time Taken: </span>
      <span className="text-2xl font-bold">{results.timeTaken} seconds</span>
    </p>

    {/* Errors */}
    <p className="text-xl mb-6">
      <span className="text-lg font-semibold">Errors: </span>
      <span className="text-2xl font-bold text-red-300">{results.errors}</span>
    </p>

    {/* Action Buttons */}
    <div className="flex justify-center space-x-6">
      {/* Retry Button */}
      <button
        onClick={resetTest}
        className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
      >
        <FaRedo className="inline-block mr-2" />
        Retry Test
      </button>

      {/* Share Button */}
      <button
        onClick={() => alert("Share feature coming soon!")}
        className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
      >
        <FaShareAlt className="inline-block mr-2" />
        Share Results
      </button>

      {/* Copy Results Button */}
      <button
        onClick={() => {
          const resultText = `Typing Speed: ${results.speed} WPM, Time Taken: ${results.timeTaken} seconds, Errors: ${results.errors}`;
          navigator.clipboard.writeText(resultText);
          alert("Results copied to clipboard!");
        }}
        className="flex items-center bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-300 transform hover:scale-105"
      >
        <FaClipboard className="inline-block mr-2" />
        Copy Results
      </button>
    </div>
  </div>
);

export default Results;
