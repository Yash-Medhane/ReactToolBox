import React, { useState } from 'react';

const choices = ['Rock', 'Paper', 'Scissors'];

const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return "It's a Tie!";
  if (
    (userChoice === 'Rock' && computerChoice === 'Scissors') ||
    (userChoice === 'Paper' && computerChoice === 'Rock') ||
    (userChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    return 'You Win!';
  }
  return 'You Lose!';
};

const StonePaperscissor = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const playGame = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(randomChoice);
    setResult(getResult(choice, randomChoice));
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl mb-4 dark:text-white">Rock, Paper, Scissors</h1>
        <div className="flex space-x-4">
          {choices.map((choice) => (
            <button
              key={choice}
              onClick={() => playGame(choice)}
              className="p-2 bg-blue-500 text-white rounded"
            >
              {choice}
            </button>
          ))}
        </div>
        {result && (
          <div className="mt-6 text-center">
            <p className="text-xl dark:text-white">You chose: {userChoice}</p>
            <p className="text-xl dark:text-white">Computer chose: {computerChoice}</p>
            <p className="text-2xl font-bold mt-2 dark:text-white">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StonePaperscissor;
