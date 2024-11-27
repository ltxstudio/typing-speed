import React, { useState, useEffect } from 'react';
import { sampleTexts } from '../data/sampleText';

const TypingTest = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [errorCount, setErrorCount] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    setText(randomText);
  }, []);

  const handleInputChange = (e) => {
    const { value } = e.target;

    if (!startTime) setStartTime(Date.now());
    setInput(value);

    const errors = value
      .split('')
      .filter((char, idx) => char !== text[idx]).length;
    setErrorCount(errors);

    if (value === text) {
      setFinished(true);
      const timeTaken = (Date.now() - startTime) / 1000;
      const words = text.split(' ').length;
      const speed = Math.round((words / timeTaken) * 60);
      onComplete({ speed, timeTaken, errors });
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <p className="text-lg font-medium mb-4 text-gray-700 border-b pb-2">{text}</p>
      <textarea
        disabled={finished}
        value={input}
        onChange={handleInputChange}
        className="w-full h-28 border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Start typing here..."
      ></textarea>
      <div className="flex justify-between mt-4">
        <p className="text-sm text-gray-500">Errors: {errorCount}</p>
        {finished && <p className="text-sm text-green-500">Test completed!</p>}
      </div>
    </div>
  );
};

export default TypingTest;
