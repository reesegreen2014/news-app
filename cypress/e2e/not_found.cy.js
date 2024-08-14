describe('Article Details', () => {
    beforeEach(() => {
      cy.fixture('articles').then((articles) => {
        cy.intercept('GET', '**/v2/everything*', {
          statusCode: 200,
          body: {
            articles: articles,
          },
        }).as('getArticles');
      });
    });

    it('should handle 404 page and allow you to go back to the home page', () => {
        cy.visit('http://localhost:3000/nonsense');
        cy.get('.not-found-container > h1').should('contain', '404 - Page Not Found');
        cy.get('p').should('contain', 'Oops! The page you are looking for does not exist.')
        cy.get('.home-link').should('exist').click();
        cy.url('should.be', 'http://localhost:3000')
    })
})