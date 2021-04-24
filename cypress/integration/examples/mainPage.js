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
  });

  it('should be able to click on an article and the url will update', () => {
    cy.get('.story-card').first().click()
    cy.url().should('include', '2021-04-23T17:56:13-04:00')
  });

  it('should be able to click on a different article and the url will update', () => {
    cy.get('.story-card').eq(1).click()
    cy.url().should('include', '2021-04-22T06:00:01-04:00')
  });

  it('should display article article title after clicking on an article', () => {
    cy.get('.story-card').eq(1).click()
    cy.get('h1').contains('The U.S. Has a New Climate Goal. How Does It Stack Up Globally?')
  });

})

describe('Home View Search', () => {

  beforeEach(() => {
    cy.fixture('testStories').then(stories => {
      cy.intercept('https://api.nytimes.com/svc/topstories/v2/climate.json?api-key=b3M1MC9DPZ6AYoCBVQ98cGQZYXRjwuoZ', stories)
    })
    cy.visit('http://localhost:3000/');
  });

  it('should allow users to select the search input and type an article title', () => {
    cy.get('input[name="search"]')
      .type('Globally')
      .should('have.value', 'Globally')
  });

  it('should only display articles whose titles match the search input ', () => {
    cy.get('.news-results').contains('3');
    cy.get('.news-view a').should('have.length', 3)

    cy.get('input[name="search"]')
      .type('Globally')
      .should('have.value', 'Globally')

    cy.get('.news-results').contains('1');
    cy.get('.news-view a').should('have.length', 1)
    cy.get('.news-view').contains('The U.S. Has a New Climate Goal. How Does It Stack Up Globally?');
  });

  it('should display an error message if no articles match search criteria', () => {
    cy.get('input[name="search"]')
      .type('Nothing')

    cy.get('.news-view a').should('have.length', 0)
    cy.get('h1').contains('No articles match your search, please try again!')
  });

  it('should be able to clear search and see all articles', () => {
    cy.get('input[name="search"]')
      .type('Nothing')

    cy.get('.news-view a').should('have.length', 0)
    cy.get('input[name="search"]').clear()
    cy.get('.news-view a').should('have.length', 3)
  });
})

describe('Home View Client-Side Error', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/climate.json?api-key=b3M1MC9DPZ6AYoCBVQ98cGQZYXRjwuoZ', {
      statusCode: 404
    })

    cy.visit('http://localhost:3000/');
  });

  it('should display an error message when a data request is broken ', () => {
    cy.get('.error-view').contains('Oops, something went wrong')
  });
})

describe.only('Home View Client-Side Error', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/climate.json?api-key=b3M1MC9DPZ6AYoCBVQ98cGQZYXRjwuoZ', {
      statusCode: 404
    })

    cy.visit('http://localhost:3000/');
  });

  it('should display an error message when a data request is broken ', () => {
    cy.get('.error-view').contains('Oops, something went wrong')
  });
})