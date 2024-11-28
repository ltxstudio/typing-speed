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
    <div className="p-6 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 text-white rounded-lg shadow-xl max-w-xl mx-auto md:max-w-2xl transition-all duration-300">
      <h2 className="text-3xl font-extrabold text-center mb-6 animate__animated animate__fadeIn">
        Results
      </h2>

      {/* Typing Speed */}
      <p className="text-xl mb-3">
        <span className="text-lg font-semibold">Typing Speed: </span>
        <span className="text-2xl font-bold text-yellow-300">
          {results.speed} WPM
        </span>
      </p>

      {/* Time Taken */}
      <p className="text-xl mb-3">
        <span className="text-lg font-semibold">Time Taken: </span>
        <span className="text-2xl font-bold">{results.timeTaken} seconds</span>
      </p>

      {/* Errors */}
      <p className="text-xl mb-3">
        <span className="text-lg font-semibold">Errors: </span>
        <span className="text-2xl font-bold text-red-300">{results.errors}</span>
      </p>

      {/* Accuracy */}
      <p className="text-xl mb-6">
        <span className="text-lg font-semibold">Accuracy: </span>
        <span className="text-2xl font-bold text-green-300">
          {accuracy.toFixed(2)}%
        </span>
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Retry Button */}
        <button
          onClick={resetTest}
          className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          <FaRedo className="inline-block mr-2" />
          Retry Test
        </button>

        {/* Share Button */}
        <button
          onClick={() => alert("Share feature coming soon!")}
          className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
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
          className="flex items-center justify-center bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-300 transform hover:scale-105"
        >
          <FaClipboard className="inline-block mr-2" />
          Copy Results
        </button>

        {/* Save Results Button */}
        <button
          onClick={saveResultsToFile}
          className="flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105"
        >
          <FaFileDownload className="inline-block mr-2" />
          Save Results
        </button>
      </div>
    </div>
  );
};

export default Results;
