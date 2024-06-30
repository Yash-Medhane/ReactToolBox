import React, { useState } from 'react';

const ExpenseTracker = () => {

  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [total,setTotal] = useState(0);

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === 'expense') {
      setExpense(value);
    } else if (name === 'amount') {
      setAmount(value);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (expense && amount) {
      setExpenses([...expenses, { exp: expense, amount }]);
      setExpense('');
      setAmount('');
      setTotal(total+parseInt(amount));
    }
  };

  const deleteExpense = (expenseToDelete)=>{
    setExpenses(expenses.filter(exp => exp.exp !== expenseToDelete.exp || exp.amount !== expenseToDelete.amount));
    setTotal(total-parseInt(expenseToDelete.amount))
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 text-white min-h-screen">
    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Expense Tracker</h1>
      <div className="mb-4">
        <input
          type="text"
          name="expense"
          value={expense}
          onChange={handleInput}
          placeholder="Expense"
          className="w-full px-4 py-2 mb-2 border rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={handleInput}
          placeholder="Amount"
          className="w-full px-4 py-2 mb-2 border rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={handleAdd}
          className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
        >
          Submit
        </button>
      </div>
      <div>
        {expenses.length === 0 ? (
          <p className="text-gray-400 text-center">No expenses yet</p>
        ) : (
          <ul>
            {expenses.map((expense, index) => (
              <li key={index} className="flex justify-between items-center py-2 border-b border-gray-700">
                <div>
                  <p className="text-gray-200">{expense.exp}</p>
                  <p className="text-gray-400">{expense.amount}</p>
                </div>
                <button
                  onClick={() => deleteExpense(expense)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
        <p className="text-gray-200 font-semibold mt-4">Total Expense: {total}</p>
      </div>
    </div>
  </div>
  );
};
export default ExpenseTracker;
