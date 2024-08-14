import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import ArticleList from '../ArticleList/ArticleList';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => { 
    setSearchTerm(term);
  };

  const handleClear = () => {
    setSearchTerm('')
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={handleSearch} onClear={handleClear} />
                <ArticleList searchTerm={searchTerm} />
              </>
            }
          />
          <Route path="/article/:id" element={<ArticleDetails onBackToHome={handleClear} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
