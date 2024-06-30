import React, { useState } from 'react'

const TodoList = () => {

    const [todo,setTodo] = useState('');
    const [todoList,setTodoList] = useState([]);


    const handleTodo = (e)=>{
        setTodo(e.target.value);
    }
    const handleAdd = (e)=>{
        e.preventDefault();
        setTodoList([...todoList,todo]);
        console.log(todoList);
        setTodo('');
    }
    const deleteTodo = (deleteTodo)=>{
        setTodoList(todoList.filter(todo=>todo !== deleteTodo));
    }
    const EditTodo = (deleteTodo)=>{
        setTodo(deleteTodo);
        setTodoList(todoList.filter(todo=>todo !== deleteTodo));
    }
  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen">
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 className='text-3xl font-extrabold mb-6 text-center text-indigo-400 animate-pulse'>Todo List</h1>
      <div className='flex flex-col items-center'>
        <input 
          type="text" 
          placeholder='Enter your todo' 
          name='todo' 
          value={todo} 
          onChange={handleTodo}  
          className="mb-4 p-3 w-80 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        />
        <button 
          className="w-36 bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200" 
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
    <div className="mt-8 w-full max-w-md">
      {todoList.length === 0 ? (
        <p className="text-gray-400 text-center animate-bounce">No todos added yet!</p>
      ) : (
        <ul className="space-y-4">
          {todoList.map((todo, index) => (
            <li key={index} className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <p className="text-gray-300 font-mono font-semibold">{todo}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => EditTodo(todo)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(todo)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:outline-none transition duration-200"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>

  
  )
}

export default TodoList
