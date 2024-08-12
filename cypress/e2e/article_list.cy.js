describe('Articles List', () => {
    beforeEach(() => {
      cy.fixture('articles').then((articles) => {
        cy.intercept('GET', '**/v2/everything*', {
          statusCode: 200,
          body: {
            articles: articles,
          },
        }).as('getArticles');
      });
      cy.visit('http://localhost:3000');
    });
  
    it('displays articles in grid', () => {
      cy.get('.article-list').should('exist');
      cy.get('.article-card-link').first().contains('This Ancient Technology Is Helping Millions Stay Cool');
    });
  });
  