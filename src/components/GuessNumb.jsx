import React, { useState } from 'react';

const GuessTheNumberGame = () => {
  const [userNumber, setUserNumber] = useState('');
  const [message, setMessage] = useState('');
  const [compNumber, setCompNumber] = useState(Math.floor(Math.random() * 100));

  const handleSubmit = (event) => {
    event.preventDefault();
    const num = parseInt(userNumber);
    
    if (num === compNumber) {
      setMessage('Congratulations!! Game has been reset.');
      setCompNumber(Math.floor(Math.random() * 100));
    } else if (num < compNumber) {
      setMessage('Number is too small!');
    } else {
      setMessage('Number is too large!');
    }

    setUserNumber('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-6 text-gray-400">Guess the Number</h1>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="number"
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
          required
          className="p-2 mr-4 w-20 text-lg bg-gray-700 text-gray-300 border border-gray-600 rounded focus:outline-none focus:border-gray-300"
        />
        <button type="submit" className="p-2 text-lg bg-indigo-600 text-white rounded hover:bg-indigo-800">
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-gray-400">{message}</p>}
    </div>
  );
};

export default GuessTheNumberGame;
