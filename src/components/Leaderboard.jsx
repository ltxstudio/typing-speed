import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "scores"), orderBy("score", "asc"), limit(10));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const scoresList = snapshot.docs.map((doc) => doc.data());
      setScores(scoresList);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-center mb-6">Leaderboard</h1>
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">Time (s)</th>
              <th className="px-4 py-2">Accuracy (%)</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((entry, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{entry.score}</td>
                <td className="border px-4 py-2">{entry.accuracy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
