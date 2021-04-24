describe('Home View Features', () => {

  beforeEach(() => {
    cy.fixture('testStories').then(stories => {
      cy.intercept('https://api.nytimes.com/svc/topstories/v2/climate.json?api-key=b3M1MC9DPZ6AYoCBVQ98cGQZYXRjwuoZ', stories)
    })
    cy.visit('http://localhost:3000/');
  });

  it('should have a title and description', () => {
    cy.get('h1').contains('Current Climate')
    cy.get('.nav-text-box').contains('sourcing important climate articles in an easy straightforward way')
  });
})