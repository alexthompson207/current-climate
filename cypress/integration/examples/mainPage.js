describe('Home View Testing', () => {

  beforeEach(() => {
    cy.fixture('testStories').then(stories => {
      cy.intercept('https://api.nytimes.com/svc/topstories/v2/climate.json?api-key=b3M1MC9DPZ6AYoCBVQ98cGQZYXRjwuoZ', stories)
    })
    cy.visit('http://localhost:3000/');
  })

  it('should have a title', () => {
    cy.get('h1').contains('Current Climate')
  });

  it('should have a loading message before articles are displayed', () => {
    cy.get('h2').contains('Loading...')
  })

  it('should not have a home button displayed when on home view', () => {
    cy.get('main').contains('Home').should('not.exist')
  })

  it('should display a section containing all the articles', () => {
    cy.wait(1000)
    cy.get('.news-view a').should('have.length', 3)
  })
})