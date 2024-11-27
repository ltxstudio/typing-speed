import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const TypingTest = () => {
  const sampleText = "The quick brown fox jumps over the lazy dog.";
  const [text, setText] = useState(sampleText);
  const [input, setInput] = useState("");
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [accuracy, setAccuracy] = useState(100);

  useEffect(() => {
    let timer;
    if (start && !completed) {
      timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [start, completed]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (!start) setStart(true);

    if (value === text) {
      setCompleted(true);
      saveScore(time, accuracy);
    }

    const correctChars = value.split("").filter((char, i) => char === text[i]).length;
    setAccuracy(Math.floor((correctChars / text.length) * 100));
  };

  const saveScore = async (score, accuracy) => {
    try {
      await addDoc(collection(db, "scores"), { score, accuracy, createdAt: new Date() });
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Typing Speed Test</h1>
        <p className="text-gray-600 text-lg text-center mb-4">{text}</p>
        <textarea
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={handleInputChange}
          disabled={completed}
          placeholder="Start typing..."
        />
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-700">Time: {time}s</p>
          <p className="text-gray-700">Accuracy: {accuracy}%</p>
        </div>
        {completed && (
          <div className="text-center mt-6">
            <p className="text-green-500 font-bold text-xl">Test Completed!</p>
            <p className="text-gray-600">Your time: {time}s</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TypingTest;
