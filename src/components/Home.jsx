import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Home = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Typing Speed Test</h1>
      <p className="text-lg md:text-2xl mb-8 text-center max-w-md">
        Test your typing speed and challenge your friends on the leaderboard!
      </p>
      <Link to="/test">
        <button className="flex items-center px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          Get Started <ArrowRightIcon className="w-6 h-6 ml-2" />
        </button>
      </Link>
    </motion.div>
  );
};

export default Home;
