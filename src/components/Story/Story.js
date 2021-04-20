import './story.css';
import React from 'react';

const Story = ({ title, author, image, altText }) => {

  return (
    <article>
      <img src={image} alt={altText} />
      <h2>{title}</h2>
      <p>{author}</p>

    </article>
  )
}

export default Story;