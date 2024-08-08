import React from 'react';
import placeholderArticles from '../../mockData';
import './ArticleList.css'

const ArticleList = () => {
    return (
      <div className="article-list">
        {placeholderArticles.map((article, index) => (
          <div key={index} className="article-card">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="article-image" />
            )}
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
