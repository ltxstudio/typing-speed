import React, { useState, useEffect } from "react";
import { sampleTexts } from "../data/sampleText";
import { FaInfoCircle, FaPlayCircle, FaPauseCircle, FaRedo } from "react-icons/fa";
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
      className="p-8 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white rounded-lg shadow-2xl max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {finished && <Confetti />}
      <h2 className="text-4xl font-extrabold text-center mb-6">
        Typing Speed Test
      </h2>

      <div className="relative mb-6">
        <div className="text-lg font-mono bg-white text-gray-800 p-4 rounded-md shadow-inner">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className={`${
                input[index] === char
                  ? "text-green-600"
                  : input[index]
                  ? "text-red-500"
                  : ""
              }`}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="w-full bg-gray-300 h-2 rounded-full mt-4">
          <div
            className="h-2 bg-green-400 rounded-full transition-all"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        <p className="text-right text-sm mt-2">
          Progress: <span className="font-semibold">{completionPercentage}%</span>
        </p>
      </div>

      <textarea
        disabled={finished || isPaused}
        value={input}
        onChange={handleInputChange}
        className="w-full h-32 bg-white text-gray-800 border-2 border-indigo-300 rounded-lg p-4 focus:ring-2 focus:ring-purple-400 shadow-sm"
        placeholder="Start typing here..."
      ></textarea>

      <div className="flex justify-between mt-4 text-sm">
        <p>
          <span className="font-semibold">Errors:</span>{" "}
          <span className="text-red-400">{errorCount}</span>
        </p>
        <p>
          <span className="font-semibold">WPM:</span>{" "}
          <span className="text-green-300">{realTimeSpeed}</span>
        </p>
        <p>
          <span className="font-semibold">Words Typed:</span> {typedWords}
        </p>
        <p>
          <span className="font-semibold">Time:</span> {Math.floor(elapsedTime / 60)}:
          {elapsedTime % 60}s
        </p>
      </div>

      <div className="mt-6 flex justify-center space-x-4">
        {finished ? (
          <button
            onClick={restartTest}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full shadow-md"
          >
            <FaRedo className="inline mr-2" />
            Restart Test
          </button>
        ) : (
          <button
            onClick={togglePause}
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-full shadow-md"
          >
            {isPaused ? (
              <>
                <FaPlayCircle className="inline mr-2" />
                Resume
              </>
            ) : (
              <>
                <FaPauseCircle className="inline mr-2" />
                Pause
              </>
            )}
          </button>
        )}
      </div>

      <button
        onClick={toggleInfo}
        className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-full shadow-lg text-white"
      >
        <FaInfoCircle className="inline mr-2" />
        {showInfo ? "Hide Info" : "Show Info"}
      </button>

      {showInfo && (
        <motion.div
          className="mt-4 bg-white text-gray-800 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-purple-500 mb-3">
            How to Use
          </h3>
          <p className="leading-relaxed">
            Type the text as it appears above. Your speed and accuracy are tracked
            in real time. Complete the test to see your results.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TypingTest;
