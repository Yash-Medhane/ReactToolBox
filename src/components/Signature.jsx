import React, { useRef, useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const SignatureApp = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [canvasColor, setCanvasColor] = useState('#ffffff');
  const [lineWidth, setLineWidth] = useState(1);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 800;
    canvas.height = 500;
    ctxRef.current = canvas.getContext('2d');
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    setLastX(e.nativeEvent.offsetX);
    setLastY(e.nativeEvent.offsetY);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const ctx = ctxRef.current;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
    setLastX(e.nativeEvent.offsetX);
    setLastY(e.nativeEvent.offsetY);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'canvas-image.png';
    link.href = canvas.toDataURL();
    link.click();

    localStorage.setItem('canvasContents', canvas.toDataURL());
  };

  const retrieveCanvas = () => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    let savedCanvas = localStorage.getItem('canvasContents');

    if (savedCanvas) {
      let img = new Image();
      img.src = savedCanvas;
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      };
    } else {
      alert('No canvas content saved');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl mb-6 text-gray-400">Signature App</h1>
      <div className="w-full max-w-4xl">
        <div className="flex flex-wrap justify-between mb-4">
          <div className="block w-full sm:w-auto mb-2 sm:mb-0">
            <p className="text-center">Text color picker</p>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full sm:w-auto"
            />
          </div>
          <div className="block w-full sm:w-auto mb-2 sm:mb-0">
            <p className="text-center">Background</p>
            <input
              type="color"
              value={canvasColor}
              onChange={(e) => setCanvasColor(e.target.value)}
              className="w-full sm:w-auto"
            />
          </div>
          <div className="block w-full sm:w-auto mb-2 sm:mb-0">
            <p className="text-center">Line width</p>
            <select
              value={lineWidth}
              onChange={(e) => setLineWidth(e.target.value)}
              className="w-full sm:w-auto"
            >
              <option value="1">1px</option>
              <option value="3">3px</option>
              <option value="5">5px</option>
              <option value="7">7px</option>
              <option value="9">9px</option>
              <option value="11">11px</option>
            </select>
          </div>
        </div>
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
          className="w-full border-2 border-silver mb-4"
          style={{ backgroundColor: canvasColor }}
        />
        <div className="flex flex-wrap justify-between">
          <button
            type="button"
            onClick={clearCanvas}
            className="btn btn-danger bg-red-500 text-white py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-2"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={saveCanvas}
            className="btn btn-success bg-green-500 text-white py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-2"
          >
            Save & Download
          </button>
          <button
            type="button"
            onClick={retrieveCanvas}
            className="btn btn-warning bg-blue-500 text-white py-2 px-4 rounded"
          >
            Retrieve Canvas
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignatureApp;
