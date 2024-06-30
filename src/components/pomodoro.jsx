import React, { useEffect, useState, useRef } from 'react';

const App = () => {
  const [sec, setSec] = useState(59);
  const [minute, setMinute] = useState(25);
  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      if (minute > 0 || sec > 0) {
        interval = setInterval(() => {
          if (sec > 0) {
            setSec(sec - 1);
          } else if (sec === 0) {
            if (minute > 0) {
              setSec(59);
              setMinute(minute - 1);
            }
          }
        }, 1000);
      } else {
        setIsActive(false);
        playAudio();
      }
    } else if (!isActive && sec !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minute, sec]);

  const handleStart = () => {
    setIsActive(true);
    if(minute === 0 && sec === 0)
        {
            setSec(59)
    setMinute(24)
        }
        else{
            setSec(sec)
            setMinute(minute) 
        }
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white h-screen flex flex-col items-center justify-center">
      <img src="timer.png" alt="Placeholder" className="mb-4" />
      {minute === 0 && sec === 0 ? (
        <h1 className="text-3xl font-bold">Time Out, let's take a Break</h1>
      ) : (
        <h1 className="text-3xl font-bold">Time Left: {minute} min {sec} sec</h1>
      )}
      <div className="mt-4">
        <button
          onClick={handleStart}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded"
        >
          Stop
        </button>
      </div>
      <audio ref={audioRef} src="timeout.mp3"></audio>
    </div>
  );
};

export default App;
