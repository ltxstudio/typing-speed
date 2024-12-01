import React from "react";
import { FaRedo, FaShareAlt, FaClipboard, FaFileDownload } from "react-icons/fa";

const Results = ({ results, resetTest }) => {
  // Helper to download results
  const saveResultsToFile = () => {
    const resultText = `Typing Speed: ${results.speed} WPM\nTime Taken: ${results.timeTaken} seconds\nErrors: ${results.errors}\nAccuracy: ${(
      ((results.totalWords - results.errors) / results.totalWords) *
      100
    ).toFixed(2)}%`;
    const blob = new Blob([resultText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "TypingTestResults.txt";
    link.click();
  };

  const accuracy =
    ((results.totalWords - results.errors) / results.totalWords) * 100;

  return (
    <div className="p-8 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 text-white rounded-xl shadow-lg max-w-2xl mx-auto mt-12 md:mt-20 transition-transform transform hover:scale-105">
      <h2 className="text-4xl font-extrabold text-center mb-8 animate__animated animate__fadeInUp">
        Your Typing Test Results
      </h2>

      {/* Result Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        {/* Typing Speed */}
        <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Typing Speed</h3>
          <p className="text-3xl font-bold text-yellow-300">{results.speed} WPM</p>
        </div>

        {/* Time Taken */}
        <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Time Taken</h3>
          <p className="text-3xl font-bold">{results.timeTaken} seconds</p>
        </div>

        {/* Errors */}
        <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Errors</h3>
          <p className="text-3xl font-bold text-red-400">{results.errors}</p>
        </div>

        {/* Accuracy */}
        <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Accuracy</h3>
          <p className="text-3xl font-bold text-green-400">{accuracy.toFixed(2)}%</p>
        </div>
      </div>

      {/* Motivational Message */}
      <div className="mt-6 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg text-center">
        <p className="text-lg font-medium">
          Great job! Keep practicing to improve your typing speed and accuracy.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Retry Button */}
        <button
          onClick={resetTest}
          className="flex items-center justify-center bg-blue-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 transform hover:scale-105"
        >
          <FaRedo className="inline-block mr-2" />
          Retry Test
        </button>

        {/* Share Button */}
        <button
          onClick={() => alert("Share feature coming soon!")}
          className="flex items-center justify-center bg-green-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition duration-300 transform hover:scale-105"
        >
          <FaShareAlt className="inline-block mr-2" />
          Share Results
        </button>

        {/* Copy Results Button */}
        <button
          onClick={() => {
            const resultText = `Typing Speed: ${results.speed} WPM, Time Taken: ${results.timeTaken} seconds, Errors: ${results.errors}, Accuracy: ${accuracy.toFixed(
              2
            )}%`;
            navigator.clipboard.writeText(resultText);
            alert("Results copied to clipboard!");
          }}
          className="flex items-center justify-center bg-yellow-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-yellow-700 hover:shadow-lg transition duration-300 transform hover:scale-105"
        >
          <FaClipboard className="inline-block mr-2" />
          Copy Results
        </button>

        {/* Save Results Button */}
        <button
          onClick={saveResultsToFile}
          className="flex items-center justify-center bg-purple-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg transition duration-300 transform hover:scale-105"
        >
          <FaFileDownload className="inline-block mr-2" />
          Save Results
        </button>
      </div>
    </div>
  );
};

export default Results;
