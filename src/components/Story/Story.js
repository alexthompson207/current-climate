import './Story.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Story = ({ title, author, image, altText, publishedDate }) => {

  return (
    <Link to={`/${publishedDate}`} className='story-card'>
      <img className='story-img' src={image} alt={altText} />
      <div className='story-text-box'>
        <h2 className='story-title'>{title}</h2>
        <p className='story-author'>{author}</p>
      </div>
    </Link>
  )
}

export default Story;

Story.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired
};