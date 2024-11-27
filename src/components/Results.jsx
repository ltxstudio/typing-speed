import React from 'react';
import { FaRedo } from 'react-icons/fa';

const Results = ({ results, resetTest }) => (
  <div className="p-6 bg-blue-100 rounded-lg shadow-lg text-center">
    <h2 className="text-2xl font-bold text-blue-600 mb-4">Results</h2>
    <p className="text-lg">Typing Speed: <span className="font-bold">{results.speed} WPM</span></p>
    <p className="text-lg">Time Taken: <span className="font-bold">{results.timeTaken} seconds</span></p>
    <p className="text-lg">Errors: <span className="font-bold">{results.errors}</span></p>
    <button
      onClick={resetTest}
      className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
    >
      <FaRedo className="inline-block mr-2" />
      Retry Test
    </button>
  </div>
);

export default Results;
