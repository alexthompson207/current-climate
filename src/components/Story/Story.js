import './story.css';
import React from 'react';

const Story = ({ title, author, image, altText }) => {

  return (
    <article className='story-card'>
      <img className='story-img' src={image} alt={altText} />
      <div className='story-text-box'>
        <h2 className='story-title'>{title}</h2>
        <p className='story-author'>{author}</p>
      </div>

    </article>
  )
}

export default Story;