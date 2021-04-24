describe('Single Article View Features', () => {

  beforeEach(() => {
    cy.fixture('testStories').then(stories => {
      cy.intercept('https://api.nytimes.com/svc/topstories/v2/climate.json?api-key=b3M1MC9DPZ6AYoCBVQ98cGQZYXRjwuoZ', stories)
    })
    cy.visit('http://localhost:3000/');
    cy.get('.story-card').first().click();
  });

  it('should have a title and description in the header', () => {
    cy.get('h1').contains('Current Climate')
    cy.get('.nav-text-box').contains('sourcing important climate articles in an easy straightforward way')
  });

  it('should display the article title', () => {
    cy.get('.details-title').contains('Biden’s Climate Summit Sets Up a Bigger Test of American Power')
  });

  it('should display the article overview and author', () => {
    cy.get('.story-details-view').contains('There were notable pledges of action, but several important greenhouse gas polluters were conspicuously silent. It showed the challenges that lie ahead.')
    cy.get('.story-details-view').contains('By Somini Sengupta')
  });

  it('should display an image for the article', () => {
    cy.get('.story-details-view').children('img').should('have.class', 'details-img')
  });

  it('should display a link to the article on the New York Times Website', () => {
    cy.get('.story-details-view').children('a').should('have.class', 'details-link')
  });

  it('should allow users to link on the link and be redirected to the NYT website in a new tab', () => {
    cy.get('.details-link').click();
    cy.url().should('include', 'http://localhost:3000/')
  });

  it('should have a home button displayed', () => {
    cy.get('main').contains('Home').should('exist')
  });

  it('should return to the homepage when the home button is clicked', () => {
    cy.url().should('eq', 'http://localhost:3000/2021-04-23T17:56:13-04:00');
    cy.get('.news-view a').should('not.exist');
    cy.get('.back-button').click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.news-view a').should('have.length', 3);
  });

  it('should be able to click on the app logo and return home', () => {
    cy.url().should('eq', 'http://localhost:3000/2021-04-23T17:56:13-04:00');
    cy.get('.news-view a').should('not.exist');
    cy.get('.nav-logo').click();

    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.news-view a').should('have.length', 3);
  });
})