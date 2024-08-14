import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import placeholderImage from '../../images/newsImage.jpg';
import { fetchArticles } from '../../ApiCalls/apiCalls'; 
import './ArticleDetails.css';

const ArticleDetails = ({ onBackToHome }) => {
  const { id } = useParams(); 
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles()
      .then(articles => {
        const articleUrl = id; 
        const selectedArticle = articles.find(article => article.url === articleUrl); 
        if (selectedArticle) {
          setArticle(selectedArticle);
        } else {
          setError('Article not found');
        }
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching article');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading article...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="article-details-container">
      <Link to="/" className="back-button" onClick={onBackToHome}>Back To Home</Link>
      <h1 className="details-title">{article.title}</h1>
      <img 
        src={article.urlToImage || placeholderImage} 
        alt={article.title} 
        className="details-image" 
      />
      <p className="details-author">By {article.author}</p>
      <p className="details-date">{new Date(article.publishedAt).toLocaleDateString()}</p>
      <p className="details-content">{article.content}</p>
      <a href={article.url} className="details-link" target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default ArticleDetails;
