import './story.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Story = ({ title, author, image, altText, publishedDate }) => {

  return (
    <Link to={`/${publishedDate}`} className='story-card'>
      {/* <article className='story-card'> */}
      <img className='story-img' src={image} alt={altText} />
      <div className='story-text-box'>
        <h2 className='story-title'>{title}</h2>
        <p className='story-author'>{author}</p>
      </div>
      {/* </article> */}
    </Link>
  )
}

export default Story;