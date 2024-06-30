import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import BMICal from './components/BMICal';
import Calculator from './components/Calculator';
import ExpenseTrack from './components/ExpenseTracker';
import TodoList from './components/TodoList';
import { CartProvider } from './components/CartContext';
import ShoppingCart from './components/ShoppingCart';
import Pagination from './components/Pagination';
import RandomQuote from './components/RandomQuote';
import Weather from './components/Weather';
import News from './components/NewsApp';
import Pomodoro from './components/pomodoro';
import TypingTest from './components/TypingTest';
import GuessTheNumberGame from './components/GuessNumb';
import SignatureApp from './components/Signature';
import StonePaperscissor from './components/StonePaperScissor';
import TicTacToe from './components/TicTacToe';

const ScrollToBottom = () => {
  const bottomRef = useRef(null);

  const { pathname } = useLocation();

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return <div ref={bottomRef} />;
};

const Main = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-4">
        <div className="text-4xl font-bold font-serif text-white mb-6">My Tools</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-14">
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-lg font-bold font-serif text-gray-300 mb-4">Calculator</p>
            <img src="./calculator.png" alt="Calculator" className="rounded-md w-40 h-auto mx-auto mb-4" />
            <Link to="/calculator" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explore
            </Link>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-lg font-bold font-serif text-gray-300 mb-4">Expense Tracker</p>
            <img src="./expense.png" alt="Expense Tracker" className="rounded-md w-40 h-auto mx-auto mb-4" />
            <Link to="/expense-tracker" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explore
            </Link>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-lg font-bold font-serif text-gray-300 mb-4">Todo List</p>
            <img src="./todo.png" alt="Todo List" className="rounded-md w-40 h-auto mx-auto mb-4" />
            <Link to="/todo-list" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explore
            </Link>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-lg font-bold font-serif text-gray-300 mb-4">BMI Calculator</p>
            <img src="./bmi.png" alt="BMI Calculator" className="rounded-md w-40 h-auto mx-auto mb-4" />
            <Link to="/bmi-cal" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explore
            </Link>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-lg font-bold font-serif text-gray-300 mb-4">News App</p>
            <img src="./news.png" alt="news-app" className="rounded-md w-40 h-auto mx-auto mb-4" />
            <Link to="/news" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explore
            </Link>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-lg font-bold font-serif text-gray-300 mb-4">Random Quote</p>
            <img src="./quote.png" alt="random-quote" className="rounded-md w-40 h-auto mx-auto mb-4" />
            <Link to="/quote" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explore
            </Link>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-lg font-bold font-serif text-gray-300 mb-4">Shopping Cart</p>
            <img src="./cart.png" alt="shopping-cart" className="rounded-md w-40 h-auto mx-auto mb-4" />
            <Link to="/shoppingCart" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explore
            </Link>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-lg font-bold font-serif text-gray-300 mb-4">Pagination</p>
            <img src="./pagination.png" alt="pagination" className="rounded-md w-40 h-auto mx-auto mb-4" />
            <Link to="/pagination" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explore
            </Link>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-lg font-bold font-serif text-gray-300 mb-4">Typing Speed Test</p>
            <img src="./typing.png" alt="typing" className="rounded-md w-40 h-auto mx-auto mb-4" />
            <Link to="/typing-test" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explore
            </Link>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-lg font-bold font-serif text-gray-300 mb-4">Signature App</p>
            <img src="./signature.png" alt="signature" className="rounded-md w-40 h-auto mx-auto mb-4" />
            <Link to="/signature" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explore
            </Link>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-lg font-bold font-serif text-gray-300 mb-4">Weather</p>
            <img src="./weather.png" alt="weather" className="rounded-md w-40 h-auto mx-auto mb-4" />
            <Link to="/weather" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explore
            </Link>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-lg font-bold font-serif text-gray-300 mb-4">Pomodoro Timer</p>
            <img src="./timer.png" alt="pomodoro" className="rounded-md w-40 h-auto mx-auto mb-4" />
            <Link to="/pomodoro" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explore
            </Link>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-lg font-bold font-serif text-gray-300 mb-4">Guess The Number</p>
            <img src="./guess.png" alt="guess number" className="rounded-md w-40 h-auto mx-auto mb-4" />
            <Link to="/guess-number" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explore
            </Link>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-lg font-bold font-serif text-gray-300 mb-4">Tic Tac Toe</p>
            <img src="./ttt.png" alt="tic-tac-toe" className="rounded-md w-40 h-auto mx-auto mb-4" />
            <Link to="/tic-tac-toe" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explore
            </Link>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-lg font-bold font-serif text-gray-300 mb-4">Stone Paper Scissor</p>
            <img src="./sps.png" alt="stone-paper-scissor" className="rounded-md w-40 h-auto mx-auto mb-4" />
            <Link to="/stone-paper-scissor" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explore
            </Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/bmi-cal" element={<BMICal />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/expense-tracker" element={<ExpenseTrack />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/quote" element={<RandomQuote />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/news" element={<News />} />
        <Route path="/signature" element={<SignatureApp/>} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/tic-tac-toe" element={<TicTacToe/>} />
        <Route path='stone-paper-scissor' element={<StonePaperscissor/>}/>
        <Route path="/typing-test" element={<TypingTest />} />
        <Route path="/guess-number" element={<GuessTheNumberGame/>} />
        <Route path="/shoppingCart" element={<CartProvider><ShoppingCart /></CartProvider>} />
      </Routes>

      <ScrollToBottom />
    </Router>
  );
};

export default Main;
