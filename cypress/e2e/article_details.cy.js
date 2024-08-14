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
      cy.visit('http://localhost:3000');
    });
  
    it('displays articles in grid', () => {
      cy.get('.article-list').should('exist');
      cy.get('.article-card-link').first().contains('This Ancient Technology Is Helping Millions Stay Cool');
    });

    it('should navigate to article details', () => {
        cy.get('[href="/article/0"] > .article-card > .article-image').click();
        cy.get('.article-details-container').should('exist');
        cy.get('.details-title').should('contain', 'This Ancient Technology')
        cy.get('.back-button').should('exist');
    })

    it('should navigate back to home page', () => {
        cy.get('[href="/article/1"] > .article-card > .article-image').click();
        cy.get('.back-button').click();
        cy.url('should.be', 'localhost:3000')
    })
  });
  