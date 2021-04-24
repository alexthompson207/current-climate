import './storyDetails.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StoryDetails = ({ currentStory, addFavorite }) => {
  const [isClicked, setisClicked] = useState(false)
  const { title, id, photo, photoAlt, publishedDate, author, overview, link } = currentStory;

  const handleClick = () => {
    console.log(currentStory)
    setisClicked(!isClicked);
    favoriteButton()
    if (isClicked) {
      addFavorite(currentStory)
    }
  }

  const favoriteButton = () => {
    if (!isClicked) {
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
        <a href={link} className='details-link' target='_blank'>View the Article on the NYT</a>
      </section>
    </>
  )
}

export default StoryDetails;


// author
// id
// link
// overview
// photo
// photoAlt
// publishedDate
// title
