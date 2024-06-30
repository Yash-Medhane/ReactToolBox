import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const TypingTest = () => {
  const paragraphs = useMemo(() => [
        "The quick brown fox jumps over the lazy dog.",
        "Pack my box with five dozen liquor jugs.",
        "How razorback-jumping frogs can level six piqued gymnasts!",
        "A wizard's job is to vex chumps quickly in fog.",
        "Bright vixens jump; dozy fowl quack.",
        "Jinxed wizards pluck ivy from the big quilt.",
        "My faxed joke won a pager in the cable TV quiz show.",
        "Crazy Fredrick bought many very exquisite opal jewels.",
        "We promptly judged antique ivory buckles for the next prize.",
        "Two driven jocks help fax my big quiz.",
        "The five boxing wizards jump quickly.",
        "How quickly daft jumping zebras vex.",
        "Heavy boxes perform quick waltzes and jigs.",
        "Zany jokes perplexed the witty crowd.",
        "Glib jocks quiz nymph to vex dwarf.",
        "Jellybeans are the best treats in the candy shop.",
        "A dozen kittens were playing in the garden.",
        "He puzzled over the complex math problem.",
        "She swiftly solved the crossword puzzle.",
        "The wizard waved his wand and cast a spell.",
        "Bright lights illuminated the night sky.",
        "Raindrops pattered against the windowpane.",
        "The detective followed the mysterious clues.",
        "She painted a beautiful landscape on the canvas.",
        "The chef prepared a delicious gourmet meal.",
        "The athlete trained rigorously for the marathon.",
        "The musician composed a symphony in her studio.",
        "The writer crafted an engaging novel.",
        "The scientist conducted groundbreaking experiments.",
        "The teacher inspired her students to learn.",
        "The artist sculpted a masterpiece from marble.",
        "The gardener tended to the blooming flowers.",
        "The traveler explored distant lands and cultures.",
        "The baker made fresh bread and pastries.",
        "The librarian organized the books on the shelves.",
        "The architect designed a modern skyscraper.",
        "The engineer developed innovative technologies.",
        "The programmer wrote code for the new app.",
        "The entrepreneur launched a successful startup.",
        "The pilot navigated the plane through turbulent skies.",
        "The doctor treated patients with compassion.",
        "The nurse provided excellent care to her patients.",
        "The firefighter bravely rescued people from the fire.",
        "The police officer protected the community.",
        "The soldier served his country with honor.",
        "The sailor navigated the vast oceans.",
        "The astronaut explored the depths of space.",
        "The farmer harvested crops from the fields.",
        "The fisherman cast his net into the sea.",
        "The hunter tracked animals through the forest.",
        "The explorer discovered ancient ruins.",
        "The mountaineer climbed to the summit.",
        "The cyclist pedaled through scenic routes.",
        "The runner sprinted to the finish line.",
        "The swimmer swam laps in the pool.",
        "The dancer performed gracefully on stage.",
        "The actor delivered a captivating performance.",
        "The director orchestrated a brilliant film.",
        "The producer managed the production team.",
        "The editor refined the manuscript for publication.",
        "The publisher released the book to the public.",
        "The agent represented the artist's interests.",
        "The critic reviewed the latest movie.",
        "The journalist reported on breaking news.",
        "The photographer captured stunning images.",
        "The designer created fashionable clothing.",
        "The model showcased the latest trends.",
        "The stylist curated a chic wardrobe.",
        "The jeweler crafted exquisite jewelry.",
        "The potter molded clay into beautiful pottery.",
        "The blacksmith forged metal into tools.",
        "The carpenter built sturdy furniture.",
        "The plumber fixed the leaking pipe.",
        "The electrician wired the new house.",
        "The mechanic repaired the broken car.",
        "The driver chauffeured the guests around town.",
        "The janitor cleaned the office building.",
        "The custodian maintained the school grounds.",
        "The security guard patrolled the premises.",
        "The receptionist greeted visitors at the front desk.",
        "The secretary organized the executive's schedule.",
        "The accountant balanced the financial books.",
        "The banker approved the loan application.",
        "The teller handled the customer's transaction.",
        "The broker advised clients on investments.",
        "The trader bought and sold stocks.",
        "The analyst researched market trends.",
        "The manager oversaw the project's progress.",
        "The supervisor trained the new employees.",
        "The executive made strategic business decisions.",
        "The board member attended the quarterly meeting.",
        "The shareholder received dividends from the company.",
        "The investor funded the startup's growth.",
        "The philanthropist donated generously to charity.",
        "The volunteer helped at the community center.",
        "The advocate campaigned for social justice.",
        "The activist organized a peaceful protest.",
        "The lawyer represented the client in court.",
        "The judge presided over the trial.",
        "The jury deliberated on the verdict."
  ], []);

  const [currentParagraph, setCurrentParagraph] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  const loadParagraph = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    setCurrentParagraph(paragraphs[randomIndex]);
    setCharIndex(0);
    setMistakes(0);
    setIsActive(false);
    setTimeLeft(60);
    setWpm(0);
    setCpm(0);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, [paragraphs]);

  useEffect(() => {
    loadParagraph();
  }, [loadParagraph]);

  useEffect(() => {
    if (inputRef.current) {
      const focusInput = () => inputRef.current.focus();
      document.addEventListener('keydown', focusInput);
      return () => document.removeEventListener('keydown', focusInput);
    }
  }, [inputRef]);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isActive, timeLeft]);

  const calculateWpm = useCallback(() => {
    const wordsTyped = (charIndex - mistakes) / 5;
    const minutes = (60 - timeLeft) / 60;
    setWpm(Math.round(wordsTyped / minutes));
  }, [charIndex, mistakes, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 || charIndex === currentParagraph.length) {
      clearInterval(timerRef.current);
      calculateWpm();
      setIsActive(false); // Stop the timer when paragraph ends
    }
  }, [timeLeft, charIndex, calculateWpm, currentParagraph.length]);

  const handleTyping = (e) => {
    const typedChar = e.target.value.charAt(charIndex);
    if (charIndex < currentParagraph.length && timeLeft > 0) {
      if (!isActive) {
        setIsActive(true);
      }
      if (currentParagraph[charIndex] === typedChar) {
        setCharIndex(charIndex + 1);
      } else {
        setMistakes(mistakes + 1);
        setCharIndex(charIndex + 1); // Increase charIndex even if there is a mistake
      }
      setCpm(charIndex + 1 - mistakes);
    }
  };

  const handleReset = () => {
    loadParagraph();
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white h-screen flex flex-col items-center justify-center">
      <div className="wrapper w-full max-w-lg p-5 bg-gray-800 rounded-lg shadow-md">
        <input
          type="text"
          className="input-field w-full p-3 text-2xl bg-gray-700 text-white rounded-md"
          ref={inputRef}
          onInput={handleTyping}
        />
        <div className="content-box p-5 mt-5 bg-gray-700 rounded-md border border-gray-300">
          <div className="typing-text mb-5">
            <p>
              {currentParagraph.split('').map((char, index) => (
                <span
                  key={index}
                  className={`${
                    index === charIndex ? 'text-yellow-400' : ''
                  } ${index < charIndex && currentParagraph[index] === inputRef.current.value[index] ? 'text-green-500' : ''} ${
                    index < charIndex && currentParagraph[index] !== inputRef.current.value[index] ? 'text-red-500' : ''
                  }`}
                >
                  {char}
                </span>
              ))}
            </p>
          </div>
          <div className="content flex justify-between items-center flex-wrap">
            <ul className="result-details">
              <li className="time mb-2">
                <p>Time left:</p>
                <span>
                  <b>{timeLeft}</b>
                </span>
              </li>
              <li className="mistake mb-2">
                <p>Mistakes:</p>
                <span>{mistakes}</span>
              </li>
              <li className="wpm mb-2">
                <p>WPM:</p>
                <span>{wpm}</span>
              </li>
              <li className="cpm mb-2">
                <p>CPM:</p>
                <span>{cpm}</span>
              </li>
            </ul>
            <button
              className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-3"
              onClick={handleReset}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingTest;
