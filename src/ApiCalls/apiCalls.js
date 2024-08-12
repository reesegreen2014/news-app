const apiKey = process.env.REACT_APP_NEWS_API_KEY;
const apiUrl = `https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`;

export const fetchArticles = () => {
  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data.articles)
    .catch(error => {
      console.error('Error fetching articles:', error);
      return [];
    });
};
