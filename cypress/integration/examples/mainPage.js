describe('Home View Testing', () => {

  beforeEach(() => {
    cy.fixture('testStories.json').then(stories => {
      cy.intercept('https://api.nytimes.com/svc/topstories/v2/climate.json?api-key=b3M1MC9DPZ6AYoCBVQ98cGQZYXRjwuoZ', stories)
    })
    cy.visit('http://localhost:3000/');
  })

  it('should have a title', () => {
    cy.get('h1').contains('Current Climate')
  });
})