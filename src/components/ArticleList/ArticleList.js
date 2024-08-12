import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../../ApiCalls/apiCalls';
import './ArticleList.css';
import placeholderImage from '../../images/newsImage.jpg';

const ArticleList = ({ searchTerm }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchArticles()
      .then(articlesData => {
        console.log('Fetched articles:', articlesData);
        const filteredData = articlesData.filter(article =>
          !article.title.includes('[Removed]') &&
          !article.description.includes('[Removed]') &&
          !article.content.includes('[Removed]')
        );
        setArticles(filteredData);
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

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.source.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredArticles.length === 0) {
    return <p className="no-results">No articles found for your search.</p>;
  }

  return (
    <div className="article-list">
      {filteredArticles.map((article, index) => (
        <Link to={`/article/${index}`} key={index} className="article-card-link">
          <div className="article-card">
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
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;
