import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  });
  const [favorites, setFavorites] = useState([]);

  const quotes = [
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "In a gentle way, you can shake the world.", author: "Mahatma Gandhi" },
    { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
    { text: "You can't cross the sea merely by standing and staring at the water.", author: "Rabindranath Tagore" },
    { text: "The butterfly counts not months but moments, and has time enough.", author: "Rabindranath Tagore" },
    { text: "Faith is the bird that feels the light when the dawn is still dark.", author: "Rabindranath Tagore" },
    { text: "Arise, awake, and stop not until the goal is achieved.", author: "Swami Vivekananda" },
    { text: "Take risks in your life. If you win, you can lead, if you lose, you can guide.", author: "Swami Vivekananda" },
    { text: "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.", author: "Swami Vivekananda" },
    { text: "Manpower without Unity is not a strength unless it is harmonized and united properly, then it becomes a spiritual power.", author: "Sardar Vallabhbhai Patel" },
    { text: "Faith is of no evil in the absence of strength. Faith and strength, both are essential to accomplish any great work.", author: "Sardar Vallabhbhai Patel" },
    { text: "By common endeavor we can raise the country to a new greatness, while a lack of unity will expose us to fresh calamities.", author: "Sardar Vallabhbhai Patel" },
    { text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.", author: "A. P. J. Abdul Kalam" },
    { text: "You have to dream before your dreams can come true.", author: "A. P. J. Abdul Kalam" },
    { text: "If you want to shine like a sun, first burn like a sun.", author: "A. P. J. Abdul Kalam" },
    { text: "Climbing to the top demands strength, whether it is to the top of Mount Everest or to the top of your career.", author: "A. P. J. Abdul Kalam" },
    { text: "To succeed in your mission, you must have single-minded devotion to your goal.", author: "A. P. J. Abdul Kalam" },
    { text: "Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me.", author: "A. P. J. Abdul Kalam" },
    { text: "Excellence is a continuous process and not an accident.", author: "A. P. J. Abdul Kalam" },
    { text: "All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.", author: "A. P. J. Abdul Kalam" },
    { text: "Educationists should build the capacities of the spirit of inquiry, creativity, entrepreneurial and moral leadership among students and become their role model.", author: "A. P. J. Abdul Kalam" },
    { text: "We will be remembered only if we give to our younger generation a prosperous and safe India, resulting out of economic prosperity coupled with civilizational heritage.", author: "A. P. J. Abdul Kalam" },
    { text: "Thinking is the capital, Enterprise is the way, Hard Work is the solution.", author: "A. P. J. Abdul Kalam" },
    { text: "The best brains of the nation may be found on the last benches of the classroom.", author: "A. P. J. Abdul Kalam" },
    { text: "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.", author: "A. P. J. Abdul Kalam" },
    { text: "Creativity is the key to success in the future, and primary education is where teachers can bring creativity in children at that level.", author: "A. P. J. Abdul Kalam" },
    { text: "Great dreams of great dreamers are always transcended.", author: "A. P. J. Abdul Kalam" },
    { text: "Let us sacrifice our today so that our children can have a better tomorrow.", author: "A. P. J. Abdul Kalam" },
    { text: "One of the very important characteristics of a student is to question. Let the students ask questions.", author: "A. P. J. Abdul Kalam" },
    { text: "To become 'unique,' the challenge is to fight the hardest battle which anyone can imagine until you reach your destination.", author: "A. P. J. Abdul Kalam" },
    { text: "Science is a beautiful gift to humanity; we should not distort it.", author: "A. P. J. Abdul Kalam" },
    { text: "War is never a lasting solution for any problem.", author: "A. P. J. Abdul Kalam" },
    { text: "The bird is powered by its own life and by its motivation.", author: "A. P. J. Abdul Kalam" },
    { text: "We should not give up and we should not allow the problem to defeat us.", author: "A. P. J. Abdul Kalam" },
    { text: "Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me.", author: "A. P. J. Abdul Kalam" },
    { text: "Excellence is a continuous process and not an accident.", author: "A. P. J. Abdul Kalam" },
    { text: "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.", author: "A. P. J. Abdul Kalam" },
    { text: "Small aim is a crime; have great aim.", author: "A. P. J. Abdul Kalam" },
    { text: "If four things are followed - having a great aim, acquiring knowledge, hard work, and perseverance - then anything can be achieved.", author: "A. P. J. Abdul Kalam" },
    { text: "My message, especially to young people is to have courage to think differently, courage to invent, to travel the unexplored path, courage to discover the impossible and to conquer the problems and succeed. These are great qualities that they must work towards. This is my message to the young people.", author: "A. P. J. Abdul Kalam" },
    { text: "To succeed in your mission, you must have single-minded devotion to your goal.", author: "A. P. J. Abdul Kalam" },
    { text: "One of the very important characteristics of a student is to question. Let the students ask questions.", author: "A. P. J. Abdul Kalam" },
    { text: "You have to dream before your dreams can come true.", author: "A. P. J. Abdul Kalam" },
    { text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.", author: "A. P. J. Abdul Kalam" },
    { text: "We will be remembered only if we give to our younger generation a prosperous and safe India, resulting out of economic prosperity coupled with civilizational heritage.", author: "A. P. J. Abdul Kalam" },
    { text: "To become 'unique,' the challenge is to fight the hardest battle which anyone can imagine until you reach your destination.", author: "A. P. J. Abdul Kalam" },
    { text: "We should not give up and we should not allow the problem to defeat us.", author: "A. P. J. Abdul Kalam" },
    { text: "All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.", author: "A. P. J. Abdul Kalam" },
    { text: "Thinking should become your capital asset, no matter whatever ups and downs you come across in your life.", author: "A. P. J. Abdul Kalam" },
    { text: "Man needs his difficulties because they are necessary to enjoy success.", author: "A. P. J. Abdul Kalam" },
    { text: "Creativity is the key to success in the future, and primary education is where teachers can bring creativity in children at that level.", author: "A. P. J. Abdul Kalam" },
    { text: "Great dreams of great dreamers are always transcended.", author: "A. P. J. Abdul Kalam" },
    { text: "Let us sacrifice our today so that our children can have a better tomorrow.", author: "A. P. J. Abdul Kalam" },
  
  ];

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const toggleFavorite = (quoteText) => {
    const isFavorite = favorites.some(quote => quote.text === quoteText);
    if (isFavorite) {
      setFavorites(favorites.filter(quote => quote.text !== quoteText));
    } else {
      const quoteToAdd = quotes.find(quote => quote.text === quoteText);
      if (quoteToAdd) {
        setFavorites([...favorites, quoteToAdd]);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4 animate-pulse">Random Quote</h1>
      <div className="bg-gray-800 p-4 rounded shadow-md mb-4">
        <p className="text-xl">{quote.text}</p>
        <p className="text-right text-gray-400">- {quote.author}</p>
      </div>
      
      <h1 className="text-2xl font-semibold mb-2">Favorite Quotes</h1>
      {favorites.length === 0 ? (
        <p>No favorite quotes selected.</p>
      ) : (
        favorites.map((fav, index) => (
          <div key={index} className="bg-gray-800 p-2 rounded shadow-md mb-2">
            <p>{fav.text}</p>
            <p className="text-right text-gray-400">- {fav.author}</p>
          </div>
        ))
      )}

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition-transform transform hover:scale-105"
        onClick={handleRandom}
      >
        Display Random Quote
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 transition-transform transform hover:scale-105"
        onClick={() => toggleFavorite(quote.text)}
      >
        Add to Favorites
      </button>
    </div>
  );
};

export default RandomQuote;
