import placeholderArticles from '../mockData';

export const fetchArticles = () => {
  return new Promise((resolve) => {
    resolve(placeholderArticles);
  });
};

