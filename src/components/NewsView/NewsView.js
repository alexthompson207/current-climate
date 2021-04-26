import './NewsView.css';
import React from 'react';
import Story from '../Story/Story';
import PropTypes from 'prop-types';

const NewsView = ({ stories, filteredStories, searching, error }) => {

  let storiesToDisplay = [];
  if (filteredStories.length && searching) {
    storiesToDisplay = filteredStories;
  } else if (!filteredStories.length && searching) {
    return (<h1>No articles match your search, please try again!</h1>)
  } else {
    storiesToDisplay = stories;
  }


  const storyCards = storiesToDisplay.map((story) => {
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
    <section className='news-view'>
      <h2 className='news-results'>Number of articles: ({storyCards.length})</h2>
      {!stories.length && !error && <h2>Loading...</h2>}
      {storyCards}
    </section>
  )
}

export default NewsView;

NewsView.propTypes = {
  stories: PropTypes.array.isRequired,
  filteredStories: PropTypes.array.isRequired,
  searching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};