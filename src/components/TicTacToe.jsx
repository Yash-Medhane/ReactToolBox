import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);
  const nextPlayer = isXNext ? 'X' : 'O';

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = nextPlayer;
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl mb-8 dark:text-white font-bold font-mono">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="w-24 h-24 text-3xl font-bold flex items-center justify-center bg-gradient-to-r from-slate-600 to-slate-800 text-white dark:bg-gray-700 dark:text-blue-300 rounded"
          >
            {value}
          </button>
        ))}
      </div>
      {winner && (
        <div className="mt-4 text-2xl dark:text-white">
          Winner: {winner}
        </div>
      )}
      {!winner && !board.includes(null) && (
        <div className="mt-4 text-2xl dark:text-white">
          It's a draw!
        </div>
      )}
      <button
        onClick={handleRestart}
        className="mt-6 p-2 bg-rose-300 hover:bg-rose-500 text-white rounded"
      >
        Restart Game
      </button>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;
