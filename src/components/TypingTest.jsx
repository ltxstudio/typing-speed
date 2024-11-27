import React, { useState, useEffect } from 'react';
import { sampleTexts } from '../data/sampleText';

const TypingTest = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [errorCount, setErrorCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [realTimeSpeed, setRealTimeSpeed] = useState(0);

  useEffect(() => {
    const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    setText(randomText);
  }, []);

  useEffect(() => {
    let interval;
    if (!finished && startTime) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime, finished]);

  const handleInputChange = (e) => {
    const { value } = e.target;

    if (!startTime) setStartTime(Date.now());
    setInput(value);

    const errors = value
      .split('')
      .filter((char, idx) => char !== text[idx]).length;
    setErrorCount(errors);

    const words = value.trim().split(' ').length;
    const timeTaken = (Date.now() - startTime) / 1000;
    const speed = Math.round((words / timeTaken) * 60);
    setRealTimeSpeed(speed);

    if (value === text) {
      setFinished(true);
      const totalTimeTaken = (Date.now() - startTime) / 1000;
      const totalWords = text.split(' ').length;
      const finalSpeed = Math.round((totalWords / totalTimeTaken) * 60);
      onComplete({ speed: finalSpeed, timeTaken: totalTimeTaken, errors });
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
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <p className="text-lg font-medium mb-4 text-gray-700 border-b pb-2">{text}</p>
      
      {/* Input Textarea */}
      <textarea
        disabled={finished}
        value={input}
        onChange={handleInputChange}
        className="w-full h-28 border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        placeholder="Start typing here..."
      ></textarea>
      
      {/* Speed and Error Display */}
      <div className="flex justify-between mt-4 text-sm text-gray-600">
        <div className="flex items-center space-x-4">
          <p>Errors: {errorCount}</p>
          <p>WPM: {realTimeSpeed}</p>
        </div>
        <div>
          <p>Time: {elapsedTime}s</p>
        </div>
      </div>

      {/* Test Completed Message */}
      {finished && (
        <div className="mt-4 text-center">
          <p className="text-sm text-green-500 font-semibold">Test Completed!</p>
          <button
            onClick={restartTest}
            className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200"
          >
            Restart Test
          </button>
        </div>
      )}
    </div>
  );
};

export default TypingTest;
