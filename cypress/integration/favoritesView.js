describe('Favorites View Features', () => {

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

  it('should be able to click on the favorited article and view article details', () => {
    cy.url().should('eq', 'http://localhost:3000/articles/favorites');
    cy.get('.story-card').click();
    cy.url().should('eq', 'http://localhost:3000/2021-04-23T17:56:13-04:00');
    cy.get('.details-title').contains('Biden’s Climate Summit Sets Up a Bigger Test of American Power');
  });

  it('should be able to click the favorites heart icon and unfavorite the article', () => {
    cy.get('.story-card').click();
    cy.get('.fav-icon').should('have.attr', 'src')
      .then(src => {
        expect(src).to.equal('/images/red-heart.svg')
      })
    cy.get('.fav-icon').click();
    cy.get('.fav-icon').should('have.attr', 'src')
      .then(src => {
        expect(src).to.equal('/images/heart.svg')
      })
  });

  it('should see no favorite articles after removing favorite', () => {
    cy.get('.story-card').click();
    cy.get('.fav-icon').click();
    cy.get('.nav-link-fav').click();
    cy.get('h2').contains('No favorites yet!');
  });

  it('should be able to add a favorite', () => {
    cy.get('.fav-results').contains('1');
    cy.get('.back-button').click();
    cy.get('.story-card').eq(1).click();
    cy.get('.fav-icon').click();
    cy.get('.nav-link-fav').click();
    cy.get('.fav-results').contains('2');
    cy.get('.story-card').should('have.length', 2)
  });
})

describe('Favorites View - No Favorites', () => {

  beforeEach(() => {
    cy.fixture('testStories').then(stories => {
      cy.intercept('https://api.nytimes.com/svc/topstories/v2/climate.json?api-key=b3M1MC9DPZ6AYoCBVQ98cGQZYXRjwuoZ', stories)
    })
    cy.visit('http://localhost:3000/');
    cy.get('.nav-link-fav').click();
  });

  it('should have a title for the page', () => {
    cy.url().should('eq', 'http://localhost:3000/articles/favorites');
    cy.get('h1').contains('Your Favorite Articles');
  });

  it('should have no favorites', () => {
    cy.get('h2').contains('No favorites yet!');
    cy.get('.story-card').should('have.length', 0)
  });

  it('should have a home button displayed', () => {
    cy.get('main').contains('Home').should('exist')
  });
})
