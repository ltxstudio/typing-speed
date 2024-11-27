import React, { useState, useEffect } from 'react';
import { sampleTexts } from '../data/sampleText';
import { FaInfoCircle, FaListAlt, FaPlayCircle, FaQuestionCircle, FaPauseCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TypingTest = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [errorCount, setErrorCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [realTimeSpeed, setRealTimeSpeed] = useState(0);
  const [typedWords, setTypedWords] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [highScore, setHighScore] = useState(localStorage.getItem('highScore') || 0);
  const [difficulty, setDifficulty] = useState('medium');

  // Set random sample text on component mount
  useEffect(() => {
    const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    setText(randomText);
  }, []);

  // Update elapsed time and real-time speed
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

    // Calculate error count
    const errors = value.split('').filter((char, idx) => char !== text[idx]).length;
    setErrorCount(errors);

    // Calculate real-time typing speed (WPM)
    const wordsTyped = value.trim().split(' ').length;
    setTypedWords(wordsTyped);

    const timeTaken = (Date.now() - startTime) / 1000;
    const speed = Math.round((wordsTyped / timeTaken) * 60);
    setRealTimeSpeed(speed);

    // Check if typing test is complete
    if (value === text) {
      setFinished(true);
      const totalTimeTaken = (Date.now() - startTime) / 1000;
      const totalWords = text.split(' ').length;
      const finalSpeed = Math.round((totalWords / totalTimeTaken) * 60);
      onComplete({ speed: finalSpeed, timeTaken: totalTimeTaken, errors });

      // Update high score if needed
      if (finalSpeed > highScore) {
        setHighScore(finalSpeed);
        localStorage.setItem('highScore', finalSpeed);
      }
    }
  };

  const restartTest = () => {
    setText(sampleTexts[Math.floor(Math.random() * sampleTexts.length)]);
    setInput('');
    setErrorCount(0);
    setElapsedTime(0);
    setStartTime(null);
    setFinished(false);
    setRealTimeSpeed(0);
    setTypedWords(0);
    setIsPaused(false);
  };

  // Highlight text by word and show spaces correctly
  const getHighlightedText = () => {
    const words = text.split(' '); // Split the text by words, not characters
    let currentIndex = 0; // To track the position of the user's input

    return words.map((word, wordIndex) => {
      // Get the user's input until the current word
      const userInput = input.substring(currentIndex, currentIndex + word.length);

      // Update the currentIndex for the next word
      currentIndex += word.length + 1; // +1 for the space after each word

      return (
        <span key={wordIndex}>
          {word.split('').map((char, charIndex) => {
            // Highlight the character based on whether it matches the input
            const isCorrect = userInput[charIndex] === char;
            return (
              <span
                key={charIndex}
                className={`inline-block ${isCorrect ? 'text-green-500' : 'text-red-500'}`}
              >
                {char}
              </span>
            );
          })}
          {/* Render space between words */}
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      );
    });
  };

  const toggleInfo = () => setShowInfo(!showInfo);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <motion.div
      className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Typing Test Section */}
      <p className="text-lg font-medium mb-4 text-gray-700 border-b pb-2">
        {getHighlightedText()}
      </p>

      {/* Textarea Input */}
      <textarea
        disabled={finished || isPaused}
        value={input}
        onChange={handleInputChange}
        className="w-full h-28 border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        placeholder="Start typing here..."
      ></textarea>

      {/* Speed, Errors, Time and Words Display */}
      <div className="flex justify-between mt-4 text-sm text-gray-600">
        <div className="flex items-center space-x-4">
          <p>Errors: {errorCount}</p>
          <p>WPM: {realTimeSpeed}</p>
          <p>Words Typed: {typedWords}</p>
        </div>
        <div>
          <p>Time: {Math.floor(elapsedTime / 60)}:{elapsedTime % 60}s</p>
        </div>
      </div>

      {/* High Score Display */}
      <div className="mt-4 text-sm text-gray-600">
        <p>High Score: {highScore} WPM</p>
      </div>

      {/* Test Completion Message */}
      {finished && (
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm text-green-500 font-semibold">Test Completed!</p>
          <button
            onClick={restartTest}
            className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200"
          >
            Restart Test
          </button>
        </motion.div>
      )}

      {/* Pause/Resume Button */}
      {!finished && (
        <div className="mt-4 text-center">
          <button
            onClick={togglePause}
            className="px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-all duration-200"
          >
            {isPaused ? 'Resume' : 'Pause'}
          </button>
        </div>
      )}

      {/* About, Features, and How to Use Section */}
      <div className="mt-8">
        <button
          onClick={toggleInfo}
          className="px-4 py-2 text-white bg-blue-600 rounded-full mb-4"
        >
          {showInfo ? 'Hide Info' : 'Show Info'}
        </button>

        {showInfo && (
          <motion.div
            className="p-4 bg-gray-100 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">About the Typing Test</h2>
            <p className="text-gray-600 mb-4">
              This is a simple and fun typing test application where you can measure your typing speed and accuracy.
            </p>

            <h3 className="text-xl font-semibold text-blue-500 mb-3">Features</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Measure typing speed in words per minute (WPM)</li>
              <li>Track typing accuracy (errors)</li>
              <li>Real-time speed calculation</li>
              <li>Interactive feedback with color coding (green for correct, red for errors)</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-500 mb-3 mt-4">How to Use</h3>
            <p className="text-gray-600">
              Simply start typing the text that appears on the screen. The application will track your speed and errors.
              Once you finish, your results will be shown.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TypingTest;
