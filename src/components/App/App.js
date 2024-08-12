import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import ArticleList from '../ArticleList/ArticleList';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => { 
    setSearchTerm(searchTerm);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<ArticleList searchTerm={searchTerm} />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
