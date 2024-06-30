import React, { useState } from 'react';

const NewsApp = () => {
  const [news, setNews] = useState([]);
  const [selectedValue, setSelectedValue] = useState('1');

  const fetchNews = () => {
    let url = '';

    switch (selectedValue) {
      case '1':
        url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=5dd2f34e64a043aaa5a060b0554bc3d9';
        break;
      case '2':
        url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=5dd2f34e64a043aaa5a060b0554bc3d9';
        break;
      case '3':
        url = 'https://newsapi.org/v2/everything?q=apple&apiKey=5dd2f34e64a043aaa5a060b0554bc3d9';
        break;
      case '4':
        url = 'https://newsapi.org/v2/everything?q=tesla&apiKey=5dd2f34e64a043aaa5a060b0554bc3d9';
        break;
      case '5':
        url = 'https://newsapi.org/v2/top-headlines?category=technology&apiKey=5dd2f34e64a043aaa5a060b0554bc3d9';
        break;
      case '6':
        url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5dd2f34e64a043aaa5a060b0554bc3d9';
        break;
      default:
        url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=5dd2f34e64a043aaa5a060b0554bc3d9';
    }

    fetch(url)
      .then(res => res.json())
      .then(result => {
        if (result.articles) {
            const filteredNews = result.articles.filter(article => article.title !== "[Removed]");
          setNews(filteredNews);
          console.log(filteredNews)
        } else {
          setNews([]);
        }
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setNews([]);
      });
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen ">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4 my-24">News App</h1>
        <div className="flex flex-col items-center mb-4">
          <select 
            name="news" 
            id="news" 
            value={selectedValue} 
            onChange={handleSelectChange} 
            className="mb-2 p-2 border border-gray-700 rounded bg-gray-800 text-white"
          >
            <option value="1">Topheadlines India</option>
            <option value="2">Topheadlines US</option>
            <option value="3">Apple News</option>
            <option value="4">Tesla News</option>
            <option value="5">Technology News</option>
            <option value="6">Wall Street Journal</option>
          </select>
          <button 
            onClick={fetchNews} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Generate
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.isArray(news) && news.length > 0 ? (
            news.map((article, index) => (
              <div 
                key={index} 
                className="border border-gray-700 p-4 rounded shadow hover:shadow-lg transition duration-300 bg-gray-800"
              >
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                {article.urlToImage && (
                  <img 
                    src={article.urlToImage} 
                    alt={article.title} 
                    className="w-full h-48 object-cover rounded mb-2" 
                  />
                )}
                <p className="mb-2">{article.description}</p>
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:underline"
                >
                  Read more
                </a>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No News Data</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsApp;
