import './storyDetails.css';
import React from 'react';

const StoryDetails = ({ currentStory }) => {
  console.log(currentStory)
  const { title, id, photo, photoAlt, publishedDate, author, overview, link } = currentStory;

  return (
    <section className='story-details-view'>
      <img className='details-img' src={photo} alt={photoAlt}></img>
      <h1 className='details-title'>{title}</h1>
      <p className='details-author'>{author}</p>
      <h2 className='details-overview'>{overview}</h2>
      <h3 className='details-link'>{link}</h3>
    </section>
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
