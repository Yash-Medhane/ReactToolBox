import React, { useEffect, useReducer } from 'react';

const itemsPerPage = 5;

const paginationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_TOTAL_ITEMS':
      return { ...state, totalItems: action.payload };
    default:
      return state;
  }
};

const Pagination = () => {
  const [paginationState, dispatch] = useReducer(paginationReducer, {
    currentPage: 1,
    totalItems: 0,
  });

  const data = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`);

  useEffect(() => {
    dispatch({ type: 'SET_TOTAL_ITEMS', payload: data.length });
  }, [data.length]);

  const startIndex = (paginationState.currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = data.slice(startIndex, endIndex);

  const handlePageClick = (newPage) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: newPage });
  };

  return (
    <div className="p-4 text-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold mb-4">Pagination</h1>
      <ul>
        {displayedItems.map((item, index) => (
          <li key={index} className="border-b border-gray-200 dark:border-gray-700 py-2">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button
          onClick={() => handlePageClick(paginationState.currentPage - 1)}
          disabled={paginationState.currentPage === 1}
          className={`px-4 py-2 rounded ${paginationState.currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        >
          Prev
        </button>
        <button
          onClick={() => handlePageClick(paginationState.currentPage + 1)}
          disabled={endIndex >= data.length}
          className={`px-4 py-2 rounded ml-2 ${endIndex >= data.length ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
