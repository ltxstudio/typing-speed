import React, { useState, useEffect } from "react";
import { sampleTexts } from "../data/sampleText";
import { FaInfoCircle, FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

const TypingTest = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [errorCount, setErrorCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [realTimeSpeed, setRealTimeSpeed] = useState(0);
  const [typedWords, setTypedWords] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [highScore, setHighScore] = useState(localStorage.getItem("highScore") || 0);

  useEffect(() => {
    const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    setText(randomText);
  }, []);

  useEffect(() => {
    let interval;
    if (!finished && startTime && !isPaused) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime, finished, isPaused]);

  const handleInputChange = (e) => {
    const { value } = e.target;

    if (!startTime) setStartTime(Date.now());
    setInput(value);

    const errors = value.split("").filter((char, idx) => char !== text[idx]).length;
    setErrorCount(errors);

    const wordsTyped = value.trim().split(" ").length;
    setTypedWords(wordsTyped);

    const timeTaken = (Date.now() - startTime) / 1000;
    const speed = Math.round((wordsTyped / timeTaken) * 60);
    setRealTimeSpeed(speed);

    if (value === text) {
      setFinished(true);
      const totalTimeTaken = (Date.now() - startTime) / 1000;
      const totalWords = text.split(" ").length;
      const finalSpeed = Math.round((totalWords / totalTimeTaken) * 60);
      onComplete({ speed: finalSpeed, timeTaken: totalTimeTaken, errors });

      if (finalSpeed > highScore) {
        setHighScore(finalSpeed);
        localStorage.setItem("highScore", finalSpeed);
      }
    }
  };

  const restartTest = () => {
    setText(sampleTexts[Math.floor(Math.random() * sampleTexts.length)]);
    setInput("");
    setErrorCount(0);
    setElapsedTime(0);
    setStartTime(null);
    setFinished(false);
    setRealTimeSpeed(0);
    setTypedWords(0);
    setIsPaused(false);
  };

  const toggleInfo = () => setShowInfo(!showInfo);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const completionPercentage = ((input.length / text.length) * 100).toFixed(1);

  return (
    <motion.div
      className="p-6 bg-gradient-to-b from-blue-100 via-white to-gray-50 rounded-lg shadow-lg max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {finished && <Confetti />}
      <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
        Typing Test
      </h2>

      <div className="relative mb-4">
        <div className="text-gray-700 mb-2 font-medium">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className={`${
                input[index] === char ? "text-green-500" : input[index] ? "text-red-500" : ""
              }`}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="w-full bg-gray-300 h-2 rounded-full">
          <div
            className="h-2 bg-blue-500 rounded-full transition-all"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        <p className="text-right text-xs text-gray-500 mt-1">
          Progress: {completionPercentage}%
        </p>
      </div>

      <textarea
        disabled={finished || isPaused}
        value={input}
        onChange={handleInputChange}
        className="w-full h-28 border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-700"
        placeholder="Start typing here..."
      ></textarea>

      <div className="flex justify-between mt-4 text-sm">
        <p>Errors: <span className="text-red-500">{errorCount}</span></p>
        <p>WPM: <span className="text-green-500">{realTimeSpeed}</span></p>
        <p>Words Typed: {typedWords}</p>
        <p>
          Time: {Math.floor(elapsedTime / 60)}:{elapsedTime % 60}s
        </p>
      </div>

      <div className="mt-4 text-center">
        {finished ? (
          <button
            onClick={restartTest}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
          >
            Restart Test
          </button>
        ) : (
          <button
            onClick={togglePause}
            className="px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-all"
          >
            {isPaused ? "Resume" : "Pause"}
          </button>
        )}
      </div>

      <button
        onClick={toggleInfo}
        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-full"
      >
        {showInfo ? "Hide Info" : "Show Info"}
      </button>

      {showInfo && (
        <motion.div
          className="mt-4 bg-gray-100 p-4 rounded-lg shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold mb-2 text-blue-600">How to Use</h3>
          <p className="text-gray-700">
            Type the text as it appears above. Your speed and accuracy are
            tracked in real time.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TypingTest;
