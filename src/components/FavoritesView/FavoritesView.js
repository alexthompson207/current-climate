import './favoritesView.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Story from '../Story/Story';
import PropTypes from 'prop-types';

const FavoritesView = ({ favorites }) => {

  const storyCards = favorites.map((story) => {
    return (
      <Story
        publishedDate={story.publishedDate}
        key={story.id}
        title={story.title}
        author={story.author}
        image={story.photo}
        altText={story.photoAlt}
      />
    )
  })

  return (
    <section className='fav-view'>
      <Link to='/' className='back-button'>Home</Link>
      <h1 className='fav-title'>Your Favorite Articles</h1>
      {!favorites.length && <h2>No favorites yet!</h2>}
      {!!favorites.length &&
        <>
          <h2 className='fav-results'>Number of articles: ({storyCards.length})</h2>
          {storyCards}
        </>
      }
    </section>
  )
}

export default FavoritesView;

const { shape, number, string, arrayOf } = PropTypes

const favorite = shape({
  author: string.isRequired,
  id: number.isRequired,
  link: string.isRequired,
  overview: string.isRequired,
  photo: string.isRequired,
  photoAlt: string.isRequired,
  publishedDate: string.isRequired,
  title: string.isRequired
})

FavoritesView.propTypes = {
  favorites: arrayOf(favorite).isRequired
};