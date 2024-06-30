import React, { useMemo, useState } from 'react';

const BMICal = () => {
  const [height, setHeight] = useState(140);
  const [weight, setWeight] = useState(40);
  const [ansStr, setAnsStr] = useState('Check your BMI');
  const [color,setColor] = useState('text-black')

  function handleHeight(e) {
    setHeight(e.target.value);
  }

  function handleWeight(e) {
    setWeight(e.target.value);
  }

  useMemo(() => {
    const calHeight = height / 100;
    const ans = (weight / (calHeight * calHeight)).toFixed(1);

    if (ans < 18.5) {
        setAnsStr(`Underweight: BMI ${ans}`);
        setColor('text-red-500');
      } else if (ans >= 18.5 && ans <= 24.9) {
        setAnsStr(`Normal weight: BMI ${ans}`);
        setColor('text-green-500');
      } else if (ans >= 25 && ans <= 29.9) {
        setAnsStr(`Overweight: BMI ${ans}`);
        setColor('text-yellow-500');
      } else {
        setAnsStr(`Obesity: BMI ${ans}`);
        setColor('text-red-500');
      }
  }, [weight, height]);

  return (
    <div className="flex flex-col items-center p-8 sm:p-16 bg-gray-900 min-h-screen">
    <h1 className="text-3xl font-bold mb-6 text-rose-400 my-32">BMI Calculator</h1>
    <div className="w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-md ">
      <div className="mb-4">
        <p className="text-lg font-medium text-white">Weight: {weight} kg</p>
        <input
          type="range"
          step="1"
          min="40"
          max="200"
          value={weight}
          onChange={handleWeight}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium text-white">Height: {height} cm</p>
        <input
          type="range"
          step="1"
          min="140"
          max="220"
          value={height}
          onChange={handleHeight}
          className="w-full"
        />
      </div>
      <div>
        <p className={`text-xl font-semibold ${color}`}>{ansStr}</p>
      </div>
    </div>
  </div>
  
  );
};

export default BMICal;
