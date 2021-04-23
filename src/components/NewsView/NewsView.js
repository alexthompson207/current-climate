import './newsView.css';
import React from 'react';
import Story from '../Story/Story';

const NewsView = ({ stories, filteredStories, searching }) => {
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
      <h2>Number of articles ({storyCards.length})</h2>
      {storyCards}
    </section>
  )
}

export default NewsView;