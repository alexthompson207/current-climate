import './storyDetails.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StoryDetails = ({ currentStory, addFavorite, favorites }) => {

  const { title, photo, photoAlt, author, overview, link } = currentStory;

  const handleClick = () => {
    addFavorite(currentStory)
    favoriteButton()
  }

  const favoriteButton = () => {
    const isFavorite = favorites.find(favorite => favorite.title === currentStory.title)

    if (!isFavorite) {
      return '/images/heart.svg'
    } else {
      return '/images/red-heart.svg'
    }
  }

  return (
    <>
      <Link to='/' className='back-button'>Home</Link>
      <section className='story-details-view'>
        <button onClick={() => handleClick()} className='fav-btn'><img className='fav-icon' src={favoriteButton()} alt='favorite heart icon' /></button>
        <h1 className='details-title'>{title}</h1>
        <img className='details-img' src={photo} alt={photoAlt}></img>
        <h2 className='details-overview'>{overview}</h2>
        <p className='details-author'>{author}</p>
        <a href={link} className='details-link' target='_blank' rel='noreferrer'>View the Article on the NYT</a>
      </section>
    </>
  )
}

export default StoryDetails;

StoryDetails.propTypes = {
  currentStory: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
};