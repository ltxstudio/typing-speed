import React, { useState } from 'react';
import Header from './components/Header';
import TypingTest from './components/TypingTest';
import Results from './components/Results';

const App = () => {
  const [results, setResults] = useState(null);

  const resetTest = () => setResults(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        {!results ? (
          <TypingTest onComplete={setResults} />
        ) : (
          <Results results={results} resetTest={resetTest} />
        )}
      </main>
    </div>
  );
};

export default App;
