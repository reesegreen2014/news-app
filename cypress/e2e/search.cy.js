describe('Search functionality', () => {
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

    it('should correctly filter based on search', () => {
        cy.get('.search-input').type('Apple');
        cy.get('.search-button').click();
        cy.get('[href="/article/0"] > .article-card > .article-details').should('contain', 'Apple will allow developers')
    });

    it('should allow user to clear input', () => {
        cy.get('.search-input').type('Apple');
        cy.get('.search-button').click();
        cy.get('[href="/article/0"] > .article-card > .article-details').should('contain', 'Apple will allow developers')
        cy.get('.clear-button').click();
        cy.get('[href="/article/0"] > .article-card > .article-details').should('contain', 'This Ancient')
    });

    it('should handle errors when no results are returned', () => {
        cy.get('.search-input').type('Reese');
        cy.get('.search-button').click();
        cy.get('.no-results').should('contain', 'No articles found for your search.')
    })
});