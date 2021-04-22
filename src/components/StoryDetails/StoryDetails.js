import './storyDetails.css';
import React from 'react';
import { Link } from 'react-router-dom';

const StoryDetails = ({ currentStory }) => {
  console.log(currentStory)
  const { title, id, photo, photoAlt, publishedDate, author, overview, link } = currentStory;

  return (
    <>
      <Link to='/' className='back-button'>Home</Link>
      <section className='story-details-view'>
        <img className='details-img' src={photo} alt={photoAlt}></img>
        <h1 className='details-title'>{title}</h1>
        <p className='details-author'>{author}</p>
        <h2 className='details-overview'>{overview}</h2>
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
