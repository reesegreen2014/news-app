import React from 'react';
import { useParams } from 'react-router-dom';
import placeholderArticles from '../../mockData'; 
import placeholderImage from '../../images/newsImage.jpg';
import './ArticleDetails.css';

const ArticleDetails = () => {
  const { id } = useParams();  
  const article = placeholderArticles[id];  

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="article-details-container">
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
