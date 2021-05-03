[![Build Status](https://travis-ci.com/alexthompson207/current-climate.svg?branch=feature%2Fadd-travisCI)](https://travis-ci.com/alexthompson207/current-climate)

<h1 align="left">Current Climate</h1>

<p align="center">
  <a href="https://current-climate.herokuapp.com/">
    <img src="./public/images/logo.svg" alt="Cartoon image of Earth with leaves above it" width="100" height='100'>
  </a>
    <p align="center">
    <br />
    <a href="https://current-climate.herokuapp.com/"><strong>Explore the app »</strong></a>
    <br />
    <br />
    </p>
  </p>

## Table of Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Functionality](#functionality)
* [Learning Goals](#learning-goals)
* [Next Steps](#next-steps)
* [Technologies Used](#technologies-used)
* [Contributors](#contributors)
* [Contact](#contact)


## About the Project

Current Climate is a niche application designed for users who are passionate about climate change and are subscribed to the New York Times. The target audience of this application is people who ask for the "sports section" or the "funnies", and are easily distracted by all the other news going on in the world. Current Climate sources important climate articles from the New York Times Developer Network [(view documentation)](https://developer.nytimes.com/) in a straightforward way, and eliminates other distracting news by just focusing on climate change articles. Users are able to browse and search all climate change articles, click on a specific article to learn more, and can be redirected to that article on the New York Times website. Furthermore, users are able to favorite/unfavorite an article, and their favorites section will persist on page load. The project specs and rubic are from the Turing School of Software and Design and can be seen [here](https://frontend.turing.edu/projects/module-3/niche-audience.html).


View the deployed site: [here](https://current-climate.herokuapp.com/)

## Installation

1. Fork this [repository](https://github.com/alexthompson207/current-climate).
2. Clone it down to your local machine with `git clone <your SSH Key>`.
3. Navigate into this directory with `cd current-climate`.
4. Run `npm install` to compile the React application.
5. Run `npm start` to see the app running locally.
6. Run `<your text editor> .` to see the code in your text editor.
7. Run `npm run cypress` to open Cypress and see all the tests.


## Functionality
* [All Articles View](#all-articles-view)
* [Article Details](#article-details)
* [Favorite Articles](#favorite-articles)
* [Responsive Design](#responsive-design)
* [Accessibility](#accessibility)

#### All Articles View 
- When a user visits the site they should be able to see all top climate articles from the New York Times and search articles by their title. 

<p align="center">
  <img alt="gif all articles" src="https://media.giphy.com/media/U4zGBjlbCEKRZyUwxD/giphy.gif">
</p>

#### Article Details
- When a user clicks on an article they should see a view with details about the article. 

<p align="center">
  <img alt="gif article details" src="https://media.giphy.com/media/v4QZTTiTcmfXuLXXY9/giphy.gif">
</p>

#### Favorite Articles
- When a user clicks on an article they should be able to add that article to their favorites, which should persist upon page load. 

<p align="center">
  <img alt="gif favorite articles" src="https://media.giphy.com/media/wUNm9SBrgCMtEAItJk/giphy.gif">
</p>

#### Responsive Design
- Responsiveness was a consideration while designing this application. The application viewed from a mobile device:

 <p align="center">
  <img alt="gif responsive design" src="https://media.giphy.com/media/agAS2KUF6ff3DYPExv/giphy.gif">
</p>

#### Accessibility 

Accessibility was a priority in building this application. Current Climate recieved a 100% acecessibility audit from Chrome's Lighthouse tool. Also using the Wave extension, the application has zero errors and zero contrast errors. 


## Learning Goals

- Deepen my understanding of React; class vs. function components, props, and Fetch requests
- Creating a favorites view, using `localStorage`
- Create a multi-page UX using React Router
- Testing User Stories using `Cypress`
- End to End Testing using `Cypress`

## Next Steps

- Add additional API requests to fetch other climate articles from other news sources.
- Create a login feature, so the application feels more personal.


## Technologies Used

- ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![ReactRouter](https://camo.githubusercontent.com/4f9d20f3a284d2f6634282f61f82a62e99ee9906537dc9859decfdc9efbb51ec/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f526f757465722d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d72656163742d726f75746572266c6f676f436f6c6f723d7768697465)
- ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
- ![Webpack](https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black)
- ![Cypress](https://img.shields.io/badge/cypress%20-%2317202C.svg?&style=for-the-badge&logo=cypress&logoColor=white)
- ![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

## Contributors
* [Alex Thompson](https://github.com/alexthompson207) - Application Creator


## Contact

[<img src="https://img.shields.io/badge/LinkedIn-alex--thompson-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin]
[<img src="https://img.shields.io/badge/Github-AlexThompson207-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github]

<!-- Personal Definitions  -->

[linkedin]: https://www.linkedin.com/in/alex-thompson-he-him/
[github]: https://github.com/alexthompson207
