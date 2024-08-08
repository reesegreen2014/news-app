import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../../ApiCalls/apiCalls';
import './ArticleList.css';
import placeholderImage from '../../images/newsImage.jpg';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchArticles()
      .then(articlesData => {
        console.log('Fetched articles:', articlesData);
        setArticles(articlesData);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  if (error) {
    return <p>Error loading articles: {error}</p>;
  }

  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <div key={index} className="article-card">
          <img
            src={article.urlToImage || placeholderImage} 
            alt={article.title}
            className="article-image"
          />
          <div className="article-details">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-description">{article.description}</p>
            <p className="article-date">{new Date(article.publishedAt).toLocaleDateString()}</p>
            <p className="article-source">{article.source.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
