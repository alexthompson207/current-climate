describe('Home View Testing', () => {

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

  it('should have a loading message before articles are displayed', () => {
    cy.get('h2').contains('Loading...')
  });

  it('should not have a home button displayed when on home view', () => {
    cy.get('main').contains('Home').should('not.exist')
  });

  it('should display a section containing all the articles', () => {
    cy.get('.news-view a').should('have.length', 3)
  });

  it('should display an article title, image, and author', () => {
    cy.get('.story-card').first().contains('Biden’s Climate Summit Sets Up a Bigger Test of American Power')
    cy.get('.story-card').first().contains('By Somini Sengupta')
    cy.get('.story-card').first().children('img').should('have.class', 'story-img')
  });

  it('should display a different article title, image, and author', () => {
    cy.get('.story-card').eq(1).contains('The U.S. Has a New Climate Goal. How Does It Stack Up Globally?')
    cy.get('.story-card').eq(1).contains('By Brad Plumer and Nadja Popovich')
    cy.get('.story-card').eq(1).children('img').should('have.class', 'story-img')
  });

  it('should display to the user the number of articles of the page', () => {
    cy.get('.news-results').contains('3');
  });

  it('should display a search bar', () => {
    cy.get('.search-label').contains('Search by Title');
    cy.get('input[name="search"]').should('have.class', 'search-input');
  })
})