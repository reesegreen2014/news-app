import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import ArticleList from '../ArticleList/ArticleList';
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
