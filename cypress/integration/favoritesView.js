describe('Favorites View Features', () => {

  beforeEach(() => {
    cy.fixture('testStories').then(stories => {
      cy.intercept('https://api.nytimes.com/svc/topstories/v2/climate.json?api-key=b3M1MC9DPZ6AYoCBVQ98cGQZYXRjwuoZ', stories)
    })
    cy.visit('http://localhost:3000/');
    cy.get('.nav-link-fav').click();
  });

  it('should have a title', () => {
    cy.get('h1').contains('Your Favorite Articles')

  });
})
