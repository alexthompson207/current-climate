describe('Favorites View Features- 1 favorite', () => {

  beforeEach(() => {
    cy.fixture('testStories').then(stories => {
      cy.intercept('https://api.nytimes.com/svc/topstories/v2/climate.json?api-key=b3M1MC9DPZ6AYoCBVQ98cGQZYXRjwuoZ', stories)
    })
    cy.visit('http://localhost:3000/');
    cy.get('.story-card').first().click();
    cy.get('.fav-icon').click();
    cy.get('.nav-link-fav').click();
  });

  it('should have a title', () => {
    cy.get('h1').contains('Your Favorite Articles')
  });

  it('should display to the user the number of articles they have favorited', () => {
    cy.get('.fav-results').contains('1');
  });

  it('should display a section containing all favorited articles', () => {
    cy.get('.story-card').should('have.length', 1)
  });

  it('should have a home button displayed', () => {
    cy.get('main').contains('Home').should('exist')
  });

  it('should return to the homepage when the home button is clicked', () => {
    cy.url().should('eq', 'http://localhost:3000/articles/favorites');
    cy.get('.news-view a').should('not.exist');
    cy.get('.back-button').click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.news-view a').should('have.length', 3);
  });
})
